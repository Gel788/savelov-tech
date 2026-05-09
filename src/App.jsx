import Header    from './components/Header'
import Hero       from './components/Hero'
import Brands     from './components/Brands'
import Categories from './components/Categories'
import Products   from './components/Products'
import WhyUs      from './components/WhyUs'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      {/* Announcement bar */}
      <div className="ann">
        <span>🔥 Новинки 2026 уже в наличии —</span>&nbsp;
        iPhone 17 Pro · Galaxy S26 Ultra · MacBook M4 Max · Sony WH-1000XM6
        &nbsp;&nbsp;<a href="#catalog" style={{ color: '#A78BFA', textDecoration: 'none', fontWeight: 700 }}>Смотреть каталог →</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://t.me/XiArmo" target="_blank" rel="noopener noreferrer" style={{ color: '#00D2FF', textDecoration: 'none', fontWeight: 700 }}>@XiArmo в Telegram</a>
      </div>

      <div style={{ paddingTop: 36 }}>
        <Header />
        <main>
          <Hero />
          <Brands />
          <Categories />
          <Products />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
