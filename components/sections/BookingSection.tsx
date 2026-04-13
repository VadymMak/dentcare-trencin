'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid var(--gray-200)',
    borderRadius: 'var(--radius-sm)',
    fontSize: '1rem',
    color: 'var(--gray-800)',
    background: 'var(--white)',
    outline: 'none',
    transition: 'var(--transition)',
    fontFamily: 'inherit',
  };

  return (
    <section
      id="booking"
      ref={sectionRef}
      style={{
        padding: '96px 24px',
        background: 'var(--navy)',
      }}
    >
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span
            style={{
              display: 'inline-block',
              background: 'var(--blue-alpha)',
              color: '#60A5FA',
              padding: '6px 16px',
              borderRadius: '100px',
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            Objednávka
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 800,
              color: 'var(--white)',
              marginBottom: '16px',
            }}
          >
            Objednajte sa online
          </h2>
          <p style={{ color: 'var(--gray-300)', fontSize: '1.0625rem' }}>
            Vyplňte formulár a my vás kontaktujeme do 2 hodín na potvrdenie termínu.
          </p>
        </div>

        {submitted ? (
          <div
            className="reveal visible"
            style={{
              background: 'var(--teal-alpha)',
              border: '1px solid var(--teal-alpha-border)',
              borderRadius: 'var(--radius)',
              padding: '48px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
            <h3 style={{ color: 'var(--white)', fontWeight: 700, fontSize: '1.25rem', marginBottom: '8px' }}>
              Ďakujeme!
            </h3>
            <p style={{ color: 'var(--gray-300)' }}>
              Vaša žiadosť bola odoslaná. Kontaktujeme vás do 2 hodín.
            </p>
          </div>
        ) : (
          <form className="reveal" onSubmit={handleSubmit}>
            <div
              style={{
                background: 'var(--navy-card)',
                borderRadius: 'var(--radius)',
                padding: '40px',
                border: '1px solid var(--navy-card-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      color: 'var(--gray-300)',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      marginBottom: '6px',
                    }}
                  >
                    Meno a priezvisko *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ján Novák"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: 'block',
                      color: 'var(--gray-300)',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      marginBottom: '6px',
                    }}
                  >
                    Telefón *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+421 9XX XXX XXX"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    color: 'var(--gray-300)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '6px',
                  }}
                >
                  E-mail
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jan@example.com"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    color: 'var(--gray-300)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '6px',
                  }}
                >
                  Typ ošetrenia
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                >
                  <option value="">Vyberte službu...</option>
                  <option value="prevention">Preventívna prehliadka</option>
                  <option value="implants">Implantáty</option>
                  <option value="whitening">Bielenie zubov</option>
                  <option value="orthodontics">Ortodontia / Invisalign</option>
                  <option value="aesthetic">Estetická stomatológia</option>
                  <option value="surgery">Chirurgia</option>
                  <option value="other">Iné</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    color: 'var(--gray-300)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '6px',
                  }}
                >
                  Správa
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Opíšte váš problém alebo požiadavku..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'var(--blue)',
                  color: 'var(--white)',
                  border: 'none',
                  padding: '16px',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--blue-dark)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--blue)')}
              >
                📅 Odoslať žiadosť
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
