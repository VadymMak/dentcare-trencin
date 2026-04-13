'use client';

import { useEffect, useRef } from 'react';
import { CONTACT_INFO } from '@/lib/constants';

export default function ContactSection() {
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

  const contactItems = [
    { icon: '📍', label: 'Adresa', value: CONTACT_INFO.address, href: undefined },
    { icon: '📞', label: 'Telefón', value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}` },
    { icon: '✉️', label: 'E-mail', value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ padding: '96px 24px', background: 'var(--bg-alt)' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
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
            Kontakt
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--gray-800)',
            }}
          >
            Nájdete nás v Trenčíne
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="reveal"
                style={{
                  display: 'flex',
                  gap: '16px',
                  background: 'var(--white)',
                  borderRadius: 'var(--radius)',
                  padding: '24px',
                  boxShadow: 'var(--shadow)',
                }}
              >
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--gray-500)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '4px',
                    }}
                  >
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        color: 'var(--blue)',
                        fontWeight: 600,
                        fontSize: '1rem',
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div style={{ color: 'var(--gray-700)', fontWeight: 600, fontSize: '1rem' }}>
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Hours */}
            <div
              className="reveal"
              style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                padding: '24px',
                boxShadow: 'var(--shadow)',
              }}
            >
              <div style={{ display: 'flex', gap: '16px' }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🕐</span>
                <div style={{ width: '100%' }}>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--gray-500)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '12px',
                    }}
                  >
                    Otváracie hodiny
                  </div>
                  {[
                    CONTACT_INFO.hours.weekdays,
                    CONTACT_INFO.hours.saturday,
                    CONTACT_INFO.hours.sunday,
                  ].map((h) => (
                    <div
                      key={h}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '6px 0',
                        borderBottom: '1px solid var(--gray-100)',
                        fontSize: '0.9375rem',
                        color: 'var(--gray-700)',
                      }}
                    >
                      <span>{h.split(':')[0]}</span>
                      <span style={{ fontWeight: 600 }}>{h.split(': ')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: map placeholder */}
          <div
            className="reveal"
            style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow)',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '16px',
              color: 'var(--gray-500)',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.07!2d18.0444!3d48.8945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzQwLjIiTiAxOMKwMDInMzkuOCJF!5e0!3m2!1ssk!2ssk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DentCare Trenčín — mapa"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
