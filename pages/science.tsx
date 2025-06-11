import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const styles = `
  @keyframes hexagonFlow {
    0% {
      transform: translate(-100px, -100px) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 0.5;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      transform: translate(calc(100vw + 100px), calc(100vh + 100px)) rotate(360deg);
      opacity: 0;
    }
  }

  .hexagon-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
  }

  .hexagon {
    position: fixed;
    width: 100px;
    height: 100px;
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.3s ease;
    pointer-events: none;
    z-index: -1;
    filter: drop-shadow(0 0 3px rgba(179, 65, 111, 0.7));
  }
  
  .hexagon.visible {
    opacity: 0.5;
  }

  .hexagon {
    animation: hexagonFlow 20s linear infinite;
    opacity: 0;
  }
`;

const fixedPositions = [
  { top: '10%', left: '5%', scale: 0.7 },
  { top: '70%', left: '80%', scale: 0.6 },
  { top: '30%', left: '85%', scale: 0.8 },
  { top: '80%', left: '15%', scale: 0.5 },
  { top: '15%', left: '70%', scale: 0.7 },
  { top: '75%', left: '30%', scale: 0.6 },
];

export default function Science() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const cardStyle = {
    background: 'white',
    borderRadius: '12px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: '1.5px solid #e0e3ea',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
    }
  };

  const numberBadgeStyle = {
    flexShrink: 0,
    width: '32px',
    height: '32px',
    minWidth: '32px',
    minHeight: '32px',
    background: '#b3416f',
    color: 'white',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    lineHeight: '1',
    marginRight: '12px'
  };

  return (
    <Layout title="Our Science | Nano Neurosciences">
      <Head>
        <style>{styles}</style>
      </Head>
      <main style={{ width: '100%' }}>
        {/* Animated Hexagon Pattern */}
        <div className="hexagon-pattern">
          {isMounted && fixedPositions.map(({ top, left, scale }, i) => (
            <svg
              key={i}
              className="hexagon visible"
              viewBox="-10 -10 120 120"
              style={{ top, left, transform: `scale(${scale})` }}
            >
              <path
                d="M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 Z"
                fill="none"
                stroke="#b3416f"
                strokeWidth="2.5"
                strokeLinecap="butt"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          ))}
        </div>
        {/* Hero Section */}
        <div 
          ref={heroRef}
          style={{
            position: 'relative',
            width: '100vw',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            height: '60vh',
            minHeight: '400px',
            marginBottom: '4rem',
            overflow: 'hidden',
            zIndex: 1
          }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1
          }} />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '2rem',
          }}>
            <div style={{
              maxWidth: '1200px',
              padding: '0 2rem',
              margin: '0 auto',
              position: 'relative',
              zIndex: 3,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}>
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: 'white',
                marginBottom: '1rem',
                lineHeight: '1.2',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                opacity: 1,
                transform: 'none'
              }}>
                Pioneering the Future of Glaucoma Treatment
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '700px',
                margin: '0 auto 2rem',
                lineHeight: '1.6',
                textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                opacity: 1,
                transform: 'none'
              }}>
                At NanoNeurosciences, we're redefining what's possible in eye care. Our first-in-class nanomedicine combines bioenergetic stimulation with cell survival activation — creating a powerful, long-lasting solution for glaucoma treatment.
              </p>
            </div>
          </div>
        </div>

        {/* Breakthroughs Section */}
        <section style={{
          padding: '0 2rem 4rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.2rem',
            color: '#1a1a2e',
            marginBottom: '2.5rem',
            textAlign: 'center'
          }}>
            Our Cutting-Edge Preclinical Research
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {/* Breakthrough 1 */}
            <div style={cardStyle}>
              <h3 style={{
                color: '#2d2d5a',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={numberBadgeStyle}>1</span>
                Building a Powerful Nanomedicine Library
              </h3>
              <p style={{
                color: '#4a4a6a',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                We're engineering a diverse collection of lipopeptide (LP) sequences designed to form ultra-stable, high-performance nanostructures.
              </p>
            </div>

            {/* Breakthrough 2 */}
            <div style={cardStyle}>
              <h3 style={{
                color: '#2d2d5a',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={numberBadgeStyle}>2</span>
                Optimizing for Strength & Stability
              </h3>
              <p style={{
                color: '#4a4a6a',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                By fine-tuning amphiphilic small molecule (ASM) interactions, we enhance nanocarrier stability — ensuring treatments last longer and work more effectively.
              </p>
            </div>

            {/* Breakthrough 3 */}
            <div style={cardStyle}>
              <h3 style={{
                color: '#2d2d5a',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={numberBadgeStyle}>3</span>
                Rapid, High-Throughput Screening
              </h3>
              <p style={{
                color: '#4a4a6a',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                Using advanced primary human cellular models, we accelerate molecular screening to identify the most promising, high-impact therapies.
              </p>
            </div>

            {/* Breakthrough 4 */}
            <div style={cardStyle}>
              <h3 style={{
                color: '#2d2d5a',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={numberBadgeStyle}>4</span>
                Targeted Drug Delivery Systems
              </h3>
              <p style={{
                color: '#4a4a6a',
                lineHeight: '1.7',
                fontSize: '1.05rem'
              }}>
                Our proprietary nanoparticle technology enables precise, targeted delivery of therapeutics to the eye, maximizing treatment efficacy while minimizing systemic side effects.
              </p>
            </div>
          </div>

          {/* Glaucoma Results Section */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            gap: '3rem',
            margin: '4rem 0',
            padding: '3rem 0',
            borderTop: '1px solid #eee',
            borderBottom: '1px solid #eee'
          }}>
            {/* Video Container */}
            <div style={{
              flex: '1',
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              maxWidth: isMobile ? '100%' : '50%',
              aspectRatio: '16/9',
              backgroundColor: 'transparent',
              padding: 0,
              margin: 0
            }}>
              <video
                poster="/video-poster.jpg"
                controls
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  outline: 'none',
                  border: 'none',
                  boxShadow: 'none',
                  background: 'transparent',
                  margin: 0,
                  padding: 0
                }}
              >
                <source src="/glaucoma-treatment-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Text Content */}
            <div style={{
              flex: '1',
              padding: isMobile ? '1.5rem 0' : '0 1.5rem'
            }}>
              <h2 style={{
                fontSize: '2rem',
                color: '#1a1a2e',
                margin: '0 0 1.5rem 0',
                lineHeight: '1.3'
              }}>
                Transformative Glaucoma Treatment Results
              </h2>
              <p style={{
                color: '#4a4a6a',
                lineHeight: '1.8',
                fontSize: '1.1rem',
                marginBottom: '1.5rem'
              }}>
                Our preclinical studies demonstrate the remarkable efficacy of our nanocarrier technology in treating glaucoma. The video showcases the treatment's mechanism of action and its impact on intraocular pressure regulation.
              </p>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '2rem 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {[
                  'Significant reduction in intraocular pressure',
                  'Enhanced drug delivery to target tissues',
                  'Prolonged therapeutic effect with single administration',
                  'Minimal side effects compared to traditional treatments'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    color: '#4a4a6a',
                    lineHeight: '1.6',
                    fontSize: '1.05rem'
                  }}>
                    <span style={{
                      color: '#b3416f',
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      lineHeight: '1',
                      marginTop: '0.2rem'
                    }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/pipeline" passHref legacyBehavior>
                <a
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#b3416f',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '30px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    marginTop: '1rem',
                    textDecoration: 'none',
                    textAlign: 'center',
                    boxShadow: 'none',
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = '#9d3b6e')}
                  onMouseOut={e => (e.currentTarget.style.background = '#b3416f')}
                >
                  Learn More About Our Pipeline
                </a>
              </Link>
            </div>
          </div>

          {/* Closing Statement */}
          <div style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            padding: '3rem 2rem',
            margin: '3rem auto 0',
            gap: '3rem',
            maxWidth: '1200px'
          }}>
            <div style={{
              flexShrink: 0,
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              background: 'linear-gradient(90deg, #b3416f, #d16b8f, #e0a4c5, #d16b8f, #b3416f)',
              backgroundSize: '200% 100%',
              animation: 'gradientFlow 15s linear infinite',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              boxSizing: 'border-box'
            }}>
              <img 
                src="/nano-neurosciences-logo-2.png" 
                alt="Nano Neurosciences Logo" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </div>
            <div style={{ flex: 1, textAlign: 'right' }}>
              <p style={{
                fontSize: '1.375rem',
                fontWeight: 500,
                lineHeight: '1.6',
                color: '#333',
                margin: 0
              }}>
                NanoNeurosciences isn't just keeping up with the future — we're creating it. Our groundbreaking nanomedicine technology leads the charge in next-generation glaucoma care, offering bold, innovative solutions to protect vision and improve lives.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
