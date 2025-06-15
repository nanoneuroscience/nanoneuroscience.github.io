import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useState, useRef, useEffect } from 'react';
import styles from '../styles/Pipeline.module.css';

export default function Pipeline() {
  const diseases = [
    {
      name: 'Glaucoma',
      img: '/images/target_1.png',
      phase: 'Clinical Trials',
      description: 'Currently in Phase II clinical trials, focusing on neuroprotection and vision preservation.'
    },
    {
      name: 'Optic Neuritis',
      img: '/images/target_2.png',
      phase: 'Preclinical',
      description: 'Preclinical studies underway to evaluate efficacy in animal models.'
    },
    {
      name: 'Retinitis Pigmentosa',
      img: '/images/target_3.png',
      phase: 'Discovery',
      description: 'Discovery phase: target identification and validation in progress.'
    },
    {
      name: 'Macular Degeneration',
      img: '/images/target_4.png',
      phase: 'Clinical Trials',
      description: 'Phase I clinical trials started for age-related macular degeneration.'
    },
    {
      name: 'Diabetic Retinopathy',
      img: '/images/target_5.png',
      phase: 'Preclinical',
      description: 'Preclinical data being collected for diabetic retinopathy therapy.'
    }
  ];
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <Layout title="Our Pipeline | Nano Neurosciences">
      <Head>
        <title>Our Pipeline | Nano Neurosciences</title>
        <meta name="description" content="Explore the Nano Neurosciences research and clinical pipeline." />
        <link rel="preload" as="image" href="/images/hero-bg.jpg" />
      </Head>
      {/* Hero Section matching Science page - moved outside <main> to remove space above */}
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
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url(/images/hero-bg.jpg)",
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
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Our Pipeline
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '700px',
              margin: '0 auto 2rem',
              lineHeight: '1.6',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}>
              Discover the stages of innovation, research, and development at Nano Neurosciences. Our pipeline showcases our commitment to advancing science from concept to clinic.
            </p>
          </div>
        </div>
      </div>
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
        {/* Target Diseases Section */}
        <section style={{ margin: '3rem 0 2rem' }}>
          <h2 style={{ color: '#b3416f', fontWeight: 700, fontSize: '2rem', marginBottom: '2.5rem' }}>Current Targets</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '3rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {/* Carousel */}
            <div style={{
              width: '320px',
              height: '320px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              background: 'none',
              borderRadius: 0,
              boxShadow: 'none',
              border: 'none',
              padding: 0,
            }}>
              <img src={diseases[current].img} alt={diseases[current].name} style={{ width: '100%', height: '100%', objectFit: 'contain', marginBottom: '0.5rem', transition: 'all 0.3s', background: 'none' }} />
              {/* Carousel Controls */}
              
            </div>
            {/* Disease List */}
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.3rem',
              minWidth: '220px',
            }}>
              {diseases.map((d, i) => {
  const isActive = i === current;
  return (
    <li
      key={d.name}
      style={{
        fontWeight: isActive ? 700 : 500,
        color: isActive ? '#b3416f' : '#333',
        background: isActive ? '#f7e7ef' : 'transparent',
        borderRadius: '8px',
        padding: isActive ? '1.2rem 1.2rem 1.2rem 1.2rem' : '0.8rem 1.2rem',
        cursor: 'pointer',
        boxShadow: isActive ? '0 2px 8px rgba(179,65,111,0.07)' : 'none',
        border: isActive ? '1.5px solid #b3416f' : '1.5px solid transparent',
        transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
        position: 'relative',
        minHeight: isActive ? '110px' : 'auto',
        overflow: 'hidden',
      }}
      onClick={() => setCurrent(i)}
    >
      <div>{d.name}</div>
      {isActive && (
        <div style={{
          marginTop: '0.8rem',
          textAlign: 'left',
          color: '#444',
          fontWeight: 400,
          fontSize: '0.98rem',
          lineHeight: 1.5,
        }}>
          <div style={{
            display: 'inline-block',
            background: '#e0e3ea',
            color: '#b3416f',
            borderRadius: '14px',
            padding: '0.18rem 0.85rem',
            fontWeight: 600,
            fontSize: '0.95rem',
            marginBottom: '0.5rem',
            marginRight: '0.7rem',
          }}>{d.phase}</div>
          <span>{d.description}</span>
        </div>
      )}
    </li>
  );
})}
            </ul>
          </div>
        </section>

        <div className={styles.pipelineContainer}>
          <h3 style={{
            color: '#2a5d8f',
            fontSize: '1.5rem',
            marginBottom: '1rem',
            fontWeight: 600
          }}>Meet the Experts Behind Our Research</h3>
          <p style={{
            color: '#555',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            marginBottom: '2rem',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Our team of leading scientists and researchers are pioneering new treatments for neurological eye diseases. 
            Learn more about their expertise and vision for the future of eye care.
          </p>
          <Link href="/team" passHref legacyBehavior>
            <a className={styles.viewTeamButton}>
              <span style={{ marginRight: '8px' }}>View Our Team</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{
                transition: 'transform 0.3s ease',
                marginTop: '1px'
              }}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
