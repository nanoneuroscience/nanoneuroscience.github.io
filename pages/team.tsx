import Layout from '../components/Layout';
import { useRef, useState, useEffect } from 'react';

const TeamPage = () => {
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
    <Layout title="Our Team | Nano Neurosciences">
      {/* Hero Section matching Science/Pipeline/Mission */}
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
              Our Team
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '700px',
              margin: '0 auto 2rem',
              lineHeight: '1.6',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)'
            }}>
              Meet the dedicated team behind Nano Neurosciences.
            </p>
          </div>
        </div>
      </div>
      <main style={{ padding: '3rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}>
        {/* Team content goes here */}
      </main>
    </Layout>
  );
};

export default TeamPage;
