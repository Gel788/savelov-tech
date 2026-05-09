import { motion } from 'framer-motion'

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section style={{
      background: 'var(--bg)',
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 96,
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── Background layers ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Grain texture */}
        <img
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=40&fit=crop"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.05, filter: 'saturate(0)' }}
        />
        {/* Gradient glows */}
        <div style={{ position: 'absolute', top: '-15%', left: '-10%', width: '55%', height: '80%', background: 'radial-gradient(ellipse, rgba(123,97,255,0.15) 0%, transparent 65%)', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', bottom: '5%', right: '-5%', width: '40%', height: '60%', background: 'radial-gradient(ellipse, rgba(0,210,255,0.1) 0%, transparent 65%)', borderRadius: '50%' }} />
        {/* Grid lines */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03 }}>
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      {/* ── Bright top line ── */}
      <div style={{
        position: 'absolute', top: 95, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, transparent 0%, rgba(123,97,255,0.4) 50%, transparent 100%)',
      }} />

      {/* ── Main content ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 28px 0', width: '100%', flex: 1, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center', width: '100%' }} className="hero-grid">

          {/* ── Left ── */}
          <div>
            {/* Status pill */}
            <motion.div {...f(0.1)} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 30,
              background: 'rgba(123,97,255,0.1)',
              border: '1px solid rgba(123,97,255,0.25)',
              marginBottom: 32,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: '50%', background: '#34D399', display: 'inline-block',
                boxShadow: '0 0 6px #34D399', animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
              }} />
              <style>{`@keyframes ping { 0%,100%{box-shadow:0 0 0 0 rgba(52,211,153,0.7)} 50%{box-shadow:0 0 0 4px rgba(52,211,153,0)} }`}</style>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#A78BFA', letterSpacing: '0.04em' }}>
                XiArmo · Савёловский рынок · Л-106
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div {...f(0.18)}>
              <div style={{ fontSize: 'clamp(52px,7.5vw,100px)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-0.04em', color: 'white', marginBottom: 28 }}>
                <div>Техника</div>
                <div className="gt" style={{ WebkitTextFillColor: undefined }}>нового</div>
                <div>поколения</div>
              </div>
            </motion.div>

            <motion.p {...f(0.27)} style={{
              fontSize: 17, color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.8, marginBottom: 40, maxWidth: 440,
            }}>
              iPhone 17, Galaxy S26, MacBook M4 Max и 500+ других актуальных моделей в наличии — прямо на Савёловском.
            </motion.p>

            <motion.div {...f(0.35)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56 }}>
              <a href="#catalog" className="btn-accent">
                Смотреть каталог
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="#contact" className="btn-ghost">Как нас найти</a>
            </motion.div>

            {/* Stats */}
            <motion.div {...f(0.43)} style={{
              display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24,
              paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.07)',
            }}>
              {[['500+','моделей'],['30+','брендов'],['5 лет','на рынке'],['4.9★','рейтинг']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: 'white', letterSpacing: '-0.03em', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 5, fontWeight: 500, letterSpacing: '0.02em' }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 520 }}
            className="hero-right"
          >
            {/* Glow */}
            <div style={{
              position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
              width: 380, height: 280,
              background: 'radial-gradient(ellipse, rgba(123,97,255,0.22) 0%, rgba(0,210,255,0.1) 50%, transparent 70%)',
              filter: 'blur(40px)',
            }} />

            {/* Main phone */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'relative', zIndex: 3, width: 230 }}
            >
              <img
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=700&q=90&fit=crop&crop=center"
                alt="iPhone 17 Pro"
                style={{ width: '100%', borderRadius: 46, border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 48px 100px rgba(0,0,0,0.9)', display: 'block' }}
              />
            </motion.div>

            {/* Laptop */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
              style={{ position: 'absolute', left: 0, bottom: '8%', width: 200, zIndex: 2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80&fit=crop"
                alt="MacBook"
                style={{ width: '100%', borderRadius: 14, border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 24px 64px rgba(0,0,0,0.8)', display: 'block', opacity: 0.9 }}
              />
            </motion.div>

            {/* Headphones */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              style={{ position: 'absolute', right: 0, top: '12%', width: 155, zIndex: 2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80&fit=crop"
                alt="Sony WH"
                style={{ width: '100%', borderRadius: 14, border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 20px 60px rgba(0,0,0,0.8)', display: 'block', opacity: 0.85 }}
              />
            </motion.div>

            {/* Float chip: new */}
            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              style={{
                position: 'absolute', left: '10%', top: '16%', zIndex: 5,
                background: 'rgba(10,10,18,0.92)', backdropFilter: 'blur(16px)',
                border: '1px solid rgba(123,97,255,0.25)', borderRadius: 16,
                padding: '12px 16px', boxShadow: '0 16px 48px rgba(0,0,0,0.7)',
              }}
            >
              <div style={{ fontSize: 10, fontWeight: 700, color: '#A78BFA', letterSpacing: '0.08em', marginBottom: 5 }}>APPLE</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: 4 }}>iPhone 17 Pro Max</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#34D399', flexShrink: 0 }} />
                <span style={{ fontSize: 11, color: '#34D399', fontWeight: 600 }}>В наличии</span>
              </div>
            </motion.div>

            {/* Float chip: badge */}
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
              style={{
                position: 'absolute', right: '5%', bottom: '18%', zIndex: 5,
                background: 'linear-gradient(135deg, #7B61FF, #00D2FF)',
                borderRadius: 12, padding: '8px 14px',
                boxShadow: '0 8px 32px rgba(123,97,255,0.5)',
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 800, color: 'white', letterSpacing: '0.04em' }}>НОВИНКА 2026</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 120,
        background: 'linear-gradient(to top, var(--bg) 0%, transparent 100%)',
        pointerEvents: 'none', zIndex: 3,
      }} />

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { display: none !important; }
        }
      `}</style>
    </section>
  )
}
