import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const nav = [
  {
    label: 'Смартфоны', href: '#phones', id: 'phones',
    icon: (
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    hint: '150+ моделей',
  },
  {
    label: 'Ноутбуки', href: '#laptops', id: 'laptops',
    icon: (
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="14" rx="2"/>
        <path strokeLinecap="round" d="M1 22h22"/>
      </svg>
    ),
    hint: '80+ моделей',
  },
  {
    label: 'Планшеты', href: '#tablets', id: 'tablets',
    icon: (
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="2" width="16" height="20" rx="2"/>
        <circle cx="12" cy="18" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
    ),
    hint: '60+ моделей',
  },
  {
    label: 'Наушники', href: '#headphones', id: 'headphones',
    icon: (
      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 18v-6a9 9 0 0118 0v6"/>
        <rect x="2" y="16" width="4" height="6" rx="1"/>
        <rect x="18" y="16" width="4" height="6" rx="1"/>
      </svg>
    ),
    hint: '120+ моделей',
  },
]

export default function Header() {
  const [scrolled, setScrolled]   = useState(false)
  const [open, setOpen]           = useState(false)
  const [active, setActive]       = useState(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })
  const navRef = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // slide indicator under hovered nav item
  const handleNavEnter = (e) => {
    const nav = navRef.current
    if (!nav) return
    const navRect = nav.getBoundingClientRect()
    const itemRect = e.currentTarget.getBoundingClientRect()
    setIndicator({ left: itemRect.left - navRect.left, width: itemRect.width, opacity: 1 })
  }
  const handleNavLeave = () => {
    setIndicator(s => ({ ...s, opacity: 0 }))
    setActive(null)
  }

  return (
    <header style={{
      position: 'fixed', top: 36, left: 0, right: 0, zIndex: 50,
      transition: 'top 0.35s, background 0.35s',
      ...(scrolled ? {
        top: 0,
        background: 'rgba(4,4,10,0.96)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(123,97,255,0.15)',
        boxShadow: '0 1px 32px rgba(123,97,255,0.07)',
      } : {}),
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>

        {/* ── Logo ── */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg, #7B61FF, #00D2FF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, boxShadow: '0 4px 20px rgba(123,97,255,0.45)',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* inner shine */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'rgba(255,255,255,0.15)', borderRadius: '10px 10px 0 0' }} />
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M13 3L4 14h7v7l9-11h-7L13 3z" fill="white"/>
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'white', letterSpacing: '-0.025em', lineHeight: 1 }}>
              Xi<span style={{ color: 'var(--accent2)' }}>Armo</span>
            </div>
            <div style={{ fontSize: 9, fontWeight: 600, color: 'var(--t3)', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'var(--mono)', marginTop: 2 }}>
              Савёловский · Л-106
            </div>
          </div>
        </a>

        {/* ── Desktop nav ── */}
        <nav
          ref={navRef}
          onMouseLeave={handleNavLeave}
          style={{ display: 'flex', alignItems: 'center', gap: 2, position: 'relative' }}
          className="hidden lg:flex"
        >
          {/* sliding indicator */}
          <div style={{
            position: 'absolute', bottom: -2, height: 1,
            background: 'linear-gradient(90deg, #7B61FF, #00D2FF)',
            borderRadius: 1,
            transition: 'left 0.22s cubic-bezier(0.22,1,0.36,1), width 0.22s cubic-bezier(0.22,1,0.36,1), opacity 0.2s',
            left: indicator.left, width: indicator.width, opacity: indicator.opacity,
            boxShadow: '0 0 8px rgba(0,210,255,0.6)',
          }} />

          {nav.map(l => (
            <a
              key={l.id}
              href={l.href}
              onMouseEnter={e => { handleNavEnter(e); setActive(l.id) }}
              style={{
                display: 'flex', alignItems: 'center', gap: 7,
                padding: '8px 14px', fontSize: 13, fontWeight: 500,
                color: active === l.id ? 'white' : 'rgba(255,255,255,0.5)',
                textDecoration: 'none', borderRadius: 10,
                transition: 'color 0.2s, background 0.2s',
                background: active === l.id ? 'rgba(255,255,255,0.05)' : 'transparent',
              }}
            >
              <span style={{ color: active === l.id ? 'var(--accent2)' : 'rgba(255,255,255,0.3)', transition: 'color 0.2s' }}>
                {l.icon}
              </span>
              {l.label}
              <span style={{
                fontSize: 9, fontFamily: 'var(--mono)', color: active === l.id ? 'var(--accent2)' : 'transparent',
                transition: 'color 0.2s', letterSpacing: '0.04em', fontWeight: 600,
              }}>{l.hint}</span>
            </a>
          ))}
        </nav>

        {/* ── Right actions ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          {/* Telegram */}
          <a href="https://t.me/XiArmo" target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-flex"
            style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'rgba(0,210,255,0.08)', border: '1px solid rgba(0,210,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s',
              color: 'var(--accent2)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background='rgba(0,210,255,0.14)'; e.currentTarget.style.borderColor='rgba(0,210,255,0.35)' }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(0,210,255,0.08)'; e.currentTarget.style.borderColor='rgba(0,210,255,0.15)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>

          {/* Call */}
          <a href="tel:+79773510580"
            className="btn-accent hidden sm:inline-flex"
            style={{ padding: '9px 18px', fontSize: 13, borderRadius: 10, gap: 7 }}>
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Позвонить
          </a>

          {/* Burger */}
          <button onClick={() => setOpen(!open)} className="lg:hidden" style={{
            width: 40, height: 40, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 5,
            background: open ? 'rgba(123,97,255,0.12)' : 'rgba(255,255,255,0.05)',
            border: `1px solid ${open ? 'rgba(123,97,255,0.3)' : 'rgba(255,255,255,0.1)'}`,
            borderRadius: 10, cursor: 'pointer', transition: 'all 0.2s',
          }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                width: 16, height: 1.5, background: open ? 'var(--accent2)' : 'white',
                borderRadius: 2, display: 'block', transition: 'all 0.25s',
                transform: open && i === 0 ? 'rotate(45deg) translateY(6.5px)' : open && i === 2 ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }} />
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
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden', background: 'rgba(4,4,10,0.98)', backdropFilter: 'blur(24px)', borderTop: '1px solid rgba(123,97,255,0.12)' }}
          >
            <div style={{ padding: '8px 20px 24px' }}>
              {nav.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14, padding: '14px 12px',
                    textDecoration: 'none',
                    borderBottom: i < nav.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                    borderRadius: 10, transition: 'background 0.2s',
                    marginBottom: 2,
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(123,97,255,0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(123,97,255,0.1)', border: '1px solid rgba(123,97,255,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent2)', flexShrink: 0,
                  }}>
                    {l.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: 'white' }}>{l.label}</div>
                    <div style={{ fontSize: 11, color: 'var(--t3)', fontFamily: 'var(--mono)', letterSpacing: '0.04em', marginTop: 2 }}>{l.hint}</div>
                  </div>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.2)" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/>
                  </svg>
                </motion.a>
              ))}

              {/* Mobile bottom actions */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 16 }}>
                <a href="tel:+79773510580" className="btn-accent" style={{ justifyContent: 'center', fontSize: 14, padding: '12px 16px' }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  Позвонить
                </a>
                <a href="https://t.me/XiArmo" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ justifyContent: 'center', fontSize: 14, padding: '12px 16px', color: 'var(--accent2)', borderColor: 'rgba(0,210,255,0.2)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
