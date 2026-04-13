import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--navy)',
      }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&h=900&fit=crop"
          alt="Modern dental clinic"
          fill
          style={{ objectFit: 'cover', opacity: 0.25 }}
          priority
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '120px 24px 80px',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: '680px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(37,99,235,0.2)',
              border: '1px solid rgba(37,99,235,0.4)',
              borderRadius: '100px',
              padding: '6px 16px',
              marginBottom: '24px',
              animation: 'fadeIn 0.6s ease',
            }}
          >
            <span style={{ color: '#60A5FA', fontSize: '0.875rem', fontWeight: 500 }}>
              ⭐ Hodnotenie 4.9 — najlepšia klinika v Trenčíne
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: 'var(--white)',
              lineHeight: 1.15,
              marginBottom: '24px',
              animation: 'fadeInUp 0.7s ease 0.1s both',
            }}
          >
            Váš dokonalý úsmev
            <br />
            <span style={{ color: '#60A5FA' }}>začína tu</span>
          </h1>

          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--gray-300)',
              lineHeight: 1.7,
              marginBottom: '40px',
              animation: 'fadeInUp 0.7s ease 0.2s both',
            }}
          >
            Moderná zubná klinika v Trenčíne s 15-ročnou tradíciou. Implantáty, estetická
            stomatológia a Invisalign — všetko pod jednou strechou.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              animation: 'fadeInUp 0.7s ease 0.3s both',
            }}
          >
            <a
              href="#booking"
              style={{
                background: 'var(--blue)',
                color: 'var(--white)',
                padding: '16px 32px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 700,
                fontSize: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--blue-dark)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--blue)')}
            >
              📅 Objednať sa online
            </a>
            <a
              href="tel:+421321234567"
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: 'var(--white)',
                padding: '16px 32px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 600,
                fontSize: '1rem',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            >
              📞 +421 32 123 4567
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '32px',
              marginTop: '48px',
              flexWrap: 'wrap',
              animation: 'fadeInUp 0.7s ease 0.4s both',
            }}
          >
            {['Bezbolestné ošetrenie', 'Zdravotná poistovňa', 'Online rezervácia 24/7'].map(
              (feature) => (
                <div
                  key={feature}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'var(--gray-300)',
                    fontSize: '0.9rem',
                  }}
                >
                  <span style={{ color: 'var(--teal)', fontWeight: 700 }}>✓</span>
                  {feature}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          animation: 'pulse 2s infinite',
        }}
      >
        <div
          style={{
            width: '24px',
            height: '40px',
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              background: 'rgba(255,255,255,0.5)',
              borderRadius: '2px',
            }}
          />
        </div>
      </div>
    </section>
  );
}
