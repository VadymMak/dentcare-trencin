import { TRUST_ITEMS } from '@/lib/constants';

export default function TrustBar() {
  return (
    <section
      id="trust"
      style={{
        background: 'var(--navy)',
        padding: '28px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '24px',
          textAlign: 'center',
        }}
      >
        {TRUST_ITEMS.map((item) => (
          <div key={item.id}>
            <div style={{ fontSize: '2rem', marginBottom: '6px' }}>{item.icon}</div>
            <div
              style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--white)',
                lineHeight: 1,
              }}
            >
              {item.value}
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--gray-300)', marginTop: '4px' }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
