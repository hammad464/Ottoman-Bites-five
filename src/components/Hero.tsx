import { motion } from 'framer-motion'
import { ChevronDown, Flame } from 'lucide-react'
import Embers from './Embers'
import { heroImages } from '../data'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroImages.burger}
          alt="Gourmet beef burger on dark background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/50 to-obsidian" />
        <div className="absolute inset-0 hero-vignette" />
      </motion.div>

      <Embers count={35} />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-copper/30 bg-glass-dark mb-8"
        >
          <Flame className="w-4 h-4 text-ember" />
          <span className="text-xs font-body tracking-[0.2em] text-brass uppercase">Al-Rehman Garden · Lahore</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.05] tracking-tight"
        >
          <span className="text-gold-gradient text-copper-glow">THE EMPIRE'S</span>
          <br />
          <span className="text-cream">FEAST</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 text-lg sm:text-xl font-body text-cream/70 max-w-2xl mx-auto leading-relaxed"
        >
          Legendary Beef Burgers. Forged in Fire. Steeped in History.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-ottoman-red via-ottoman-burgundy to-ottoman-red border border-copper/40 text-cream font-body text-sm tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(184,115,51,0.5)] hover:scale-105"
          >
            <span className="relative z-10">Summon the Menu</span>
            <div className="absolute inset-0 bg-gradient-to-r from-copper/0 via-copper/20 to-copper/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </a>
          <a
            href="#lore"
            className="px-8 py-4 rounded-full border border-cream/20 text-cream/80 font-body text-sm tracking-[0.15em] uppercase hover:border-brass/50 hover:text-brass transition-all duration-300"
          >
            Discover the Lore
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-cream/40 font-body tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-copper/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
