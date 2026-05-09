import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BRAND_COLORS = {
  Apple: '#7B61FF', Samsung: '#00D2FF', Xiaomi: '#FF6900',
  OPPO: '#34D399', Google: '#4285F4', OnePlus: '#F4343A',
  Honor: '#3B82F6', Nothing: '#FFFFFF', Vivo: '#415FFF',
  Sony: '#00439C',
}

// Собираем все ключи по всем группам из всех продуктов
function buildCompareRows(products) {
  const groups = {}
  products.forEach(p => {
    p.specs?.forEach(sg => {
      if (!groups[sg.group]) groups[sg.group] = {}
      sg.items?.forEach(item => {
        groups[sg.group][item.k] = true
      })
    })
  })
  return Object.entries(groups).map(([group, keys]) => ({
    group,
    keys: Object.keys(keys),
  }))
}

function getSpec(product, group, key) {
  const g = product.specs?.find(s => s.group === group)
  if (!g) return null
  const item = g.items?.find(i => i.k === key)
  return item ? item.v : null
}

export default function CompareModal({ products, onClose }) {
  useEffect(() => {
    if (!products?.length) return
    document.body.style.overflow = 'hidden'
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handler)
    }
  }, [products, onClose])

  const rows = products?.length ? buildCompareRows(products) : []

  return (
    <AnimatePresence>
      {products?.length >= 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={e => { if (e.target === e.currentTarget) onClose() }}
          style={{
            position: 'fixed', inset: 0, zIndex: 300,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            padding: '24px 16px 100px',
            overflowY: 'auto',
          }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'var(--bg1)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 24,
              width: '100%', maxWidth: 1100,
              overflow: 'hidden',
              boxShadow: '0 40px 120px rgba(0,0,0,0.8)',
            }}
          >
            {/* Header */}
            <div style={{ padding: '20px 28px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(123,97,255,0.15)', border: '1px solid rgba(123,97,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="var(--accent2)" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'white' }}>Сравнение моделей</div>
                  <div style={{ fontSize: 10, color: 'var(--t3)', fontFamily: 'var(--mono)', letterSpacing: '0.08em' }}>
                    {products.map(p => p.name).join(' vs ')}
                  </div>
                </div>
              </div>
              <button onClick={onClose}
                style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--t2)', transition: 'background 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
              >
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: `${220 + products.length * 220}px` }}>

                {/* Product headers */}
                <thead>
                  <tr>
                    <th style={{ width: 200, minWidth: 160, padding: '20px 20px', textAlign: 'left', verticalAlign: 'top', background: 'var(--bg2)', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--t3)', fontFamily: 'var(--mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        // ХАРАКТЕРИСТИКА
                      </div>
                    </th>
                    {products.map(p => (
                      <th key={p.id} style={{ padding: '20px 20px', textAlign: 'left', verticalAlign: 'top', background: 'var(--bg2)', borderRight: '1px solid rgba(255,255,255,0.04)', minWidth: 220 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', textAlign: 'center' }}>
                          <div style={{ width: '100%', maxWidth: 120, aspectRatio: '1', borderRadius: 16, overflow: 'hidden', background: 'var(--bg3)' }}>
                            <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </div>
                          <div>
                            <div style={{ fontSize: 10, fontWeight: 600, fontFamily: 'var(--mono)', letterSpacing: '0.06em', color: BRAND_COLORS[p.brand] || 'var(--accent2)', marginBottom: 4, textTransform: 'uppercase' }}>
                              {p.brand}
                            </div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: 'white', lineHeight: 1.3 }}>{p.name}</div>
                          </div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Spec rows */}
                <tbody>
                  {rows.map((section, si) => (
                    <>
                      {/* Group header */}
                      <tr key={`group-${si}`}>
                        <td colSpan={products.length + 1}
                          style={{ padding: '10px 20px 6px', background: 'rgba(123,97,255,0.06)', borderTop: '1px solid rgba(123,97,255,0.12)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                          <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--accent2)', fontFamily: 'var(--mono)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                            // {section.group}
                          </span>
                        </td>
                      </tr>

                      {section.keys.map((key, ki) => {
                        const vals = products.map(p => getSpec(p, section.group, key))
                        const hasAny = vals.some(v => v !== null)
                        if (!hasAny) return null

                        return (
                          <tr key={`${si}-${ki}`}
                            style={{ background: ki % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)' }}
                          >
                            <td style={{ padding: '10px 20px', borderRight: '1px solid rgba(255,255,255,0.04)', verticalAlign: 'top' }}>
                              <span style={{ fontSize: 11, color: 'var(--t3)', fontFamily: 'var(--mono)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{key}</span>
                            </td>
                            {vals.map((val, vi) => (
                              <td key={vi} style={{ padding: '10px 20px', borderRight: '1px solid rgba(255,255,255,0.04)', verticalAlign: 'top' }}>
                                {val ? (
                                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{val}</span>
                                ) : (
                                  <span style={{ fontSize: 12, color: 'var(--t3)', fontFamily: 'var(--mono)' }}>—</span>
                                )}
                              </td>
                            ))}
                          </tr>
                        )
                      })}
                    </>
                  ))}
                </tbody>

                {/* CTA footer */}
                <tfoot>
                  <tr>
                    <td style={{ padding: '20px 20px', background: 'var(--bg2)', borderTop: '1px solid rgba(255,255,255,0.06)' }}/>
                    {products.map(p => (
                      <td key={p.id} style={{ padding: '20px 20px', background: 'var(--bg2)', borderTop: '1px solid rgba(255,255,255,0.06)', borderRight: '1px solid rgba(255,255,255,0.04)' }}>
                        <a href="tel:+79773510580"
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px 16px', background: 'linear-gradient(135deg,var(--accent),var(--accent2))', borderRadius: 10, color: 'white', fontWeight: 700, fontSize: 12, textDecoration: 'none' }}>
                          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                          </svg>
                          Уточнить наличие
                        </a>
                      </td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
