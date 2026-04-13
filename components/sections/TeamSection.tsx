'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { TEAM_MEMBERS } from '@/lib/constants';

export default function TeamSection() {
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
      id="team"
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
            Náš tím
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--gray-800)',
              marginBottom: '16px',
            }}
          >
            Certifikovaní odborníci
          </h2>
          <p style={{ color: 'var(--gray-600)', fontSize: '1.0625rem', maxWidth: '540px', margin: '0 auto' }}>
            Každý člen nášho tímu je certifikovaný špecialista s rokmi praxe na medzinárodnej úrovni.
          </p>
        </div>

        {/* Team grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '32px',
          }}
        >
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="reveal"
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow)',
                transition: 'var(--transition)',
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
              <div
                className="team-card-image"
                style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}
              >
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <h3
                  style={{
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    color: 'var(--gray-800)',
                    marginBottom: '4px',
                  }}
                >
                  {member.name}
                </h3>
                <div
                  style={{
                    color: 'var(--blue)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    marginBottom: '10px',
                  }}
                >
                  {member.role}
                </div>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
