import { BrowserRouter as Router } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import SmoothScroll from './components/SmoothScroll'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <CartProvider>
          <ScrollToTop />
          <div className="min-h-screen bg-obsidian text-cream flex flex-col justify-between overflow-x-hidden selection:bg-copper selection:text-obsidian">
            <Navbar />
            <main className="flex-grow">
              <AppRoutes />
            </main>
            <Footer />
            <CartDrawer />
          </div>
        </CartProvider>
      </SmoothScroll>
    </Router>
  )
}
