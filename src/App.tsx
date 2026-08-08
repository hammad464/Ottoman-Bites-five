import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Lore from './components/Lore'
import MenuSection from './components/MenuSection'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-cream overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Lore />
        <MenuSection />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
