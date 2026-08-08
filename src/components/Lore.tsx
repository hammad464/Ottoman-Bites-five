import { motion } from 'framer-motion'
import { heroImages } from '../data'

export default function Lore() {
  return (
    <section id="lore" className="relative py-24 sm:py-32 overflow-hidden copper-texture">
      <div className="absolute inset-0 ottoman-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-copper/20 group">
              <img
                src={heroImages.chef}
                alt="Chef grilling over open flame"
                className="w-full h-[500px] sm:h-[600px] object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-copper/10 rounded-2xl" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-40 sm:w-52 rounded-xl overflow-hidden border-2 border-brass/30 shadow-2xl shadow-obsidian"
            >
              <img
                src={heroImages.spices}
                alt="Spices on dark surface"
                className="w-full h-32 sm:h-40 object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          >
            <span className="text-xs font-body tracking-[0.3em] text-copper uppercase mb-4 block">The Heritage</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-6">
              <span className="text-gold-gradient">Forged in Fire,</span>
              <br />
              <span className="text-cream">Steeped in Spice</span>
            </h2>
            <div className="space-y-5 text-cream/65 font-body leading-relaxed text-lg">
              <p>
                In the grand tradition of the Ottoman kitchens, where spice merchants once carried
                cumin, sumac, and smoked paprika across vast deserts and rolling seas, we forge a
                new legacy — one burger at a time.
              </p>
              <p>
                Our patties are hand-pressed from premium Australian beef, seared on scorching iron
                until the edges crackle. Every bite carries the whisper of ancient spice routes,
                colliding with the unapologetic indulgence of modern fast food.
              </p>
              <p>
                This is not just a meal. It is a feast worthy of a Sultan.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Cumin', 'Sumac', 'Smoked Paprika', 'Garlic Sauce', 'BBQ Glaze'].map((spice, i) => (
                <motion.span
                  key={spice}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="px-4 py-2 rounded-full bg-espresso/60 border border-copper/20 text-sm text-brass/90 font-body"
                >
                  {spice}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
