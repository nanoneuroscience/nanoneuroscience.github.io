import Layout from '../components/Layout';
import { useRef, useState, useEffect } from 'react';
// Import team data
import { team, TeamMember } from '../data/team';

// Card component for each team member
function TeamMemberCard({ member, onExpand }: { member: TeamMember, onExpand: (m: TeamMember) => void }) {
  const isLongBio = member.bio.length > 500;
  const shortBio = isLongBio ? member.bio.slice(0, 400) + '…' : member.bio;
  return (
    <div style={{
      background: '#fff',
      borderRadius: 8,
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      border: '1px solid #eaeaea',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: 340,
      margin: '0 auto',
      minHeight: 'auto',
      position: 'relative',
      transition: 'all 0.2s',
    }}>
      <img
        src={member.photo}
        alt={member.name}
        style={{
          width: 120,
          height: 120,
          objectFit: 'cover',
          borderRadius: '4px',
          marginBottom: 16,
          background: '#f5f5f5',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      />
      <div style={{ textAlign: 'center', width: '100%' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem', color: '#1a1a1a', marginBottom: 2 }}>{member.name}</div>
        <div style={{ fontWeight: 500, fontSize: '0.9rem', color: '#666', marginBottom: 16 }}>{member.title}</div>
        {isLongBio && (
          <button
            onClick={() => onExpand(member)}
            style={{
              background: '#2a5d8f',
              border: '1px solid #2a5d8f',
              color: 'white',
              fontWeight: 500,
              cursor: 'pointer',
              fontSize: '0.9rem',
              padding: '0.5rem 1.25rem',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
              letterSpacing: '0.5px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              textTransform: 'none',
              minWidth: '120px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: '1.4',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#1e4a7a';
              e.currentTarget.style.borderColor = '#1e4a7a';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#2a5d8f';
              e.currentTarget.style.borderColor = '#2a5d8f';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            aria-haspopup="dialog"
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
}

// TeamSections component
function TeamSections({ selected, setSelected }: { selected: TeamMember | null, setSelected: (m: TeamMember | null) => void }) {
  const sectionOrder = [
    'Scientific Team',
    'Management Team',
    'Business Advisory Board',
  ] as const;
  type Section = typeof sectionOrder[number];
  const grouped: Record<Section, TeamMember[]> = {
    'Scientific Team': [],
    'Management Team': [],
    'Business Advisory Board': [],
  };
  for (const m of team) grouped[m.section].push(m);

  // Overlay for expanded bio
  const overlay = selected && (
    <div
      tabIndex={-1}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.65)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
      onClick={() => setSelected(null)}
      aria-modal="true"
      role="dialog"
    >
      <div
        style={{
          background: '#fff',
          borderRadius: 8,
          boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          maxWidth: 700,
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2.5rem',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={() => setSelected(null)}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'transparent',
            border: '1px solid #e0e0e0',
            borderRadius: '50%',
            width: 32,
            height: 32,
            fontSize: 20,
            color: '#666',
            fontWeight: 400,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#f5f5f5';
            e.currentTarget.style.borderColor = '#999';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = '#e0e0e0';
          }}
          aria-label="Close bio"
        >
          ×
        </button>
        <img
          src={selected.photo}
          alt={selected.name}
          style={{
            width: 140,
            height: 140,
            objectFit: 'cover',
            borderRadius: '6px',
            marginBottom: 20,
            background: '#f5f5f5',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)'
          }}
        />
        <div style={{ fontWeight: 600, fontSize: '1.4rem', color: '#1a1a1a', marginBottom: 4, textAlign: 'center' }}>{selected.name}</div>
        <div style={{ fontWeight: 500, fontSize: '1rem', color: '#b3416f', marginBottom: 24, textAlign: 'center' }}>{selected.title}</div>
        <div style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.7, whiteSpace: 'pre-line', textAlign: 'left', maxWidth: 580 }}>{selected.bio}</div>
      </div>
    </div>
  );

  return <>
    {overlay}
    {sectionOrder.map(section => (
      grouped[section].length > 0 && (
        <section key={section} style={{ maxWidth: 1100, margin: '0 auto 2.7rem auto', padding: '0 1.2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#b3416f', marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{section}</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '1.8rem',
            }}
          >
            {grouped[section].map((member: TeamMember) => (
              <TeamMemberCard key={member.name} member={member} onExpand={setSelected} />
            ))}
          </div>
        </section>
      )
    ))}
  </>;
}

const TeamPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState<TeamMember | null>(null);
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
      <div>
        {/* Hero Section */}
        <div 
          ref={heroRef}
          style={{
            position: 'relative',
            width: '100%',
            height: '60vh',
            minHeight: '400px',
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
        {/* About Section - Full Width Background */}
        <div style={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#e6f0fa',
          padding: '3rem 0',
          marginBottom: '3.5rem',
          borderBottomRightRadius: '100px',
          overflow: 'hidden'
        }}>
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 2.5rem',
            position: 'relative',
          }}>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <h1 style={{ 
                fontSize: '2.2rem', 
                fontWeight: 700, 
                color: '#1a1a1a', 
                marginBottom: '1.5rem',
                lineHeight: 1.1,
                whiteSpace: 'nowrap',
                letterSpacing: '-0.01em'
              }}>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#e6f0fa',
                  padding: '0.5rem 1.5rem 0.5rem 1rem',
                  borderRadius: '0 30px 30px 0',
                  marginLeft: '-1.5rem',
                  paddingLeft: '1.5rem'
                }}>
                  Meet the Visionaries Behind <span style={{ color: '#b3416f', fontWeight: 700 }}>NanoNeurosciences</span>
                </span>
              </h1>
              <div style={{ 
                fontSize: '1.1rem', 
                color: '#333', 
                lineHeight: 1.8,
              }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  At NanoNeurosciences, innovation is driven by the relentless passion and expertise of our multidisciplinary team. Our scientific co-founders are pioneers in their fields, blending world-class knowledge to push the boundaries of glaucoma treatment and neurodegenerative disease research.
                </p>
                <p>
                  Since May 2024, NanoNeurosciences operates out of UF Innovate | Sid Martin Biotech in Alachua, Florida — one of the nation's leading biotech incubators. Here, we are harnessing the latest developments in nanoengineering and neural regeneration to push the boundaries of what is possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Team Sections */}
        <TeamSections selected={selected} setSelected={setSelected} />
      </div>
    </Layout>
  );
};

export default TeamPage;
