import { motion } from 'framer-motion'
import { Flame, Sparkles } from 'lucide-react'

export default function PageLoader() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center">
      <div className="relative mb-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="w-16 h-16 rounded-full border-2 border-copper/20 border-t-brass shadow-[0_0_20px_rgba(201,161,74,0.3)]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Flame className="w-6 h-6 text-ember animate-pulse" />
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-serif text-lg text-gold-gradient font-semibold tracking-wide flex items-center gap-2"
      >
        <Sparkles className="w-4 h-4 text-brass animate-pulse" />
        Summoning The Sultan's Feast...
      </motion.p>
      <p className="text-xs text-cream/40 font-body mt-1">Crafted with fire and Ottoman spices</p>
    </div>
  )
}
