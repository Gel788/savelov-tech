import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProductModal({ product: p, onClose }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      {p && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={e => { if (e.target === e.currentTarget) onClose() }}
        >
          <motion.div
            className="modal-panel"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute', top: 20, right: 20, zIndex: 10,
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.6)', fontSize: 18, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.15s', fontFamily: 'inherit',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
            >
              ✕
            </button>

            <div style={{ display: 'grid', minHeight: 0 }} className="modal-grid">

              {/* ── Left: image + meta ── */}
              <div style={{
                background: 'linear-gradient(160deg, #0f0f1a, #0a0a12)',
                borderRight: '1px solid rgba(255,255,255,0.06)',
                padding: '40px 32px',
                display: 'flex', flexDirection: 'column', gap: 24,
                borderRadius: '28px 0 0 28px',
              }}>
                {/* Glow behind image */}
                <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{
                    position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)',
                    width: 220, height: 180,
                    background: `radial-gradient(ellipse, ${p.brand === 'Apple' ? 'rgba(0,210,255,0.18)' : 'rgba(123,97,255,0.18)'} 0%, transparent 70%)`,
                    filter: 'blur(20px)',
                    pointerEvents: 'none',
                  }} />
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', borderRadius: 20 }}
                  />
                </div>

                {/* Brand + name */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <img
                      src={`https://cdn.simpleicons.org/${p.slug}/ffffff`}
                      alt={p.brand}
                      style={{ width: 18, height: 18, objectFit: 'contain', opacity: 0.7 }}
                      onError={e => e.target.style.display = 'none'}
                    />
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{p.brand}</span>
                  </div>
                  <h2 style={{ fontSize: 22, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 8, letterSpacing: '-0.02em' }}>{p.name}</h2>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{p.tagline}</p>
                </div>

                {/* CTA */}
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a
                    href="tel:+79773510580"
                    className="btn-accent"
                    style={{ width: '100%', justifyContent: 'center', fontSize: 14 }}
                  >
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Уточнить наличие и цену
                  </a>
                  <a
                    href="https://t.me/XiArmo"
                    target="_blank" rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ width: '100%', justifyContent: 'center', fontSize: 14 }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Написать в Telegram
                  </a>
                </div>
              </div>

              {/* ── Right: specs ── */}
              <div style={{ padding: '40px 36px', overflowY: 'auto', maxHeight: '90vh' }}>
                <div style={{ marginBottom: 28 }}>
                  <span className="slabel">Характеристики</span>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: 'white', marginTop: 4 }}>{p.name}</h3>
                </div>

                {p.specs.map(group => (
                  <div key={group.group} className="spec-group">
                    <div className="spec-group-title">{group.group}</div>
                    {group.items.map(item => (
                      <div key={item.k} className="spec-row">
                        <div className="spec-key">{item.k}</div>
                        <div className="spec-val">{item.v}</div>
                      </div>
                    ))}
                  </div>
                ))}

                <div style={{
                  marginTop: 8, padding: '16px 20px',
                  background: 'rgba(123,97,255,0.06)',
                  border: '1px solid rgba(123,97,255,0.15)',
                  borderRadius: 14,
                }}>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
                    💡 Актуальные цены и наличие уточняйте у продавца — звоните или пишите в Telegram @XiArmo. Работаем ежедневно 9:00–20:00.
                  </div>
                </div>
              </div>
            </div>

            <style>{``}</style>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
