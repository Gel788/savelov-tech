import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { products } from '../data'
import ProductModal from './ProductModal'
import CompareBar from './CompareBar'
import CompareModal from './CompareModal'

const BADGE_COLORS = {
  'Хит':       '#7B61FF',
  'Новинка':   '#00D2FF',
  'Топ цена':  '#F59E0B',
  'Игровой':   '#EF4444',
  'Топ':       '#8B5CF6',
  'Флагман':   '#00D2FF',
  'Android AI':'#4285F4',
  'Стиль':     '#F472B6',
}

const tabs = [
  { id: 'all',        label: 'Все' },
  { id: 'phones',     label: 'Смартфоны' },
  { id: 'tablets',    label: 'Планшеты' },
  { id: 'laptops',    label: 'Ноутбуки' },
  { id: 'headphones', label: 'Наушники' },
]

const Card = React.forwardRef(function Card({ p, i, onClick, onToggleCompare, isComparing }, ref) {
  const briefSpecs = p.specs[0]?.items?.slice(0, 3) ?? []

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.38, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
      className="pcard"
      style={{ outline: isComparing ? '2px solid var(--accent2)' : 'none', outlineOffset: 2 }}
    >
      {/* Image */}
      <div className="pcard-img" onClick={() => onClick(p)} style={{ cursor: 'pointer' }}>
        <img src={p.img} alt={p.name} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,10,0.8) 0%, transparent 50%)' }} />

        {/* Badge */}
        {p.badge && (
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'white', padding: '4px 10px', borderRadius: 7, background: BADGE_COLORS[p.badge] || '#7B61FF' }}>
              {p.badge}
            </span>
          </div>
        )}

        {/* Brand logo */}
        <div style={{ position: 'absolute', top: 12, right: 12, width: 32, height: 32, borderRadius: 9, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <img src={`https://cdn.simpleicons.org/${p.slug}/ffffff`} alt={p.brand}
            style={{ width: 16, height: 16, objectFit: 'contain', opacity: 0.8 }}
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }} />
          <span style={{ display: 'none', fontSize: 9, fontWeight: 800, color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.02em', textAlign: 'center', lineHeight: 1, padding: '0 2px' }}>
            {p.brand.slice(0, 3).toUpperCase()}
          </span>
        </div>

        {/* Hover label */}
        <div className="pcard-hover-label" style={{ position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)', opacity: 0, transition: 'opacity 0.25s', whiteSpace: 'nowrap', padding: '7px 18px', fontSize: 12, fontWeight: 700, color: 'white', background: 'rgba(123,97,255,0.7)', backdropFilter: 'blur(12px)', borderRadius: 10, border: '1px solid rgba(123,97,255,0.4)', pointerEvents: 'none' }}>
          Нажмите для характеристик →
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '14px 16px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div onClick={() => onClick(p)} style={{ cursor: 'pointer', flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--accent2)', letterSpacing: '0.14em', marginBottom: 4, fontFamily: 'var(--mono)', textTransform: 'uppercase' }}>
            {p.brand}
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'white', lineHeight: 1.3, marginBottom: 8 }}>{p.name}</div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {briefSpecs.map(s => (
              <span key={s.k} style={{ fontSize: 10, color: 'var(--accent2)', background: 'rgba(0,210,255,0.05)', border: '1px solid rgba(0,210,255,0.12)', padding: '3px 8px', borderRadius: 5, fontFamily: 'var(--mono)', letterSpacing: '0.02em' }}>
                {s.v}
              </span>
            ))}
          </div>
        </div>

        {/* Footer с кнопкой сравнения */}
        <div style={{ paddingTop: 12, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <button
            onClick={e => { e.stopPropagation(); onToggleCompare(p) }}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '6px 10px', fontSize: 10, fontWeight: 700,
              fontFamily: 'var(--mono)', letterSpacing: '0.04em',
              borderRadius: 8, cursor: 'pointer', transition: 'all 0.2s',
              background: isComparing ? 'rgba(0,210,255,0.12)' : 'rgba(255,255,255,0.04)',
              border: isComparing ? '1px solid rgba(0,210,255,0.35)' : '1px solid rgba(255,255,255,0.08)',
              color: isComparing ? 'var(--accent2)' : 'var(--t3)',
            }}
          >
            {isComparing ? (
              <>
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" d="M5 13l4 4L19 7"/></svg>
                В сравнении
              </>
            ) : (
              <>
                <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" d="M12 5v14M5 12h14"/></svg>
                Сравнить
              </>
            )}
          </button>

          <button onClick={() => onClick(p)}
            style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(123,97,255,0.1)', border: '1px solid rgba(123,97,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}>
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#7B61FF" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </button>
        </div>
      </div>

      <style>{`.pcard:hover .pcard-hover-label { opacity: 1; }`}</style>
    </motion.div>
  )
})

export default function Products() {
  const [active, setActive]           = useState('all')
  const [modal, setModal]             = useState(null)
  const [compareList, setCompareList] = useState([])
  const [compareOpen, setCompareOpen] = useState(false)
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  // Слушаем навигацию из хедера
  useEffect(() => {
    const handler = e => setActive(e.detail)
    window.addEventListener('xiSetCategory', handler)
    return () => window.removeEventListener('xiSetCategory', handler)
  }, [])

  const list = active === 'all' ? products : products.filter(p => p.cat === active)

  const handleToggleCompare = (p) => {
    setCompareList(prev => {
      const exists = prev.find(x => x.id === p.id)
      if (exists) return prev.filter(x => x.id !== p.id)
      if (prev.length >= 3) return prev // максимум 3
      return [...prev, p]
    })
  }

  return (
    <>
      <section id="catalog" ref={ref} style={{ background: 'var(--bg1)', padding: '100px 0', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} style={{ marginBottom: 12 }}>
            <span className="slabel">Каталог</span>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1, margin: 0 }}>
                {active === 'phones' ? 'Смартфоны' : active === 'all' ? 'Все модели' : active === 'laptops' ? 'Ноутбуки' : active === 'tablets' ? 'Планшеты' : 'Наушники'}
                <span style={{ fontSize: '0.45em', fontWeight: 500, color: 'var(--t3)', marginLeft: 12, fontFamily: 'var(--mono)' }}>
                  {list.length} позиций
                </span>
              </h2>
              {compareList.length > 0 && (
                <div style={{ fontSize: 11, color: 'var(--accent2)', fontFamily: 'var(--mono)', letterSpacing: '0.06em' }}>
                  Выбрано для сравнения: {compareList.length}/3
                </div>
              )}
            </div>
          </motion.div>

          {/* Tabs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 }}
            style={{ display: 'flex', gap: 8, margin: '28px 0 36px', flexWrap: 'wrap' }}>
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

          {/* Hint */}
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ marginBottom: 24, padding: '10px 16px', background: 'rgba(0,210,255,0.04)', border: '1px solid rgba(0,210,255,0.1)', borderRadius: 10, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="var(--accent2)" strokeWidth="2">
              <path strokeLinecap="round" d="M13 16h-1v-4h-1m1-4h.01"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <span style={{ fontSize: 11, color: 'var(--t3)', fontFamily: 'var(--mono)' }}>
              Нажмите на карточку — полные характеристики · Кнопка «Сравнить» — выбор до 3 моделей
            </span>
          </motion.div>

          {/* Grid */}
          <div className="prod-grid" style={{ display: 'grid', gap: 16 }}>
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <Card key={p.id} p={p} i={i}
                  onClick={setModal}
                  onToggleCompare={handleToggleCompare}
                  isComparing={compareList.some(x => x.id === p.id)}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: 64 }}>
            <p style={{ fontSize: 14, color: 'var(--t3)', marginBottom: 20 }}>
              Показана часть ассортимента — приходите, покажем всё
            </p>
            <a href="#contact" className="btn-ghost" style={{ fontSize: 14 }}>
              Узнать о наличии →
            </a>
          </div>
        </div>
      </section>

      {/* Product detail modal */}
      <AnimatePresence>
        {modal && <ProductModal product={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>

      {/* Compare bar */}
      <AnimatePresence>
        {compareList.length > 0 && (
          <CompareBar
            items={compareList}
            onRemove={id => setCompareList(prev => prev.filter(x => x.id !== id))}
            onClear={() => setCompareList([])}
            onCompare={() => setCompareOpen(true)}
          />
        )}
      </AnimatePresence>

      {/* Compare modal */}
      <AnimatePresence>
        {compareOpen && (
          <CompareModal
            products={compareList}
            onClose={() => setCompareOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
