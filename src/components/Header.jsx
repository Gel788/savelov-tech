import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const nav = [
  { label: 'Смартфоны',  href: '#phones' },
  { label: 'Ноутбуки',   href: '#laptops' },
  { label: 'Планшеты',   href: '#tablets' },
  { label: 'Наушники',   href: '#headphones' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 36, left: 0, right: 0, zIndex: 50,
      transition: 'top 0.35s, background 0.35s, border-color 0.35s',
      ...(scrolled ? {
        top: 0,
        background: 'rgba(4,4,10,0.95)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(123,97,255,0.15)',
        boxShadow: '0 1px 32px rgba(123,97,255,0.08)',
      } : {}),
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
          <div style={{
            width: 34, height: 34, borderRadius: 10,
            background: 'linear-gradient(135deg, #7B61FF, #00D2FF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, boxShadow: '0 4px 16px rgba(123,97,255,0.4)',
          }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path d="M13 3L4 14h7v7l9-11h-7L13 3z" fill="white"/>
            </svg>
          </div>
          <span style={{ fontSize: 16, fontWeight: 800, color: 'white', letterSpacing: '-0.025em' }}>
            Xi<span style={{ color: 'var(--accent2)' }}>Armo</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden lg:flex">
          {nav.map(l => (
            <a key={l.label} href={l.href}
              style={{
                padding: '6px 14px', fontSize: 13, fontWeight: 500,
                color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
                borderRadius: 8, transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.background = 'transparent' }}
            >{l.label}</a>
          ))}
        </nav>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="tel:+79773510580"
            className="btn-accent hidden sm:inline-flex"
            style={{ padding: '8px 18px', fontSize: 13, borderRadius: 10, boxShadow: '0 4px 16px rgba(123,97,255,0.3)' }}>
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Позвонить
          </a>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} className="lg:hidden" style={{
            width: 38, height: 38, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 5,
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 9, cursor: 'pointer',
          }}>
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                width: 16, height: 1.5, background: 'white', borderRadius: 2, display: 'block',
                transition: 'all 0.25s',
                transform: open && i === 0 ? 'rotate(45deg) translateY(6.5px)' : open && i === 2 ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden', background: 'rgba(6,6,10,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div style={{ padding: '16px 28px 24px' }}>
              {nav.map(l => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
                  display: 'block', padding: '14px 0', fontSize: 17, fontWeight: 600,
                  color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                >{l.label}</a>
              ))}
              <a href="tel:+79773510580" className="btn-accent" style={{ marginTop: 18, width: '100%', justifyContent: 'center', fontSize: 15 }}>
                Позвонить
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
