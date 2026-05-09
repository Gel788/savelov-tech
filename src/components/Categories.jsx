import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { categories } from '../data'

export default function Categories() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} id="products" style={{ background: 'var(--bg)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 44, flexWrap: 'wrap', gap: 16 }}
        >
          <div>
            <span className="slabel">Категории</span>
            <h2 style={{ fontSize: 'clamp(30px,4vw,52px)', fontWeight: 800, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1, marginTop: 0 }}>
              Что ищете?
            </h2>
          </div>
          <a href="#catalog" style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.target.style.opacity = '0.7'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Весь каталог →
          </a>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }} className="cat-grid">
          {categories.map((c, i) => (
            <motion.a key={c.id} href={`#${c.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="catcard"
              style={{ aspectRatio: '3/4' }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={c.img} alt={c.label} style={{ position: 'absolute', inset: 0, transition: 'transform 0.7s' }} />

              {/* Overlay gradient */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)' }} />

              {/* Color glow at bottom */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', background: `linear-gradient(to top, ${c.color}22 0%, transparent 100%)` }} />

              {/* Count badge */}
              <div style={{ position: 'absolute', top: 16, left: 16 }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, color: 'white',
                  padding: '4px 12px', borderRadius: 20,
                  background: c.color,
                  letterSpacing: '0.02em',
                  boxShadow: `0 4px 16px ${c.color}55`,
                }}>{c.count}</span>
              </div>

              {/* Arrow */}
              <div style={{
                position: 'absolute', top: 16, right: 16,
                width: 34, height: 34, borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>

              {/* Label */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '18px 20px' }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>{c.label}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width:960px) { .cat-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width:500px) { .cat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
