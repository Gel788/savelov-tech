import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const contacts = [
  { icon: '📍', label: 'Адрес',    v: 'Сущёвский вал, 5, стр. 8',    sub: 'Подъезд 3 · Павильон Л-106 · 1 этаж',  color: '#7B61FF', href: null },
  { icon: '📞', label: 'Телефон',  v: '+7 (977) 351-05-80',           sub: 'Пн–Вс, 10:00–20:00',                color: '#34D399', href: 'tel:+79773510580' },
  { icon: '✈️', label: 'Telegram', v: '@XiArmo',                       sub: 'Ответим в течение 5 минут',          color: '#00D2FF', href: 'https://t.me/XiArmo' },
  { icon: '🕘', label: 'График',   v: 'Ежедневно без выходных',       sub: 'С 10:00 до 20:00',                  color: '#F59E0B', href: null },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} id="contact" style={{ background: 'var(--bg1)', padding: '100px 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 52 }}
        >
          <span className="slabel">Контакты</span>
          <h2 style={{ fontSize: 'clamp(30px,4vw,52px)', fontWeight: 800, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1, marginTop: 0 }}>
            Как нас найти
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '360px 1fr', gap: 20, alignItems: 'start' }} className="contact-grid">

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
          >
            {contacts.map(c => {
              const inner = (
                <div style={{
                  display: 'flex', gap: 14, padding: '16px 18px',
                  background: 'var(--bg2)', border: '1px solid var(--border)',
                  borderRadius: 16, transition: 'border-color 0.22s, transform 0.2s',
                  cursor: c.href ? 'pointer' : 'default',
                }}
                  onMouseEnter={e => { if (c.href) { e.currentTarget.style.borderColor = c.color; e.currentTarget.style.transform = 'translateX(3px)' } }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)' }}
                >
                  <div style={{ fontSize: 24, flexShrink: 0, paddingTop: 2 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--t3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3 }}>{c.label}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'white', marginBottom: 2 }}>{c.v}</div>
                    <div style={{ fontSize: 12, color: 'var(--t2)' }}>{c.sub}</div>
                  </div>
                </div>
              )
              return c.href
                ? <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>{inner}</a>
                : <div key={c.label}>{inner}</div>
            })}

            {/* Metro */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px',
              background: 'rgba(123,97,255,0.08)', border: '1px solid rgba(123,97,255,0.2)', borderRadius: 16,
            }}>
              <span style={{ fontSize: 24, flexShrink: 0 }}>🚇</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'white' }}>м. Савёловская</div>
                <div style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 600 }}>Пешком 3 минуты · МЦД-4</div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{ borderRadius: 22, overflow: 'hidden', border: '1px solid var(--border)', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.589546%2C55.793744&z=16&pt=37.589546,55.793744,pm2rdl&l=map&theme=dark"
              width="100%" height="460"
              style={{ border: 'none', display: 'block' }}
              allowFullScreen loading="lazy"
              title="Савёловский рынок"
            />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>Савёловский рынок</div>
                <div style={{ fontSize: 12, color: 'var(--t2)' }}>Сущёвский вал, 5, стр. 8 · Подъезд 3 · Павильон Л-106 · 1 этаж</div>
              </div>
              <a href="https://yandex.ru/maps/?text=Савёловский+рынок" target="_blank" rel="noopener noreferrer"
                className="btn-ghost" style={{ padding: '9px 18px', fontSize: 13 }}>
                Маршрут →
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
