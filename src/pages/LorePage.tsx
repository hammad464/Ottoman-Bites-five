import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Flame, Shield, Award, Sparkles, ArrowRight, BookOpen, Compass, Coffee } from 'lucide-react'
import { heroImages } from '../data'

export default function LorePage() {
  const pillars = [
    {
      icon: Flame,
      title: 'Forged in Searing Fire',
      subtitle: 'The Iron Griddle',
      desc: 'Our Australian beef patties are smashed onto scorching iron flat-tops at 400°F, creating a caramelized Maillard crust that seals in juicy richness.',
    },
    {
      icon: Compass,
      title: 'Ancient Spice Trails',
      subtitle: 'Secret Spice Matrix',
      desc: 'From Aleppo chili flakes and roasted ground cumin to sweet sumac and smoked paprika, our proprietary spice blends trace royal Ottoman caravan trade routes.',
    },
    {
      icon: Shield,
      title: '100% Prime Quality Meats',
      subtitle: 'Pure Australian Beef',
      desc: 'No fillers, no preservatives. Pure premium cuts of Australian beef and tender, hormone-free chicken fillets marinated in fragrant herb infusions for 24 hours.',
    },
    {
      icon: Coffee,
      title: 'Royal Hospitality',
      subtitle: 'Sultanate Tradition',
      desc: 'Every guest is treated like royal nobility. Handcrafted shakes, spiced cardamom tea, and sizzling loaded fries served with warmth and unyielding pride.',
    },
  ]

  const spices = [
    { name: 'Ground Sumac', origin: 'Anatolia', desc: 'Tart, citrus-like ruby berry dust that cuts through savory beef' },
    { name: 'Smoked Paprika', origin: 'Spice Bazaar', desc: 'Oak-smoked sweet peppers for deep campfire warmth' },
    { name: 'Aleppo Pepper', origin: 'Levant Route', desc: 'Fruity warmth with a subtle, gentle lingering kick' },
    { name: 'Roasted Cumin', origin: 'Silk Road', desc: 'Earthy, aromatic base notes ground freshly each morning' },
    { name: 'Green Cardamom', origin: 'Imperial Route', desc: 'Fragrant aromatic pods slow-steeped in our royal teas' },
    { name: 'Turkish Garlic Glaze', origin: 'House Secret', desc: 'Slow-roasted garlic confit folded with creamy herbs' },
  ]

  return (
    <div className="relative min-h-screen bg-obsidian text-cream pt-24 pb-32">
      {/* Background patterns */}
      <div className="fixed inset-0 copper-texture opacity-60 pointer-events-none" />
      <div className="fixed inset-0 ottoman-pattern opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 pt-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-copper/40 bg-glass-dark mb-4 shadow-[0_0_20px_rgba(184,115,51,0.2)]">
            <BookOpen className="w-4 h-4 text-brass" />
            <span className="text-xs font-body tracking-[0.25em] text-brass uppercase font-semibold">
              The Heritage of the Empire
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            <span className="text-gold-gradient">The Ottoman Lore</span>
          </h1>

          <p className="text-base sm:text-lg text-cream/70 font-body leading-relaxed">
            Centuries ago, the grand imperial kitchens of Topkapi Palace brought together master chefs, spice caravans, and charcoal embers. Today, Ottoman Bites reawakens that royal legacy in every smashed burger and fiery doner wrap.
          </p>
        </motion.div>

        {/* Big Feature Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-copper/30 shadow-2xl group">
              <img
                src={heroImages.chef}
                alt="Ottoman Bites Chef Grilling"
                className="w-full h-[520px] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-glass-dark border border-copper/30 backdrop-blur-md">
                <p className="text-xs font-mono text-brass uppercase tracking-wider mb-1">Mastery of Flame</p>
                <p className="font-serif text-lg text-cream font-medium">
                  "Fire is our chisel, iron is our anvil, and spice is our crown."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6"
          >
            <span className="text-xs font-body tracking-[0.3em] text-copper uppercase font-semibold block">
              Chapter I: The Fire & The Iron
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
              Smashed to Crusty Perfection.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-cream/70 font-body leading-relaxed">
              <p>
                When you step into Ottoman Bites, you are greeted by the unmistakable hiss of beef meeting white-hot steel. Our smashing technique isn't just about speed — it creates lacy, caramelized borders while trapping pure moisture inside.
              </p>
              <p>
                We paired this ancient passion with contemporary cravings: crunchy spicy Cheetos crusts, molten deep-fried cheese patties, balsamic-sautéed wild mushrooms, and house-made doner marinades.
              </p>
              <p>
                The result is a culinary journey where the rugged spirit of Ottoman warriors meets modern street-food grandeur.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to="/menu"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-copper to-brass text-obsidian font-body font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(201,161,74,0.3)] hover:scale-105 transition-all"
              >
                Summon The Feast
              </Link>
              <Link
                to="/location"
                className="px-6 py-3 rounded-full border border-copper/30 bg-glass-dark text-brass font-body text-xs uppercase tracking-wider hover:bg-copper/20 transition-all"
              >
                Visit Our Kitchen
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars of Royal Cooking */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <span className="text-xs font-body tracking-[0.3em] text-copper uppercase font-semibold mb-2 block">
              Our Core Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gold-gradient">
              The Four Imperial Pillars
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-glass-card rounded-2xl p-6 border border-copper/20 hover:border-copper/45 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-copper/15 border border-copper/30 flex items-center justify-center text-brass mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-copper tracking-wider uppercase block mb-1">
                      {p.subtitle}
                    </span>
                    <h3 className="font-serif text-lg text-cream font-semibold mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cream/55 font-body leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* The Royal Spice Caravan Gallery */}
        <div className="bg-glass-dark rounded-3xl p-8 sm:p-12 border border-copper/30 shadow-[0_0_50px_rgba(184,115,51,0.1)] mb-20">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-copper/10 border border-copper/30 text-brass text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Secret Formula
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-cream mb-3">
              The Ottoman Spice Compass
            </h3>
            <p className="text-xs sm:text-sm text-cream/60 font-body">
              Every seasoning in our kitchen is freshly milled and balanced to elevate the natural richness of premium beef and chicken.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {spices.map((s, i) => (
              <div
                key={s.name}
                className="bg-obsidian/70 rounded-xl p-4 border border-copper/15 hover:border-brass/40 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h4 className="font-serif text-sm font-bold text-brass">{s.name}</h4>
                  <span className="text-[10px] text-cream/40 font-mono bg-copper/10 px-2 py-0.5 rounded">
                    {s.origin}
                  </span>
                </div>
                <p className="text-xs text-cream/60 font-body leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Menu */}
        <div className="text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-ottoman-red via-ottoman-burgundy to-ottoman-red border border-copper/40 text-cream font-body font-bold text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(184,115,51,0.4)] hover:scale-105 transition-all"
          >
            Experience The Flavor on Our Menu <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
