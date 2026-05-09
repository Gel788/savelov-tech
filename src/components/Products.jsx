import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { products } from '../data'
import ProductModal from './ProductModal'

const BADGE_COLORS = {
  'Хит':      '#7B61FF',
  'Новинка':  '#00D2FF',
  'Топ цена': '#F59E0B',
  'Игровой':  '#EF4444',
  'Топ':      '#8B5CF6',
  'Скидка':   '#34D399',
}

const tabs = [
  { id: 'all',        label: 'Все' },
  { id: 'phones',     label: 'Смартфоны' },
  { id: 'tablets',    label: 'Планшеты' },
  { id: 'laptops',    label: 'Ноутбуки' },
  { id: 'headphones', label: 'Наушники' },
]

const Card = React.forwardRef(function Card({ p, i, onClick }, ref) {
  const briefSpecs = p.specs[0]?.items?.slice(0, 3) ?? []

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.38, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className="pcard"
      onClick={() => onClick(p)}
    >
      {/* Image */}
      <div className="pcard-img">
        <img src={p.img} alt={p.name} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,10,0.8) 0%, transparent 50%)' }} />

        {/* Badge */}
        {p.badge && (
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <span style={{
              fontSize: 11, fontWeight: 700, color: 'white',
              padding: '4px 10px', borderRadius: 7,
              background: BADGE_COLORS[p.badge] || '#7B61FF',
            }}>{p.badge}</span>
          </div>
        )}

        {/* Brand logo */}
        <div style={{
          position: 'absolute', top: 12, right: 12,
          width: 32, height: 32, borderRadius: 9,
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <img src={`https://cdn.simpleicons.org/${p.slug}/ffffff`} alt={p.brand}
            style={{ width: 16, height: 16, objectFit: 'contain', opacity: 0.8 }}
            onError={e => e.target.style.display = 'none'} />
        </div>

        {/* "Подробнее" hover */}
        <div style={{
          position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
          opacity: 0, transition: 'opacity 0.25s',
          whiteSpace: 'nowrap',
          padding: '7px 18px', fontSize: 12, fontWeight: 700,
          color: 'white', background: 'rgba(123,97,255,0.7)',
          backdropFilter: 'blur(12px)', borderRadius: 10,
          border: '1px solid rgba(123,97,255,0.4)',
          pointerEvents: 'none',
        }} className="pcard-hover-label">
          Нажмите для характеристик →
        </div>
      </div>

      {/* Info */}
        <div style={{ padding: '16px 18px 20px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--accent2)', letterSpacing: '0.14em', marginBottom: 5, fontFamily: 'var(--mono)', textTransform: 'uppercase' }}>
            {p.brand}
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, color: 'white', lineHeight: 1.3 }}>{p.name}</div>
        </div>

          {/* Brief specs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {briefSpecs.map(s => (
            <span key={s.k} style={{
              fontSize: 10, color: 'var(--accent2)',
              background: 'rgba(0,210,255,0.05)',
              border: '1px solid rgba(0,210,255,0.12)',
              padding: '3px 9px', borderRadius: 6,
              fontFamily: 'var(--mono)', letterSpacing: '0.03em',
            }}>{s.v}</span>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: 'var(--t3)', fontFamily: 'var(--mono)', letterSpacing: '0.04em' }}>
            tap_for_specs →
          </span>
          <div style={{
            width: 32, height: 32, borderRadius: 9,
            background: 'rgba(123,97,255,0.1)',
            border: '1px solid rgba(123,97,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#7B61FF" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .pcard:hover .pcard-hover-label { opacity: 1; }
      `}</style>
    </motion.div>
  )
})

export default function Products() {
  const [active, setActive] = useState('all')
  const [modal, setModal]   = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const list = active === 'all' ? products : products.filter(p => p.cat === active)

  return (
    <>
      <section id="catalog" ref={ref} style={{ background: 'var(--bg1)', padding: '100px 0', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: 40 }}
          >
            <span className="slabel">Каталог</span>
            <h2 style={{ fontSize: 'clamp(30px,4vw,52px)', fontWeight: 800, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1, marginTop: 0 }}>
              Популярные модели
            </h2>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ display: 'flex', gap: 8, marginBottom: 44, flexWrap: 'wrap' }}
          >
            {tabs.map(t => (
              <button key={t.id} onClick={() => setActive(t.id)} style={{
                padding: '9px 20px', fontSize: 13, fontWeight: 600, borderRadius: 10,
                border: active === t.id ? '1px solid rgba(123,97,255,0.5)' : '1px solid var(--border)',
                background: active === t.id ? 'rgba(123,97,255,0.12)' : 'transparent',
                color: active === t.id ? 'white' : 'var(--t3)',
                cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit',
              }}
                onMouseEnter={e => { if (active !== t.id) { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' } }}
                onMouseLeave={e => { if (active !== t.id) { e.currentTarget.style.color = 'var(--t3)'; e.currentTarget.style.background = 'transparent' } }}
              >
                {t.label}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(265px,1fr))', gap: 16 }}>
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <Card key={p.id} p={p} i={i} onClick={setModal} />
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom */}
          <div style={{ textAlign: 'center', marginTop: 72 }}>
            <p style={{ fontSize: 14, color: 'var(--t3)', marginBottom: 20 }}>Показана часть ассортимента — приходите, покажем всё</p>
            <a href="#contact" className="btn-ghost" style={{ fontSize: 14 }}>
              Узнать о наличии →
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modal && <ProductModal product={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>
    </>
  )
}
