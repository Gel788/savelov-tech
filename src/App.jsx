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
      <div style={{ paddingTop: 0 }}>
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
