'use client';

import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '@/lib/constants';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Služby' },
    { href: '#team', label: 'Tím' },
    { href: '#pricing', label: 'Cenník' },
    { href: '#reviews', label: 'Recenzie' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'var(--white-overlay-strong)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? 'var(--shadow)' : 'none',
        transition: 'var(--transition)',
        padding: '0 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '28px' }}>🦷</span>
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: '1.125rem',
                color: 'var(--blue)',
                lineHeight: 1.1,
              }}
            >
              DentCare
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--gray-500)', letterSpacing: '0.05em' }}>
              TRENČÍN
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: 'var(--gray-700)',
                fontWeight: 500,
                fontSize: '0.9375rem',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--blue)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-700)')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            style={{
              background: 'var(--blue)',
              color: 'var(--white)',
              padding: '10px 22px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              fontSize: '0.9375rem',
              transition: 'var(--transition)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--blue-dark)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--blue)')}
          >
            Objednať sa
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
          }}
          className="burger-btn"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '2px',
                background: 'var(--gray-800)',
                transition: 'var(--transition)',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'var(--white)',
            borderTop: '1px solid var(--gray-200)',
            padding: '16px 24px 24px',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                color: 'var(--gray-700)',
                fontWeight: 500,
                borderBottom: '1px solid var(--gray-100)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              marginTop: '16px',
              background: 'var(--blue)',
              color: 'var(--white)',
              padding: '14px',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            Objednať sa
          </a>
          <div
            style={{
              marginTop: '16px',
              color: 'var(--gray-600)',
              fontSize: '0.875rem',
              textAlign: 'center',
            }}
          >
            {CONTACT_INFO.phone}
          </div>
        </div>
      )}
    </header>
  );
}
