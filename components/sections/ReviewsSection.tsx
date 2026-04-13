'use client';

import { useEffect, useRef } from 'react';
import { REVIEWS } from '@/lib/constants';

export default function ReviewsSection() {
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
      id="reviews"
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
            Recenzie
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--gray-800)',
              marginBottom: '16px',
            }}
          >
            Čo hovoria naši pacienti
          </h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              justifyContent: 'center',
            }}
          >
            <span style={{ color: '#F59E0B', fontSize: '1.25rem' }}>★★★★★</span>
            <span style={{ fontWeight: 700, color: 'var(--gray-800)' }}>4.9</span>
            <span style={{ color: 'var(--gray-500)' }}>z 5 (247 recenzií Google)</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="reveal"
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                padding: '28px',
                boxShadow: 'var(--shadow)',
                border: '1px solid var(--gray-100)',
              }}
            >
              <div style={{ color: '#F59E0B', fontSize: '1.1rem', marginBottom: '12px' }}>
                {'★'.repeat(review.rating)}
              </div>
              <p
                style={{
                  color: 'var(--gray-700)',
                  lineHeight: 1.7,
                  fontSize: '0.9375rem',
                  marginBottom: '20px',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--gray-800)', fontSize: '0.9rem' }}>
                    {review.name}
                  </div>
                  <div style={{ color: 'var(--gray-500)', fontSize: '0.8rem' }}>{review.date}</div>
                </div>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--bg-alt)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    color: 'var(--blue)',
                    fontWeight: 700,
                  }}
                >
                  G
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
