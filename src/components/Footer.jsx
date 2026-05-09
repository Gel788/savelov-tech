export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '60px 0 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 52, paddingBottom: 44, borderBottom: '1px solid var(--border)' }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 18 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#7B61FF,#00D2FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path d="M13 3L4 14h7v7l9-11h-7L13 3z" fill="white"/>
                </svg>
              </div>
              <span style={{ fontSize: 17, fontWeight: 800, color: 'white', letterSpacing: '-0.025em' }}>XiArmo</span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--t3)', lineHeight: 1.75, maxWidth: 320, marginBottom: 22 }}>
              Магазин техники XiArmo на Савёловском рынке. iPhone, Samsung, Sony и ещё 30+ брендов в наличии.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#34D399', display: 'inline-block', boxShadow: '0 0 8px rgba(52,211,153,0.7)' }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#34D399' }}>Открыто · 10:20–20:00</span>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--t3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>Каталог</div>
            {[['#phones','Смартфоны'],['#tablets','Планшеты'],['#laptops','Ноутбуки'],['#headphones','Наушники']].map(([h, l]) => (
              <a key={l} href={h} style={{ display: 'block', fontSize: 14, color: 'var(--t3)', textDecoration: 'none', marginBottom: 11, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--t3)'}
              >{l}</a>
            ))}
          </div>

          {/* Contacts */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--t3)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>Контакты</div>
            <div style={{ fontSize: 14, color: 'var(--t3)', lineHeight: 1.75, marginBottom: 12 }}>
              Сущёвский вал, 5, стр. 8<br/>Подъезд 3 · Павильон Л-106 · 1 этаж
            </div>
            <a href="tel:+79773510580" style={{ display: 'block', fontSize: 14, color: 'var(--t3)', textDecoration: 'none', marginBottom: 8, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'white'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--t3)'}
            >+7 (977) 351-05-80</a>
            <a href="https://t.me/XiArmo" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 14, color: 'var(--t3)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#00D2FF'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--t3)'}
            >@XiArmo</a>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontSize: 13, color: 'var(--t3)' }}>© 2026 XiArmo — Сущёвский вал, 5, стр. 8, Павильон Л-106</span>
          <span style={{ fontSize: 13, color: 'var(--t3)' }}>Только оригинальная техника</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px)  { .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; } }
      `}</style>
    </footer>
  )
}
