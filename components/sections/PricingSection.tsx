'use client';

import { useState, useEffect, useRef } from 'react';
import { PRICING } from '@/lib/constants';

export default function PricingSection() {
  const [activeCategory, setActiveCategory] = useState(PRICING[0].id);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activeItems = PRICING.find((c) => c.id === activeCategory)?.items ?? [];

  return (
    <section
      id="pricing"
      ref={sectionRef}
      style={{ padding: '96px 24px', background: 'var(--bg-alt)' }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            Cenník
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--gray-800)',
              marginBottom: '16px',
            }}
          >
            Transparentné ceny
          </h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '1.0625rem' }}>
            Bez skrytých poplatkov. Presná kalkulácia po konzultácii.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          {PRICING.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '10px 20px',
                borderRadius: '100px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'var(--transition)',
                background: activeCategory === cat.id ? 'var(--blue)' : 'var(--white)',
                color: activeCategory === cat.id ? 'var(--white)' : 'var(--gray-700)',
                boxShadow: 'var(--shadow)',
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Pricing table */}
        <div
          className="reveal"
          style={{
            background: 'var(--white)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow)',
            overflow: 'hidden',
          }}
        >
          {activeItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 28px',
                borderBottom: index < activeItems.length - 1 ? '1px solid var(--gray-100)' : 'none',
              }}
            >
              <div>
                <div style={{ fontWeight: 600, color: 'var(--gray-800)' }}>{item.service}</div>
                {item.note && (
                  <div style={{ fontSize: '0.8rem', color: 'var(--gray-500)', marginTop: '2px' }}>
                    {item.note}
                  </div>
                )}
              </div>
              <div style={{ fontWeight: 700, color: 'var(--blue)', whiteSpace: 'nowrap' }}>
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <p
          className="reveal"
          style={{
            textAlign: 'center',
            color: 'var(--gray-500)',
            fontSize: '0.875rem',
            marginTop: '24px',
          }}
        >
          * Ceny sú orientačné. Presná cena po konzultácii a RTG diagnostike.
          <br />
          Prijímame VšZP, Union a Dôvera. Splátkový plán k dispozícii.
        </p>
      </div>
    </section>
  );
}
