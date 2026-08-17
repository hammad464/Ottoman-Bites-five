import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import SmoothScroll from './components/SmoothScroll'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import PageLoader from './components/PageLoader'

// Lazy loaded page routes for optimal speed and bundle splitting
const HomePage = lazy(() => import('./pages/HomePage'))
const MenuPage = lazy(() => import('./pages/MenuPage'))
const LorePage = lazy(() => import('./pages/LorePage'))
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'))
const LocationPage = lazy(() => import('./pages/LocationPage'))

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <CartProvider>
          <ScrollToTop />
          <div className="min-h-screen bg-obsidian text-cream flex flex-col justify-between overflow-x-hidden selection:bg-copper selection:text-obsidian">
            <Navbar />
            <main className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/menu" element={<MenuPage />} />
                  <Route path="/lore" element={<LorePage />} />
                  <Route path="/reviews" element={<ReviewsPage />} />
                  <Route path="/location" element={<LocationPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <CartDrawer />
          </div>
        </CartProvider>
      </SmoothScroll>
    </Router>
  )
}
