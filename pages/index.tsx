import { useState, useEffect } from 'react';
import Link from "next/link";
import Layout from '../components/Layout';
import Head from 'next/head';

// Add this CSS animation style
const slideInAnimation = `
  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .slide-in {
    animation: slideInFromRight 0.8s ease-out forwards;
  }
`;

const IndexPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFeatureVisible, setIsFeatureVisible] = useState(true);
  const [glaucomaIndex, setGlaucomaIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    setIsMounted(true);
  }, []);

  const changeSlide = (newIndex: number, dir: 'next' | 'prev') => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(dir);
    setGlaucomaIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleNextGlaucoma = () => {
    const nextIndex = Math.min(glaucomaIndex + 1, glaucomaSections.length - 1);
    if (nextIndex !== glaucomaIndex) {
      changeSlide(nextIndex, 'next');
    }
  };

  const handlePrevGlaucoma = () => {
    const prevIndex = Math.max(glaucomaIndex - 1, 0);
    if (prevIndex !== glaucomaIndex) {
      changeSlide(prevIndex, 'prev');
    }
  };
  const glaucomaSections = [
    {
      title: 'Advanced Glaucoma Therapy',
      description: 'NanoNeurosciences is transforming glaucoma treatment with groundbreaking nanomedicines. Our innovative therapy activates the eye’s natural energy production and supports cell survival, improving fluid drainage and reducing intraocular pressure (IOP). But that’s not all — it also delivers essential neuroprotective benefits, shielding the delicate nerve cells that preserve your vision. We’re not just lowering eye pressure — we’re actively protecting your eyesight for the future.'
    },
    {
      title: 'Neuroprotection',
      description: 'Our core technology focuses on neuroprotection. By safeguarding retinal ganglion cells from damage caused by high IOP and other stressors, we aim to preserve vision long-term. This approach goes beyond simply managing pressure; it actively works to keep the optic nerve healthy and prevent the progression of vision loss.'
    },
    {
      title: 'Our Research Pipeline',
      description: 'We are continuously exploring new applications for our nanotechnology platform. Our research pipeline includes next-generation treatments designed to offer even greater efficacy, convenience, and neuroprotective benefits for patients with glaucoma and other neurodegenerative eye diseases. Stay tuned for future breakthroughs.'
    }
  ];

  const features = [
    {
      title: 'Precision Targeting & Controlled Release',
      description: 'Our nanocarriers are engineered to deliver therapeutics with pinpoint accuracy, targeting specific cells or tissues. This precision is coupled with a controlled-release mechanism, ensuring a sustained therapeutic effect exactly where it\'s needed, minimizing systemic exposure and side effects.',
      image: '/images/feature-1.png' // Placeholder image
    },
    {
      title: 'Enhanced Stability & Long-lasting Effects',
      description: 'The unique structure of our lipopeptide-based nanocarriers provides exceptional stability in biological environments. This robustness translates to longer-lasting therapeutic effects from a single dose, reducing the frequency of administration and improving the overall treatment experience.',
      image: '/images/feature-2.png' // Placeholder image
    },
    {
      title: 'Better Adherence, Better Outcomes',
      description: 'By reducing the dosing frequency and improving the side-effect profile, our advanced delivery system promotes better patient adherence to treatment regimens. Improved adherence is directly linked to better clinical outcomes, making our technology a powerful tool in managing chronic diseases.',
      image: '/images/feature-3.png' // Placeholder image
    }
  ];

  return (
    <Layout title="Nano Neurosciences | Revolutionizing Brain-Computer Interfaces">
      <Head>
        <title>Nano Neurosciences</title>
        <style>{slideInAnimation}</style>
      </Head>
      <section style={{
        display: 'flex',
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden'
      }}>
        {/* Hero image container - tall narrow rectangle on the left */}
        <div style={{
          width: '33.33vw',
          height: '100vh',
          position: 'relative',
          left: '150px',
          background: 'url(/hero-bg.jpg) center/cover no-repeat',
          boxShadow: '4px 0 12px rgba(0,0,0,0.1)',
          borderBottomLeftRadius: '24px',
          borderBottomRightRadius: '24px',
          overflow: 'hidden'
        }} />
        
        {/* Content container with blue background */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '4rem 2rem 4rem 8rem',
          backgroundColor: 'transparent',
          position: 'relative',
          marginLeft: 'calc(33.33vw - 300px)'
        }}>
          {/* Blue background that wraps just around the content */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '-150px',
            right: 0,
            transform: 'translateY(-50%)',
            height: 'auto',
            minHeight: '60vh',
            backgroundColor: 'rgba(230, 240, 250, 0.9)',
            borderTopLeftRadius: '24px',
            borderBottomLeftRadius: '24px',
            zIndex: 1,
            overflow: 'hidden'
          }}>
            {/* Gradient Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, rgba(230, 240, 250, 1) 0%, rgba(230, 240, 250, 1) 25%, rgba(230, 240, 250, 0.98) 35%, rgba(230, 240, 250, 0.92) 45%, rgba(230, 240, 250, 0.8) 55%, rgba(230, 240, 250, 0.6) 67%, rgba(230, 240, 250, 0.4) 78%, rgba(230, 240, 250, 0.2) 88%, rgba(230, 240, 250, 0.1) 95%, rgba(230, 240, 250, 0) 100%)',
              zIndex: 1
            }} />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: 'calc(50% + 300px)',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              background: 'url(/images/hero-overlay.png) center/contain no-repeat',
              opacity: 0.9,
              zIndex: 0,
              aspectRatio: '16/9' // Adjust this to match your image's aspect ratio
            }} />
          </div>
          <div style={{
            maxWidth: '600px',
            color: '#1a1a1a',
            textAlign: 'left',
            position: 'relative',
            zIndex: 2,
            paddingLeft: '0',
            marginLeft: '-210px',
            opacity: isMounted ? 1 : 0,
            transform: isMounted ? 'translateX(0)' : 'translateX(50px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}>
            <h1 style={{
              fontSize: '2.4rem',
              fontWeight: 700,
              letterSpacing: '-0.5px',
              marginBottom: '1.5rem',
              color: '#1a1a1a',
              fontFamily: 'Inter, Segoe UI, Helvetica Neue, Arial, sans-serif',
              lineHeight: 1.2
            }}>
              Revolutionary nanomedicines to heal ophthalmological disorders
            </h1>
            <p style={{
              fontSize: '1.1rem',
              fontWeight: 400,
              color: '#333',
              fontFamily: 'Inter, Segoe UI, Helvetica Neue, Arial, sans-serif',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '100%'
            }}>
              We are a pre-clinical biotechnology start-up company developing novel lipopeptide sequences that self-assemble into nanostructures for sustained delivery of neuropeptides, ions and mRNAs.
            </p>
            <Link 
              href="/mission" 
              style={{
                display: 'inline-block',
                padding: '0.8rem 1.8rem',
                backgroundColor: '#b3416f',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 500,
                transition: 'background-color 0.2s',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#9d3b6e'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#b3416f'}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <section
          role="glaucoma"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 0',
            background: '#f7fafd',
            minHeight: '420px',
            position: 'relative',
            gap: '0',
          }}
        >
          {/* Image left, slightly raised */}
          <div style={{
            flex: '0 0 550px',
            maxWidth: '550px',
            marginRight: '0',
            zIndex: 2,
            alignSelf: 'flex-start',
            boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
            borderRadius: '1.2rem',
            overflow: 'hidden',
            background: '#fff',
            marginTop: '32px',
            marginBottom: '16px',
            transform: 'scale(1.1)',
            transformOrigin: 'left top',
            marginLeft: '10px'
          }}>
            <img
              src="/glaucoma-illustration.jpg"
              alt="Glaucoma nanomedicine illustration"
              style={{ 
                width: '100%', 
                height: 'auto', 
                display: 'block',
                objectFit: 'cover'
              }}
            />
          </div>
          {/* Text right, slightly lower, with white rectangle */}
          <div style={{
            flex: '1 1 0',
            marginLeft: '-100px',
            marginTop: '80px',
            zIndex: 3,
            background: '#fff',
            borderRadius: '1.2rem',
            boxShadow: '0 4px 24px 0 rgba(0,0,0,0.09)',
            padding: '2.2rem 2.5rem',
            fontFamily: 'Inter, Segoe UI, Helvetica Neue, Arial, sans-serif',
            fontSize: '1.15rem',
            color: '#1a1a1a',
            lineHeight: 1.7,
            textAlign: 'left',
            alignSelf: 'flex-end',
            maxWidth: '620px'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 700,
              marginBottom: '0.5rem',
              color: '#333'
            }}>
              Transforming Vision
            </h2>
            <h3 style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 400,
              color: '#555',
              margin: '0 0 1.5rem 0',
              lineHeight: 1.3,
            }}>
              At Nano Neurosciences
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
              <button 
                onClick={handlePrevGlaucoma} 
                disabled={glaucomaIndex === 0 || isTransitioning} 
                className="arrow-button"
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: glaucomaIndex === 0 || isTransitioning ? '#ccc' : '#666',
                  transition: 'color 0.2s',
                  padding: '0.5rem 1rem'
                }}
              >
                &larr;
              </button>
              <div style={{ 
                flex: 1, 
                textAlign: 'center', 
                fontStyle: 'italic', 
                color: '#666',
                minHeight: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div 
                  key={`title-${glaucomaIndex}`}
                  className={`carousel-content slide-in ${!isTransitioning ? 'active' : ''} ${direction === 'next' ? 'from-right' : 'from-left'}`}
                >
                  {glaucomaSections[glaucomaIndex].title}
                </div>
              </div>
              <button 
                onClick={handleNextGlaucoma} 
                disabled={glaucomaIndex === glaucomaSections.length - 1 || isTransitioning} 
                className="arrow-button"
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: (glaucomaIndex === glaucomaSections.length - 1 || isTransitioning) ? '#ccc' : '#666',
                  transition: 'color 0.2s',
                  padding: '0.5rem 1rem'
                }}
              >
                &rarr;
              </button>
            </div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#444',
              maxWidth: '550px',
              minHeight: '220px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div 
                key={`desc-${glaucomaIndex}`}
                className={`carousel-content slide-in ${!isTransitioning ? 'active' : ''} ${direction === 'next' ? 'from-right' : 'from-left'}`}
                style={{
                  position: 'absolute',
                  width: '100%',
                  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out'
                }}
              >
                {glaucomaSections[glaucomaIndex].description}
              </div>
            </div>
            <div className="dot-indicators">
              {glaucomaSections.map((_, index) => (
                <div
                  key={index}
                  className={`dot ${glaucomaIndex === index ? 'active' : ''}`}
                />
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/science" passHref legacyBehavior>
                <a className="science-link">Learn more about our science &rarr;</a>
              </Link>
            </div>
          </div>
        </section>
        <section role="vision" style={{
          padding: '4rem 2rem',
          background: '#f9f9f9',
          fontFamily: 'Inter, sans-serif',
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'row',
            gap: '3rem',
            alignItems: 'flex-start',
          }}>
            {/* Left Column: Heading + Panel */}
            <div style={{ flex: '1 1 55%', textAlign: 'left' }}>
              <h2 style={{
                fontSize: '2.2rem',
                fontWeight: 700,
                color: '#1a1a1a',
                margin: '0 0 1.5rem 0',
                lineHeight: 1.4,
              }}>
                Revolutionizing Treatment with Advanced Nanocarriers
              </h2>
              <div style={{
                background: '#fff',
                borderRadius: '1.2rem',
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
                overflow: 'hidden',
              }}>
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    onClick={() => {
                  if (index !== activeIndex) {
                    setIsFeatureVisible(false);
                    setTimeout(() => {
                      setActiveIndex(index);
                      setIsFeatureVisible(true);
                    }, 200);
                  }
                }}
                    className={`feature-item ${index === activeIndex ? 'active' : ''}`}
                  >
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, margin: 0, color: 'inherit' }}>
                      {feature.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Column: Text + Image */}
            <div style={{
              flex: '1 1 45%',
              background: '#fff',
              padding: '2rem 2.5rem',
              borderRadius: '1.2rem',
              boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
              position: 'relative',
            }}>
              <div style={{ position: 'relative', minHeight: '200px' }}>
                <div className="feature-content" style={{
                  opacity: isFeatureVisible ? 1 : 0,
                  transition: 'opacity 0.2s ease-in-out',
                }}>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: '#444',
                    marginTop: 0,
                    paddingBottom: '60px',
                  }}>
                    {features[activeIndex].description}
                  </p>
                </div>
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-140px', 
                  right: '-160px',
                  transform: 'rotate(-10deg)'
                }}>
                  <img 
                    src={features[activeIndex].image} 
                    alt={features[activeIndex].title} 
                    className="feature-image"
                    style={{
                      transition: 'opacity 0.2s ease-in-out',
                      opacity: isFeatureVisible ? 1 : 0,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        section[role='glaucoma'] {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 3rem 0;
          min-height: 420px;
          position: relative;
          gap: 0;
        }
        .science-link {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem;
          font-weight: 600;
          color: #9d3b6e;
          text-decoration: none;
          display: inline-block;
          transition: filter 0.2s ease-in-out;
        }
        .science-link:hover {
          filter: brightness(1.1);
        }
        section[role='vision'] {
          padding: 3rem 1.5rem;
        }

        .feature-item {
          padding: 1.5rem;
          border: 1px solid transparent;
          border-bottom-color: #eee;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
        }
        .feature-item:last-child {
          border-bottom-color: transparent;
        }
        .feature-item h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0;
          color: #333;
          transition: color 0.2s ease-in-out;
        }
        .feature-item:hover {
          background-color: #f9eaf3;
        }
        .feature-item.active {
          background-color: #b15f89;
          border-color: #b15f89;
        }
        .feature-item.active h3 {
          color: #fff;
        }
        
        /* Feature content transitions are now handled inline */
        .feature-image {
          width: 260px;
          height: 260px;
          object-fit: cover;
          border-radius: 0.8rem;
          transition: transform 0.3s ease;
        }
        .feature-image:hover {
          transform: scale(1.05);
        }

        .carousel-content {
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
          opacity: 0;
        }
        
        .carousel-content.slide-in.from-right {
          transform: translateX(40px);
        }
        
        .carousel-content.slide-in.from-left {
          transform: translateX(-40px);
        }
        
        .carousel-content.slide-in.active {
          opacity: 1;
          transform: translateX(0);
        }
        
        .arrow-button {
          background: none;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.5rem;
          color: #666;
          transition: all 0.2s ease;
          padding: 0;
        }
        .arrow-button:hover:not(:disabled) {
          color: #b3416f;
          transform: scale(1.1);
        }
        .arrow-button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          transform: none !important;
        }

        .dot-indicators {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #ccc;
          transition: background-color 0.3s ease;
        }
        .dot.active {
          background-color: #9d3b6e;
        }

        section[role='vision'] h2 {
          font-size: 2.2rem;
        }

        @media (max-width: 900px) {
          section[role='vision'] > div {
            flex-direction: column;
            gap: 2rem;
          }
        }

        @media (max-width: 800px) {
          section[role='glaucoma'] {
            flex-direction: column;
            padding: 2rem 0;
          }
          section[role='glaucoma'] > div:first-child {
            margin: 0 0 1.2rem 0 !important;
            max-width: 90vw !important;
            align-self: center !important;
          }
          section[role='glaucoma'] > div:last-child {
            margin: 0 !important;
            max-width: 95vw !important;
            padding: 1.5rem 1rem !important;
            align-self: center !important;
          }
        }
      `}</style>
    </Layout>
  );
}

export default IndexPage;
