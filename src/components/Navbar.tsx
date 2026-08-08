import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'The Lore', href: '#lore' },
  { label: 'The Feast', href: '#menu' },
  { label: 'Praise', href: '#reviews' },
  { label: 'Find Us', href: '#location' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
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
          scrolled ? 'bg-glass-dark border-b border-copper/20 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-serif text-xl sm:text-2xl font-semibold text-gold-gradient tracking-wide">
              Ottoman Bites
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-body text-cream/70 hover:text-brass transition-colors duration-300 tracking-wide relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-copper to-brass group-hover:w-full transition-all duration-400" />
              </a>
            ))}
            <a
              href="tel:03132707666"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-copper/40 text-sm text-brass hover:bg-copper/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(184,115,51,0.3)]"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-cream/80 hover:text-brass transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-obsidian/95 backdrop-blur-lg md:hidden flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-cream/70 hover:text-brass"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
            {navLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-serif text-2xl text-cream/80 hover:text-brass transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <a
              href="tel:03132707666"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-copper/40 text-brass"
            >
              <Phone className="w-4 h-4" />
              Call to Order
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
