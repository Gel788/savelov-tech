import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  { icon: '🛡️', t: 'Официальная гарантия',   d: 'Гарантия производителя на весь ассортимент — ни один товар не продаём без документов.' },
  { icon: '⚡', t: 'Всегда в наличии',         d: '500+ позиций на складе прямо в торговой точке — не нужно ждать доставку.' },
  { icon: '🎯', t: 'Экспертный подбор',        d: 'Поможем выбрать под задачи и бюджет — без лишнего давления и навязывания.' },
  { icon: '🔄', t: 'Обмен и возврат',          d: '14 дней на возврат, обмен при заводском браке — всё по закону о защите потребителей.' },
  { icon: '💡', t: 'Консультация бесплатно',   d: 'Разберёмся с настройкой, перенесём данные, посоветуем аксессуары — без доп. оплаты.' },
  { icon: '📦', t: 'Полный выбор аксессуаров', d: 'Чехлы, кабели, защитные стёкла, зарядки — всё для вашего устройства в одном месте.' },
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section ref={ref} style={{ background: 'var(--bg)', padding: '100px 0', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ display: 'grid', gap: 56, alignItems: 'start', marginBottom: 64 }}
          className="why-header"
        >
          <div>
            <span className="slabel">О нас</span>
            <h2 style={{ fontSize: 'clamp(30px,4vw,52px)', fontWeight: 800, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1, marginTop: 0 }}>
              Почему выбирают нас
            </h2>
          </div>
          <p style={{ fontSize: 17, color: 'var(--t2)', lineHeight: 1.8, paddingTop: 36 }}>
            5 лет на Савёловском рынке. Тысячи довольных покупателей — наша лучшая визитная карточка.
            Работаем ежедневно с <strong style={{ color: 'white' }}>10:00 до 20:00</strong>.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gap: 0 }} className="why-grid">
          {items.map((it, i) => (
            <motion.div key={it.t}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              style={{
                padding: '32px 30px',
                borderRight:  i % 3 !== 2 ? '1px solid var(--border)' : 'none',
                borderBottom: i < 3 ? '1px solid var(--border)' : 'none',
                transition: 'background 0.2s',
              }}
              whileHover={{ background: 'rgba(123,97,255,0.05)' }}
            >
              <div style={{ fontSize: 34, marginBottom: 16, lineHeight: 1 }}>{it.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 10 }}>{it.t}</div>
              <div style={{ fontSize: 14, color: 'var(--t2)', lineHeight: 1.7 }}>{it.d}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{``}</style>
    </section>
  )
}
