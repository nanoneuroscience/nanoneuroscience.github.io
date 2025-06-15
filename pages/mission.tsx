import Layout from '../components/Layout';
import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';

const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const MissionPage = () => {
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
    <Layout title="Our Mission | Nano Neurosciences">
      <Head>
        <style>{styles}</style>
      </Head>
      <main>
        {/* Hero Section matching Science/Pipeline pages */}
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
                Our Mission
              </h1>
              <p style={{
                fontSize: '1.25rem',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '700px',
                margin: '0 auto 2rem',
                lineHeight: '1.6',
                textShadow: '0 1px 3px rgba(0,0,0,0.3)'
              }}>
                At NanoNeurosciences, we're dedicated to transforming the landscape of glaucoma treatment through cutting-edge nanotechnology and relentless innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Content Section - Minimal List/Chart Style */}
        <section style={{
          background: '#fff',
          padding: '3.5rem 2.5rem 2.5rem 2.5rem',
          maxWidth: '900px',
          margin: '0 auto',
          borderRadius: '18px',
          boxShadow: '0 6px 32px rgba(0,0,0,0.04)',
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 700, 
              color: '#1a1a2e', 
              marginBottom: '1.2rem',
              padding: 0
            }}>
              Redefining the Future of Eye Care
            </h2>
            <p style={{ 
              fontSize: '1.13rem', 
              color: '#333', 
              margin: '0 0 2.5rem 0', 
              lineHeight: '1.7',
              padding: 0
            }}>
              We’re pioneering regenerative nanomedicine for glaucoma—awakening the body’s natural healing pathways with biocompatible, biodegradable nanocarriers.
            </p>
          </div>

          <div style={{
            background: '#faf8fc',
            borderLeft: '4px solid #b3416f',
            borderRadius: '8px',
            padding: '2.1rem 2.2rem 1.7rem 2.5rem',
            marginBottom: '2.2rem',
            boxShadow: '0 1px 8px rgba(179,65,111,0.04)',
            maxWidth: '100%',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.7em' }}>
              <div style={{ gridColumn: '1 / -1', marginBottom: '0.5rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#b3416f', fontWeight: 700, letterSpacing: '0.01em' }}>Why Glaucoma? Why Now?</h3>
              </div>
              
              <div style={{ fontWeight: 700, color: '#b3416f', padding: '0.7em 0', minWidth: '160px', borderBottom: '1px solid #e3dbe7' }}>Nature's Perfect Testbed:</div>
              <div style={{ color: '#222', padding: '0.7em 0', borderBottom: '1px solid #e3dbe7' }}>
                The eye's unique accessibility makes it ideal to unleash the full potential of nanotherapeutics.
              </div>
              
              <div style={{ fontWeight: 700, color: '#b3416f', padding: '0.7em 0', minWidth: '160px', borderBottom: '1px solid #e3dbe7' }}>A Critical Gap:</div>
              <div style={{ color: '#222', padding: '0.7em 0', borderBottom: '1px solid #e3dbe7' }}>
                Current treatments slow progression but can't repair damaged cells. We focus on cellular regeneration.
              </div>
              
              <div style={{ fontWeight: 700, color: '#b3416f', padding: '0.7em 0', minWidth: '160px' }}>A Growing, Unmet Need:</div>
              <div style={{ color: '#222', padding: '0.7em 0' }}>
                Millions are affected worldwide—demand for next-generation solutions is bigger than ever.
              </div>
            </div>
          </div>

          <div style={{
            background: '#f6fafd',
            borderLeft: '4px solid #2a5d8f',
            borderRadius: '8px',
            padding: '2.1rem 2.2rem 1.7rem 2.5rem',
            marginBottom: '2.2rem',
            boxShadow: '0 1px 8px rgba(42,93,143,0.04)',
            maxWidth: '100%',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.7em' }}>
              <div style={{ gridColumn: '1 / -1', marginBottom: '0.5rem' }}>
                <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#2a5d8f', fontWeight: 700, letterSpacing: '0.01em' }}>Where Science Meets Innovation</h3>
              </div>
              
              <div style={{ fontWeight: 700, color: '#2a5d8f', padding: '0.7em 0', minWidth: '200px', borderBottom: '1px solid #dbe6f1' }}>Advanced Peptide Synthesis</div>
              <div style={{ color: '#222', padding: '0.7em 0', borderBottom: '1px solid #dbe6f1' }}>
                Custom-designed peptides power our nanomedicines.
              </div>
              
              <div style={{ fontWeight: 700, color: '#2a5d8f', padding: '0.7em 0', minWidth: '200px', borderBottom: '1px solid #dbe6f1' }}>High-Precision Imaging</div>
              <div style={{ color: '#222', padding: '0.7em 0', borderBottom: '1px solid #dbe6f1' }}>
                Tracking therapies at the molecular level.
              </div>
              
              <div style={{ fontWeight: 700, color: '#2a5d8f', padding: '0.7em 0', minWidth: '200px', borderBottom: '1px solid #dbe6f1' }}>Molecular Biology Tools</div>
              <div style={{ color: '#222', padding: '0.7em 0', borderBottom: '1px solid #dbe6f1' }}>
                Unlocking the cellular pathways that drive regeneration.
              </div>
              
              <div style={{ fontWeight: 700, color: '#2a5d8f', padding: '0.7em 0', minWidth: '200px' }}>Nanomaterial Characterization</div>
              <div style={{ color: '#222', padding: '0.7em 0' }}>
                World-class facilities optimize our nanocarriers for strength, stability, and performance.
              </div>
            </div>
          </div>

          <div style={{
            background: '#f8f9fa',
            borderRadius: 10,
            padding: '1.4rem 1.2rem',
            margin: '2.5rem auto 0 auto',
            maxWidth: 700,
            fontSize: '1.12rem',
            color: '#1a1a2e',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(179,65,111,0.04)'
          }}>
            <strong>From Breakthroughs to Clinical Trials — Fast:</strong> Our goal is to move our nanomedicines into clinical trials within 2 years, partnering with leading ophthalmology research institutions to fast-track development.
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default MissionPage;
