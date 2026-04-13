'use client';

import { useEffect, useRef } from 'react';
import { WHY_US_ITEMS } from '@/lib/constants';

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
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
      id="why-us"
      ref={sectionRef}
      style={{ padding: '96px 24px', background: 'var(--bg-alt)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="why-us-grid"
        >
          {/* Left: text */}
          <div>
            <div className="reveal">
              <span
                style={{
                  display: 'inline-block',
                  background: 'var(--white)',
                  color: 'var(--blue)',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  marginBottom: '16px',
                }}
              >
                Prečo my?
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 800,
                  color: 'var(--gray-800)',
                  marginBottom: '16px',
                  lineHeight: 1.2,
                }}
              >
                Moderná klinika,
                <br />
                <span style={{ color: 'var(--blue)' }}>humánny prístup</span>
              </h2>
              <p style={{ color: 'var(--gray-600)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Veríme, že návšteva zubára nemusí byť stresujúca. Vytvorili sme prostredie, kde sa
                každý pacient cíti vítaný a v bezpečí.
              </p>
            </div>
          </div>

          {/* Right: benefits grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
            }}
          >
            {WHY_US_ITEMS.map((item) => (
              <div
                key={item.id}
                className="reveal"
                style={{
                  background: 'var(--white)',
                  borderRadius: 'var(--radius)',
                  padding: '28px 24px',
                  boxShadow: 'var(--shadow)',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--gray-800)',
                    marginBottom: '8px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
