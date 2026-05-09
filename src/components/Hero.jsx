import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const WORDS = ['iPhone 17 Pro', 'Galaxy S26 Ultra', 'MacBook M4 Max', 'Sony WH-1000XM6', 'iPad Pro M4']

function Typewriter() {
  const [idx, setIdx]   = useState(0)
  const [text, setText] = useState('')
  const [del, setDel]   = useState(false)

  useEffect(() => {
    const target = WORDS[idx]
    let timer
    if (!del && text.length < target.length) {
      timer = setTimeout(() => setText(target.slice(0, text.length + 1)), 80)
    } else if (!del && text.length === target.length) {
      timer = setTimeout(() => setDel(true), 1800)
    } else if (del && text.length > 0) {
      timer = setTimeout(() => setText(text.slice(0, -1)), 40)
    } else if (del && text.length === 0) {
      setDel(false)
      setIdx(i => (i + 1) % WORDS.length)
    }
    return () => clearTimeout(timer)
  }, [text, del, idx])

  return (
    <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--accent2)', fontWeight: 500 }}>
      {text}<span className="cursor-blink" />
    </span>
  )
}

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
      paddingTop: 80,
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* ── Background layers ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Base texture */}
        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=40&fit=crop" alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.04, filter: 'saturate(0)' }} />

        {/* Dot grid */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06 }}>
          <defs>
            <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.5)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>

        {/* Main glow blobs */}
        <div style={{ position:'absolute', top:'-15%', left:'-8%', width:'55%', height:'75%', background:'radial-gradient(ellipse, rgba(123,97,255,0.14) 0%, transparent 65%)', borderRadius:'50%' }}/>
        <div style={{ position:'absolute', bottom:'0', right:'-5%', width:'45%', height:'65%', background:'radial-gradient(ellipse, rgba(0,210,255,0.09) 0%, transparent 65%)', borderRadius:'50%' }}/>

        {/* Orbit rings */}
        <svg style={{ position:'absolute', right:'-80px', top:'50%', transform:'translateY(-50%)', width:700, height:700, opacity:0.08 }} viewBox="0 0 700 700">
          <circle cx="350" cy="350" r="200" fill="none" stroke="url(#ring-grad)" strokeWidth="1"/>
          <circle cx="350" cy="350" r="280" fill="none" stroke="url(#ring-grad)" strokeWidth="0.7"/>
          <circle cx="350" cy="350" r="340" fill="none" stroke="url(#ring-grad)" strokeWidth="0.5"/>
          <defs>
            <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7B61FF"/>
              <stop offset="100%" stopColor="#00D2FF"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Diagonal tech line */}
        <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.06 }} viewBox="0 0 1440 900" preserveAspectRatio="none">
          <line x1="0" y1="900" x2="700" y2="0" stroke="url(#line-g)" strokeWidth="1"/>
          <line x1="200" y1="900" x2="900" y2="0" stroke="url(#line-g)" strokeWidth="0.5"/>
          <defs>
            <linearGradient id="line-g" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#7B61FF" stopOpacity="0"/>
              <stop offset="50%" stopColor="#00D2FF"/>
              <stop offset="100%" stopColor="#7B61FF" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Scan beam */}
      <div className="scan-beam" style={{ zIndex: 2 }} />

      {/* Top border line */}
      <div style={{ position:'absolute', top:95, left:0, right:0, height:1, background:'linear-gradient(90deg, transparent, rgba(123,97,255,0.5) 50%, transparent)', zIndex:1 }}/>

      {/* ── Content ── */}
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'60px 28px 0', width:'100%', flex:1, display:'flex', alignItems:'center', position:'relative', zIndex:2 }}>
        <div className="hero-grid" style={{ width: '100%' }}>

          {/* ── Left ── */}
          <div>
            {/* Status */}
            <motion.div {...f(0.1)} style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 14px', borderRadius:8, background:'rgba(0,255,148,0.06)', border:'1px solid rgba(0,255,148,0.15)', marginBottom:32 }}>
              <span className="pulse-dot" />
              <span style={{ fontSize:11, fontWeight:600, color:'var(--accent3)', letterSpacing:'0.08em', fontFamily:'var(--mono)' }}>
                XiArmo · Савёловская · Л-106 · С 10:00
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div {...f(0.18)}>
              <div style={{ fontSize:'clamp(52px,7.5vw,100px)', fontWeight:900, lineHeight:0.92, letterSpacing:'-0.04em', color:'white', marginBottom:28 }}>
                <div>Техника</div>
                <div className="gt glitch-wrap" data-text="нового">нового</div>
                <div>поколения</div>
              </div>
            </motion.div>

            {/* Typewriter line */}
            <motion.div {...f(0.24)} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:24, padding:'10px 16px', background:'rgba(255,255,255,0.03)', border:'1px solid var(--border)', borderRadius:10, maxWidth:380 }}>
              <span style={{ fontSize:11, color:'var(--t3)', fontFamily:'var(--mono)', letterSpacing:'0.06em', flexShrink:0 }}>NOW_IN_STOCK://</span>
              <Typewriter />
            </motion.div>

            <motion.p {...f(0.27)} style={{ fontSize:16, color:'rgba(255,255,255,0.42)', lineHeight:1.8, marginBottom:40, maxWidth:440 }}>
              500+ моделей на Савёловском рынке — прямые поставки без наценки, оригинальная техника с гарантией.
            </motion.p>

            <motion.div {...f(0.35)} style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:52 }}>
              <a href="#catalog" className="btn-accent">
                Смотреть каталог
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
              <a href="#contact" className="btn-ghost">Как нас найти</a>
            </motion.div>

            {/* Stats */}
            <motion.div {...f(0.43)} className="hero-stats" style={{ paddingTop:28, borderTop:'1px solid rgba(255,255,255,0.06)' }}>
              {[['500+','моделей'],['30+','брендов'],['5 лет','на рынке'],['4.9★','рейтинг']].map(([n,l]) => (
                <div key={l}>
                  <div style={{ fontSize:26, fontWeight:900, color:'white', letterSpacing:'-0.03em', lineHeight:1, fontFamily:'var(--mono)' }}>{n}</div>
                  <div style={{ fontSize:11, color:'var(--t3)', marginTop:5, fontWeight:500, letterSpacing:'0.06em', fontFamily:'var(--mono)', textTransform:'uppercase' }}>{l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right collage ── */}
          <motion.div
            initial={{ opacity:0, scale:0.88 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1, delay:0.25, ease:[0.22,1,0.36,1] }}
            style={{ position:'relative', display:'flex', justifyContent:'center', alignItems:'center', minHeight:520 }}
            className="hero-right"
          >
            {/* Orbit rings visible */}
            <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:400, height:400, borderRadius:'50%', border:'1px solid rgba(123,97,255,0.1)', pointerEvents:'none' }} />
            <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:300, height:300, borderRadius:'50%', border:'1px solid rgba(0,210,255,0.08)', pointerEvents:'none' }} />

            {/* Main glow */}
            <div style={{ position:'absolute', top:'15%', left:'50%', transform:'translateX(-50%)', width:380, height:280, background:'radial-gradient(ellipse, rgba(123,97,255,0.22) 0%, rgba(0,210,255,0.1) 50%, transparent 70%)', filter:'blur(40px)' }}/>

            {/* Main phone */}
            <motion.div animate={{ y:[0,-12,0] }} transition={{ duration:4.5, repeat:Infinity, ease:'easeInOut' }} style={{ position:'relative', zIndex:3, width:220 }}>
              <img src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=700&q=90&fit=crop&crop=center" alt="iPhone 17 Pro"
                style={{ width:'100%', borderRadius:44, border:'1px solid rgba(255,255,255,0.08)', boxShadow:'0 48px 100px rgba(0,0,0,0.9)', display:'block' }} />
            </motion.div>

            {/* Laptop */}
            <motion.div animate={{ y:[0,8,0] }} transition={{ duration:5.5, repeat:Infinity, ease:'easeInOut', delay:0.7 }} style={{ position:'absolute', left:0, bottom:'8%', width:200, zIndex:2 }}>
              <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80&fit=crop" alt="MacBook"
                style={{ width:'100%', borderRadius:14, border:'1px solid rgba(255,255,255,0.06)', boxShadow:'0 24px 64px rgba(0,0,0,0.8)', display:'block', opacity:0.9 }} />
            </motion.div>

            {/* Headphones */}
            <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:3.8, repeat:Infinity, ease:'easeInOut', delay:1.2 }} style={{ position:'absolute', right:0, top:'12%', width:155, zIndex:2 }}>
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80&fit=crop" alt="Sony WH"
                style={{ width:'100%', borderRadius:14, border:'1px solid rgba(255,255,255,0.06)', boxShadow:'0 20px 60px rgba(0,0,0,0.8)', display:'block', opacity:0.85 }} />
            </motion.div>

            {/* Info chip */}
            <motion.div animate={{ y:[0,-9,0] }} transition={{ duration:4, repeat:Infinity, ease:'easeInOut', delay:0.3 }}
              style={{ position:'absolute', left:'10%', top:'16%', zIndex:5, background:'rgba(8,8,16,0.94)', backdropFilter:'blur(16px)', border:'1px solid rgba(123,97,255,0.2)', borderRadius:14, padding:'12px 16px', boxShadow:'0 16px 48px rgba(0,0,0,0.7)' }}>
              <div style={{ fontSize:9, fontWeight:700, color:'var(--accent)', letterSpacing:'0.12em', marginBottom:5, fontFamily:'var(--mono)' }}>APPLE // FLAGSHIP</div>
              <div style={{ fontSize:15, fontWeight:800, color:'white', letterSpacing:'-0.02em', marginBottom:4 }}>iPhone 17 Pro Max</div>
              <div style={{ display:'flex', alignItems:'center', gap:6 }}>
                <span className="pulse-dot" style={{ width:5, height:5 }} />
                <span style={{ fontSize:10, color:'var(--accent3)', fontWeight:600, fontFamily:'var(--mono)' }}>IN_STOCK</span>
              </div>
            </motion.div>

            {/* Badge chip */}
            <motion.div animate={{ y:[0,9,0] }} transition={{ duration:5, repeat:Infinity, ease:'easeInOut', delay:1.6 }}
              style={{ position:'absolute', right:'5%', bottom:'18%', zIndex:5, background:'linear-gradient(135deg, #7B61FF, #00D2FF)', borderRadius:10, padding:'8px 14px', boxShadow:'0 8px 32px rgba(123,97,255,0.5)' }}>
              <div style={{ fontSize:10, fontWeight:800, color:'white', letterSpacing:'0.06em', fontFamily:'var(--mono)' }}>NEW_2026</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:120, background:'linear-gradient(to top, var(--bg) 0%, transparent 100%)', pointerEvents:'none', zIndex:3 }}/>

        <style>{`
          .hero-grid { display: grid; align-items: center; }
        `}</style>
    </section>
  )
}
