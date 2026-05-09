import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const brands = [
  { name: 'Apple',    slug: 'apple' },
  { name: 'Samsung',  slug: 'samsung' },
  { name: 'Sony',     slug: 'sony' },
  { name: 'Xiaomi',   slug: 'xiaomi' },
  { name: 'ASUS',     slug: 'asus' },
  { name: 'Lenovo',   slug: 'lenovo' },
  { name: 'Huawei',   slug: 'huawei' },
  { name: 'OnePlus',  slug: 'oneplus' },
  { name: 'JBL',      slug: 'jbl' },
  { name: 'Realme',   slug: 'realme' },
  { name: 'Oppo',     slug: 'oppo' },
  { name: 'Honor',    slug: 'honor' },
]
const doubled = [...brands, ...brands]

export default function Brands() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} style={{ background: 'var(--bg1)', padding: '72px 0', overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px 36px' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}
        >
          <div>
            <span className="slabel">Бренды</span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1, marginTop: 0 }}>
              30+ мировых брендов
            </h2>
          </div>
          <p style={{ fontSize: 14, color: 'var(--t3)', maxWidth: 260, lineHeight: 1.6 }}>
            Только оригинальная техника с официальной гарантией
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(90deg, var(--bg1), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 100, background: 'linear-gradient(-90deg, var(--bg1), transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div className="marquee" style={{ gap: 12 }}>
          {doubled.map((b, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '12px 22px',
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: 14,
              cursor: 'default', flexShrink: 0,
              transition: 'border-color 0.25s, background 0.25s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(123,97,255,0.4)'; e.currentTarget.style.background = 'var(--bg3)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg2)' }}
            >
              <img
                src={`https://cdn.simpleicons.org/${b.slug}/ffffff`}
                alt={b.name}
                style={{ width: 20, height: 20, objectFit: 'contain', opacity: 0.7 }}
                onError={e => e.target.style.display = 'none'}
              />
              <span style={{ fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.75)', whiteSpace: 'nowrap' }}>{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
