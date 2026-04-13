'use client';

import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  const links = [
    { label: 'Služby', href: '#services' },
    { label: 'Tím', href: '#team' },
    { label: 'Cenník', href: '#pricing' },
    { label: 'Recenzie', href: '#reviews' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <footer
      style={{
        background: 'var(--navy)',
        color: 'var(--gray-400)',
        padding: '48px 24px 32px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <span style={{ fontSize: '24px' }}>🦷</span>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--white)', fontSize: '1.125rem' }}>
                  DentCare
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--gray-500)', letterSpacing: '0.05em' }}>
                  TRENČÍN
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--gray-500)' }}>
              Moderná zubná klinika v Trenčíne s 15-ročnou tradíciou starostlivosti o vaše zdravie.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                color: 'var(--white)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                marginBottom: '16px',
              }}
            >
              Navigácia
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    color: 'var(--gray-500)',
                    fontSize: '0.875rem',
                    transition: 'var(--transition)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-500)')}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                color: 'var(--white)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                marginBottom: '16px',
              }}
            >
              Kontakt
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}
              >
                📞 {CONTACT_INFO.phone}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}
              >
                ✉️ {CONTACT_INFO.email}
              </a>
              <div style={{ color: 'var(--gray-500)', fontSize: '0.875rem' }}>
                📍 {CONTACT_INFO.address}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4
              style={{
                color: 'var(--white)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                marginBottom: '16px',
              }}
            >
              Objednajte sa
            </h4>
            <a
              href="#booking"
              style={{
                display: 'inline-block',
                background: 'var(--blue)',
                color: 'var(--white)',
                padding: '12px 24px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--blue-dark)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--blue)')}
            >
              📅 Online termín
            </a>
            <div
              style={{
                marginTop: '16px',
                fontSize: '0.8rem',
                color: 'var(--gray-600)',
              }}
            >
              {CONTACT_INFO.hours.weekdays}
              <br />
              {CONTACT_INFO.hours.saturday}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--white-overlay-faint)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '0.8rem',
            color: 'var(--gray-600)',
          }}
        >
          <span>© 2025 DentCare Trenčín. Všetky práva vyhradené.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'var(--gray-600)' }}>
              Ochrana osobných údajov
            </a>
            <a href="#" style={{ color: 'var(--gray-600)' }}>
              Podmienky používania
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
