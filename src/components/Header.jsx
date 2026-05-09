import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const nav = [
  { label: 'Смартфоны', href: '#catalog', id: 'phones',
    icon: <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/></svg>,
    hint: '150+ моделей' },
  { label: 'Ноутбуки', href: '#catalog', id: 'laptops',
    icon: <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="14" rx="2"/><path strokeLinecap="round" d="M1 22h22"/></svg>,
    hint: '80+ моделей' },
  { label: 'Планшеты', href: '#catalog', id: 'tablets',
    icon: <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="18" r="0.8" fill="currentColor" stroke="none"/></svg>,
    hint: '60+ моделей' },
  { label: 'Наушники', href: '#catalog', id: 'headphones',
    icon: <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path d="M3 18v-6a9 9 0 0118 0v6"/><rect x="2" y="16" width="4" height="6" rx="1"/><rect x="18" y="16" width="4" height="6" rx="1"/></svg>,
    hint: '120+ моделей' },
]

const TgIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

const handleNavClick = (e, catId) => {
  e.preventDefault()
  const el = document.getElementById('catalog')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.dispatchEvent(new CustomEvent('xiSetCategory', { detail: catId }))
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [hovered, setHovered]   = useState(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Закрываем меню при ресайзе до десктопа
  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  const handleNavEnter = (e) => {
    if (!navRef.current) return
    const nr = navRef.current.getBoundingClientRect()
    const ir = e.currentTarget.getBoundingClientRect()
    setIndicator({ left: ir.left - nr.left, width: ir.width, opacity: 1 })
  }

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      transition: 'background 0.35s, border-color 0.35s, box-shadow 0.35s',
      background: scrolled ? 'rgba(4,4,10,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(123,97,255,0.12)' : '1px solid transparent',
      boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.3)' : 'none',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 20px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>

        {/* ── Logo ── */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg,#7B61FF,#00D2FF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, boxShadow: '0 4px 20px rgba(123,97,255,0.4)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:'50%', background:'rgba(255,255,255,0.15)', borderRadius:'10px 10px 0 0' }}/>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M13 3L4 14h7v7l9-11h-7L13 3z" fill="white"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'white', letterSpacing: '-0.025em', lineHeight: 1 }}>
              Xi<span style={{ color: 'var(--accent2)' }}>Armo</span>
            </div>
            <div style={{ fontSize: 9, color: 'var(--t3)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--mono)', marginTop: 2 }}>
              Савёловская · Л-106
            </div>
          </div>
        </a>

        {/* ── Desktop nav ── */}
        <nav ref={navRef} className="nav-desktop"
          onMouseLeave={() => { setIndicator(s => ({...s, opacity:0})); setHovered(null) }}
          style={{ alignItems: 'center', gap: 2, position: 'relative' }}
        >
          <div style={{
            position: 'absolute', bottom: -2, height: 1,
            background: 'linear-gradient(90deg,#7B61FF,#00D2FF)',
            boxShadow: '0 0 8px rgba(0,210,255,0.6)',
            transition: 'left 0.22s cubic-bezier(0.22,1,0.36,1), width 0.22s cubic-bezier(0.22,1,0.36,1), opacity 0.2s',
            left: indicator.left, width: indicator.width, opacity: indicator.opacity,
          }}/>
          {nav.map(l => (
            <a key={l.id} href={l.href}
              onClick={e => handleNavClick(e, l.id)}
              onMouseEnter={e => { handleNavEnter(e); setHovered(l.id) }}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '8px 13px', fontSize: 13, fontWeight: 500,
                color: hovered === l.id ? 'white' : 'rgba(255,255,255,0.5)',
                textDecoration: 'none', borderRadius: 10,
                background: hovered === l.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                transition: 'color 0.15s, background 0.15s', whiteSpace: 'nowrap',
              }}
            >
              <span style={{ color: hovered === l.id ? 'var(--accent2)' : 'rgba(255,255,255,0.3)', transition: 'color 0.15s', flexShrink: 0 }}>
                {l.icon}
              </span>
              {l.label}
            </a>
          ))}
        </nav>

        {/* ── Right ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <a href="https://t.me/XiArmo" target="_blank" rel="noopener noreferrer"
            className="btn-tg-desk"
            style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(0,210,255,0.08)', border: '1px solid rgba(0,210,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent2)', textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background='rgba(0,210,255,0.16)'}
            onMouseLeave={e => e.currentTarget.style.background='rgba(0,210,255,0.08)'}
          ><TgIcon /></a>

          <a href="tel:+79773510580" className="btn-call-desk btn-accent"
            style={{ padding: '9px 18px', fontSize: 13, borderRadius: 10, whiteSpace: 'nowrap' }}>
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Позвонить
          </a>

          {/* Burger */}
          <button onClick={() => setOpen(!open)} className="nav-burger"
            style={{ width: 42, height: 42, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, background: open ? 'rgba(123,97,255,0.15)' : 'rgba(255,255,255,0.06)', border: `1px solid ${open ? 'rgba(123,97,255,0.35)' : 'rgba(255,255,255,0.1)'}`, borderRadius: 10, cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0 }}>
            {[0,1,2].map(i => (
              <span key={i} style={{ width: 18, height: 1.5, background: open ? 'var(--accent2)' : 'white', borderRadius: 2, display: 'block', transition: 'all 0.25s',
                transform: open && i===0 ? 'rotate(45deg) translateY(6.5px)' : open && i===2 ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
                opacity: open && i===1 ? 0 : 1 }}/>
            ))}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22,1,0.36,1] }}
            style={{ overflow: 'hidden', background: 'rgba(4,4,10,0.98)', backdropFilter: 'blur(24px)', borderTop: '1px solid rgba(123,97,255,0.1)' }}
          >
            <div style={{ padding: '8px 16px 20px' }}>
              {nav.map((l, i) => (
                <motion.a key={l.id} href={l.href}
                  onClick={e => { handleNavClick(e, l.id); setOpen(false) }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 12px', textDecoration: 'none', borderRadius: 12, marginBottom: 4, transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background='rgba(123,97,255,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background='transparent'}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 11, background: 'rgba(123,97,255,0.1)', border: '1px solid rgba(123,97,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent2)', flexShrink: 0 }}>
                    {l.icon}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: 'white' }}>{l.label}</div>
                    <div style={{ fontSize: 11, color: 'var(--t3)', fontFamily: 'var(--mono)', marginTop: 2 }}>{l.hint}</div>
                  </div>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.2)" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
                  </svg>
                </motion.a>
              ))}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 12, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <a href="tel:+79773510580" className="btn-accent" style={{ justifyContent: 'center', fontSize: 14, padding: '13px 16px' }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Позвонить
                </a>
                <a href="https://t.me/XiArmo" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '13px 16px', fontSize: 14, fontWeight: 700, color: 'var(--accent2)', background: 'rgba(0,210,255,0.08)', border: '1px solid rgba(0,210,255,0.2)', borderRadius: 12, textDecoration: 'none' }}>
                  <TgIcon /> Telegram
                </a>
              </div>

              <div style={{ textAlign: 'center', padding: '14px 0 4px', fontSize: 11, color: 'var(--t3)', fontFamily: 'var(--mono)', letterSpacing: '0.06em' }}>
                Пн–Вс · 10:00–20:00 · Л-106 · 1 этаж
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
