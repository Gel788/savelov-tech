import { motion, AnimatePresence } from 'framer-motion'

export default function CompareBar({ items, onRemove, onClear, onCompare }) {
  if (items.length === 0) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 120, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 30 }}
        style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
          background: 'rgba(10,10,18,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderTop: '1px solid rgba(123,97,255,0.25)',
          boxShadow: '0 -8px 60px rgba(0,0,0,0.6)',
          padding: '14px 20px',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>

          {/* Label */}
          <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="var(--accent2)" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18"/>
            </svg>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--accent2)', fontFamily: 'var(--mono)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Сравнение / {items.length} из 3
            </span>
          </div>

          {/* Items */}
          <div style={{ display: 'flex', gap: 10, flex: 1, flexWrap: 'wrap' }}>
            {items.map(p => (
              <motion.div key={p.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px 6px 6px', background: 'rgba(123,97,255,0.1)', border: '1px solid rgba(123,97,255,0.2)', borderRadius: 10 }}
              >
                <img src={p.img} alt={p.name} style={{ width: 32, height: 32, borderRadius: 7, objectFit: 'cover', flexShrink: 0 }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: 'white', maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</span>
                <button onClick={() => onRemove(p.id)}
                  style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--t3)', flexShrink: 0, transition: 'background 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,80,80,0.2)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                >
                  <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </motion.div>
            ))}

            {/* Пустые слоты */}
            {Array.from({ length: 3 - items.length }).map((_, i) => (
              <div key={i} style={{ width: 130, height: 44, borderRadius: 10, border: '1px dashed rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.2)" strokeWidth="2">
                  <path strokeLinecap="round" d="M12 5v14M5 12h14"/>
                </svg>
                <span style={{ fontSize: 11, color: 'var(--t3)', fontFamily: 'var(--mono)' }}>добавить</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
            <button onClick={onClear}
              style={{ padding: '9px 14px', fontSize: 12, fontWeight: 600, color: 'var(--t3)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'var(--mono)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
            >
              Очистить
            </button>

            <button onClick={onCompare} disabled={items.length < 2}
              className="btn-accent"
              style={{ padding: '9px 20px', fontSize: 12, fontWeight: 700, opacity: items.length < 2 ? 0.4 : 1, cursor: items.length < 2 ? 'not-allowed' : 'pointer' }}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              Сравнить ({items.length})
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
