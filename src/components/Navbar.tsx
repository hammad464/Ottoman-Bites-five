import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ShoppingBag, Send } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { businessInfo } from '../data'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'The Feast (Menu)', path: '/menu' },
  { label: 'The Lore', path: '/lore' },
  { label: 'Imperial Praise', path: '/reviews' },
  { label: 'Find Us', path: '/location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-glass-dark border-b border-copper/30 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)] backdrop-blur-md' : 'bg-gradient-to-b from-obsidian/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-copper/20 border border-copper/40 flex items-center justify-center text-brass font-serif font-bold text-xs shadow-[0_0_15px_rgba(184,115,51,0.3)]">
              OB
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold text-gold-gradient tracking-wide group-hover:scale-105 transition-transform">
                Ottoman Bites
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-copper uppercase -mt-1 hidden sm:block">
                The Empire's Feast
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                className={({ isActive }) =>
                  `text-xs tracking-wider uppercase font-body transition-all duration-300 relative py-1 ${
                    isActive
                      ? 'text-brass font-bold text-copper-glow'
                      : 'text-cream/70 hover:text-brass hover:text-cream'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-copper via-brass to-copper shadow-[0_0_8px_rgba(201,161,74,0.8)]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-glass-card border border-copper/40 text-xs text-brass hover:border-brass hover:shadow-[0_0_20px_rgba(184,115,51,0.3)] transition-all"
              aria-label="View Feast Tray"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline font-serif font-bold">Feast Tray</span>
              {totalItems > 0 && (
                <span className="w-5 h-5 rounded-full bg-gradient-to-r from-ottoman-red to-copper text-[10px] font-mono font-bold text-white flex items-center justify-center shadow-md animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Direct WhatsApp button */}
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-body hover:bg-emerald-900/80 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-cream/80 hover:text-brass transition-colors p-1"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-obsidian/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-6 p-6"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-cream/70 hover:text-brass p-2"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>

            <span className="font-serif text-2xl font-bold text-gold-gradient mb-2">
              Ottoman Bites
            </span>

            {navLinks.map((l, i) => (
              <motion.div
                key={l.path}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <NavLink
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-serif text-xl sm:text-2xl transition-colors ${
                      isActive ? 'text-brass font-bold text-copper-glow' : 'text-cream/70 hover:text-brass'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </motion.div>
            ))}

            <div className="mt-4 flex flex-col gap-3 w-full max-w-xs">
              <button
                onClick={() => {
                  setOpen(false)
                  setIsCartOpen(true)
                }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-copper to-brass text-obsidian font-body font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(201,161,74,0.4)]"
              >
                <ShoppingBag className="w-4 h-4" />
                View Feast Tray ({totalItems} items)
              </button>

              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="w-full py-3 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 font-body text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                WhatsApp: {businessInfo.whatsappFormatted}
              </a>

              <a
                href={`tel:${businessInfo.phone1}`}
                onClick={() => setOpen(false)}
                className="w-full py-3 rounded-full border border-copper/30 text-brass text-xs font-body flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Hotline: {businessInfo.phone1}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
