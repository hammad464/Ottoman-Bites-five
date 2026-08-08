import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menu, type MenuCategory } from '../data'

export default function MenuSection() {
  const [activeId, setActiveId] = useState<string>('beef-burgers')
  const activeCategory = menu.find((c) => c.id === activeId) as MenuCategory

  return (
    <section id="menu" className="relative py-24 sm:py-32 bg-espresso/40 overflow-hidden">
      <div className="absolute inset-0 copper-texture" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-body tracking-[0.3em] text-copper uppercase mb-3 block">The Royal Table</span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold">
            <span className="text-gold-gradient">The Feast</span>
          </h2>
          <p className="mt-4 text-cream/50 font-body max-w-xl mx-auto">
            Every dish is a chapter from the Empire's cookbook. Choose your category and summon your feast.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-body tracking-wide transition-all duration-300 border ${
                activeId === cat.id
                  ? 'bg-gradient-to-r from-copper/30 to-brass/20 border-copper/60 text-brass shadow-[0_0_20px_rgba(184,115,51,0.3)]'
                  : 'bg-glass-dark border-copper/15 text-cream/50 hover:text-cream/80 hover:border-copper/30'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={activeCategory.id + '-tagline'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center text-cream/40 font-body italic mb-10"
          >
            {activeCategory.tagline}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeCategory.items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative bg-glass-card rounded-2xl overflow-hidden border border-copper/15 hover:border-copper/40 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(184,115,51,0.15)]"
              >
                {item.image && (
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
                    {item.badge && (
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-ottoman-burgundy/90 border border-copper/30 text-xs font-body text-brass tracking-wide backdrop-blur-sm">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-xl text-cream group-hover:text-brass transition-colors duration-300 leading-tight">
                      {item.name}
                    </h3>
                    <span className="font-body text-lg text-brass whitespace-nowrap font-semibold">
                      Rs {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-cream/50 font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-copper/0 group-hover:ring-copper/20 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
