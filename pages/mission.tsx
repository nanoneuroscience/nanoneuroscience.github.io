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
          padding: '3.5rem 1.5rem 2.5rem 1.5rem',
          maxWidth: '900px',
          margin: '0 auto',
          borderRadius: '18px',
          boxShadow: '0 6px 32px rgba(0,0,0,0.04)',
        }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1a1a2e', marginBottom: '1.2rem' }}>
            NanoNeurosciences: Redefining the Future of Eye Care
          </h2>
          <p style={{ fontSize: '1.13rem', color: '#333', marginBottom: '2.5rem', lineHeight: '1.7', maxWidth: '750px', marginLeft: 'auto', marginRight: 'auto' }}>
            We’re pioneering regenerative nanomedicine for glaucoma—awakening the body’s natural healing pathways with biocompatible, biodegradable nanocarriers.
          </p>

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
            <h3 style={{ fontSize: '1.15rem', color: '#b3416f', fontWeight: 700, marginTop: 0, marginBottom: '1.1rem', letterSpacing: '0.01em' }}>Why Glaucoma? Why Now?</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{
                marginBottom: 0,
                padding: '0.7em 0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.7em',
                borderBottom: '1px solid #e3dbe7'
              }}>
                <span style={{ fontWeight: 700, color: '#b3416f', minWidth: 140 }}>Nature’s Perfect Testbed:</span>
                <span style={{ color: '#222' }}>The eye’s unique accessibility makes it ideal to unleash the full potential of nanotherapeutics.</span>
              </li>
              <li style={{
                marginBottom: 0,
                padding: '0.7em 0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.7em',
                borderBottom: '1px solid #e3dbe7'
              }}>
                <span style={{ fontWeight: 700, color: '#b3416f', minWidth: 140 }}>A Critical Gap:</span>
                <span style={{ color: '#222' }}>Current treatments slow progression but can’t repair damaged cells. We focus on cellular regeneration.</span>
              </li>
              <li style={{
                marginBottom: 0,
                padding: '0.7em 0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.7em',
              }}>
                <span style={{ fontWeight: 700, color: '#b3416f', minWidth: 140 }}>A Growing, Unmet Need:</span>
                <span style={{ color: '#222' }}>Millions are affected worldwide—demand for next-generation solutions is bigger than ever.</span>
              </li>
            </ul>
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
            <h3 style={{ fontSize: '1.15rem', color: '#2a5d8f', fontWeight: 700, marginTop: 0, marginBottom: '1.1rem', letterSpacing: '0.01em' }}>Where Science Meets Innovation</h3>
            <dl style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2.2fr',
              rowGap: '0',
              columnGap: '1.2rem',
              fontSize: '1.04rem',
              color: '#1a1a2e',
              alignItems: 'baseline',
            }}>
              <div style={{ display: 'contents' }}>
                <dt style={{ fontWeight: 700, color: '#2a5d8f', padding: '0.7em 0', borderBottom: '1px solid #dbe6f1' }}>Advanced Peptide Synthesis</dt>
                <dd style={{ margin: 0, color: '#222', padding: '0.7em 0', borderBottom: '1px solid #dbe6f1' }}>Custom-designed peptides power our nanomedicines.</dd>
              </div>
              <div style={{ display: 'contents' }}>
                <dt style={{ fontWeight: 700, color: '#2a5d8f', padding: '0.7em 0', borderBottom: '1px solid #dbe6f1' }}>High-Precision Imaging</dt>
                <dd style={{ margin: 0, color: '#222', padding: '0.7em 0', borderBottom: '1px solid #dbe6f1' }}>Tracking therapies at the molecular level.</dd>
              </div>
              <div style={{ display: 'contents' }}>
                <dt style={{ fontWeight: 700, color: '#2a5d8f', padding: '0.7em 0', borderBottom: '1px solid #dbe6f1' }}>Molecular Biology Tools</dt>
                <dd style={{ margin: 0, color: '#222', padding: '0.7em 0', borderBottom: '1px solid #dbe6f1' }}>Unlocking the cellular pathways that drive regeneration.</dd>
              </div>
              <div style={{ display: 'contents' }}>
                <dt style={{ fontWeight: 700, color: '#2a5d8f', padding: '0.7em 0' }}>Nanomaterial Characterization</dt>
                <dd style={{ margin: 0, color: '#222', padding: '0.7em 0' }}>World-class facilities optimize our nanocarriers for strength, stability, and performance.</dd>
              </div>
            </dl>
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
