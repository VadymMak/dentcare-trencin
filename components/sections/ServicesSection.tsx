'use client';

import { useEffect, useRef } from 'react';
import { SERVICES } from '@/lib/constants';

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ padding: '96px 24px', background: 'var(--bg)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'var(--bg-alt)',
              color: 'var(--blue)',
              padding: '6px 16px',
              borderRadius: '100px',
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            Naše služby
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--gray-800)',
              marginBottom: '16px',
            }}
          >
            Komplexná starostlivosť o vaše zuby
          </h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '1.0625rem', maxWidth: '540px', margin: '0 auto' }}>
            Od preventívnych prehliadok až po estetické zákroky — riešime všetko.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="reveal"
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                padding: '32px',
                boxShadow: 'var(--shadow)',
                border: '1px solid var(--gray-100)',
                transition: 'var(--transition)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow)';
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{service.icon}</div>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--gray-800)',
                  marginBottom: '12px',
                }}
              >
                {service.title}
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.6, marginBottom: '20px' }}>
                {service.description}
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontWeight: 700, color: 'var(--blue)', fontSize: '1.0625rem' }}>
                  {service.price}
                </span>
                <a
                  href="#booking"
                  style={{
                    color: 'var(--teal)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  Objednať →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
