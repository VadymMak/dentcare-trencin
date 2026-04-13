'use client';

import { useState, useEffect, useRef } from 'react';
import { CONTACT_INFO } from '@/lib/constants';

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const prevScrollY = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (rafId.current !== null) return;
      rafId.current = requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const goingDown = currentY > prevScrollY.current;
        // Only hide after scrolling past 60px so header doesn't flicker at top
        if (currentY < 60) {
          setVisible(true);
        } else {
          setVisible(!goingDown);
        }
        prevScrollY.current = currentY;
        rafId.current = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
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
        background: 'var(--header-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: 'var(--header-shadow)',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease',
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
                color: 'var(--blue-light)',
                lineHeight: 1.1,
              }}
            >
              DentCare
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)', letterSpacing: '0.05em' }}>
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
                color: 'var(--gray-300)',
                fontWeight: 500,
                fontSize: '0.9375rem',
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-300)')}
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
                background: 'var(--gray-300)',
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
            background: 'var(--header-bg)',
            borderTop: '1px solid var(--white-overlay-faint)',
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
                color: 'var(--gray-300)',
                fontWeight: 500,
                borderBottom: '1px solid var(--white-overlay-faint)',
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
              color: 'var(--gray-400)',
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
