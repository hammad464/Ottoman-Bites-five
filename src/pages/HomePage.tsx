import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Flame, Star, MapPin, Phone, ArrowRight, Sparkles, ChevronDown } from 'lucide-react'
import Embers from '../components/Embers'
import { menu, reviews, businessInfo, heroImages } from '../data'
import { useCart } from '../context/CartContext'

export default function HomePage() {
  const { addToCart } = useCart()

  // Featured selection across categories
  const featuredBeef = menu.find((c) => c.id === 'beef-burgers')?.items.slice(0, 3) || []
  const featuredChicken = menu.find((c) => c.id === 'chicken-burgers')?.items.slice(0, 3) || []
  const featuredPeriPeri = menu.find((c) => c.id === 'peri-peri')?.items.slice(0, 2) || []
  const featuredHighlights = [...featuredBeef.slice(0, 2), ...featuredChicken.slice(0, 2), ...featuredPeriPeri.slice(0, 2)]

  const topReviews = reviews.filter((r) => r.text).slice(0, 3)

  return (
    <div className="relative overflow-hidden">
      {/* 1. HERO SECTION (Original Restored) */}
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
            <Link
              to="/menu"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-ottoman-red via-ottoman-burgundy to-ottoman-red border border-copper/40 text-cream font-body text-sm tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(184,115,51,0.5)] hover:scale-105"
            >
              <span className="relative z-10">Summon the Menu</span>
              <div className="absolute inset-0 bg-gradient-to-r from-copper/0 via-copper/20 to-copper/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
            <Link
              to="/lore"
              className="px-8 py-4 rounded-full border border-cream/20 text-cream/80 font-body text-sm tracking-[0.15em] uppercase hover:border-brass/50 hover:text-brass transition-all duration-300"
            >
              Discover the Lore
            </Link>
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

      {/* 2. SULTAN'S HIGHLIGHTS / FEATURED DISHES */}
      <section className="relative py-24 bg-espresso/40 overflow-hidden">
        <div className="absolute inset-0 copper-texture" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-body tracking-[0.3em] text-copper uppercase mb-2 block font-semibold">
                Imperial Selections
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold">
                <span className="text-gold-gradient">The Sultan's Crown Favorites</span>
              </h2>
              <p className="mt-3 text-cream/60 font-body max-w-xl text-sm sm:text-base">
                Hand-picked masterpieces from our updated Sultan's Complete Menu. Hand-crafted with royal seasoning and fresh ingredients.
              </p>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-sm text-brass hover:text-copper-light transition-colors font-body tracking-wider uppercase font-semibold group shrink-0"
            >
              View Full Menu ({menu.reduce((acc, cat) => acc + cat.items.length, 0)} Items)
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHighlights.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative bg-glass-card rounded-2xl overflow-hidden border border-copper/15 hover:border-copper/40 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(184,115,51,0.2)] flex flex-col justify-between"
              >
                {item.image && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/30 to-transparent" />
                    
                    {item.num && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-obsidian/85 border border-copper/30 text-[11px] font-mono text-cream font-bold backdrop-blur-sm">
                        #{item.num}
                      </span>
                    )}

                    {item.badge && (
                      <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-ottoman-burgundy/90 border border-copper/40 text-xs font-body text-brass tracking-wide backdrop-blur-sm shadow-md">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif text-xl text-cream group-hover:text-brass transition-colors duration-300 leading-tight">
                        {item.name}
                      </h3>
                      <span className="font-body text-lg text-brass whitespace-nowrap font-bold">
                        Rs {item.price}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-cream/50 font-body leading-relaxed line-clamp-3 mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-copper/10 flex items-center justify-between gap-2">
                    <button
                      onClick={() => addToCart(item, 1)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-copper/20 to-brass/20 hover:from-copper/40 hover:to-brass/40 border border-copper/30 text-brass text-xs font-body font-semibold flex items-center justify-center gap-1.5 transition-all shadow-[0_0_15px_rgba(184,115,51,0.15)]"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      Add to Feast
                    </button>
                    <Link
                      to="/menu"
                      className="p-2.5 rounded-xl bg-obsidian/80 border border-copper/20 hover:border-copper/40 text-cream/60 hover:text-cream text-xs transition-all"
                      title="View on Menu"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-glass-dark border border-copper/40 text-brass hover:bg-copper/15 hover:border-brass transition-all duration-300 font-body text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(184,115,51,0.2)]"
            >
              Explore All Categories: Burgers, Wraps, Peri-Peri, Shakes & Drinks
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. THE HERITAGE / LORE TEASER */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 ottoman-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-copper/30 shadow-2xl">
                <img
                  src={heroImages.chef}
                  alt="Ottoman Bites Grilling on Fire"
                  className="w-full h-[420px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-glass-card border border-copper/30 rounded-xl p-4 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
                <Flame className="w-8 h-8 text-ember animate-pulse" />
                <div>
                  <p className="font-serif text-sm font-bold text-brass">Forged Over Hot Coals</p>
                  <p className="text-xs text-cream/50 font-body">Authentic Turkish spice blends</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-xs font-body tracking-[0.3em] text-copper uppercase mb-3 block font-semibold">
                The Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight mb-6">
                <span className="text-gold-gradient">Where Spice Routes</span>
                <br />
                <span className="text-cream">Meet Sizzling Iron</span>
              </h2>
              <p className="text-cream/70 font-body leading-relaxed mb-6 text-sm sm:text-base">
                In the grand tradition of Ottoman palace kitchens, where spice masters carried cumin, sumac, and smoked paprika across vast deserts, we forge a modern culinary empire.
              </p>
              <p className="text-cream/70 font-body leading-relaxed mb-8 text-sm sm:text-base">
                Every patty is hand-smashed on searing hot griddles, caramelized to perfection with our secret house sauces and served hot in toasted artisanal buns.
              </p>
              
              <Link
                to="/lore"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-copper/20 to-brass/20 border border-copper/40 text-brass hover:text-cream hover:border-brass text-sm font-body tracking-wider uppercase transition-all duration-300"
              >
                Read The Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PRAISE & REVIEWS TEASER */}
      <section className="relative py-24 bg-espresso/30 overflow-hidden">
        <div className="absolute inset-0 copper-texture" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-body tracking-[0.3em] text-copper uppercase mb-3 block font-semibold">
              Guest Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4">
              <span className="text-gold-gradient">Praise of the Empire</span>
            </h2>
            <div className="inline-flex items-center gap-2 bg-glass-dark px-4 py-2 rounded-full border border-copper/20">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-brass text-brass" />
                ))}
              </div>
              <span className="font-serif text-brass font-bold text-sm">4.9 / 5.0 Rating</span>
              <span className="text-cream/40 text-xs font-body">({businessInfo.reviewsCount} Google Reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {topReviews.map((rev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-glass-card rounded-2xl p-6 border border-copper/15 hover:border-copper/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-brass text-brass" />
                    ))}
                  </div>
                  <p className="text-sm text-cream/70 font-body leading-relaxed italic mb-4">
                    "{rev.textTranslated || rev.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-copper/10 flex items-center gap-3">
                  <img
                    src={rev.reviewerPhotoUrl}
                    alt={rev.name}
                    className="w-9 h-9 rounded-full object-cover border border-copper/30"
                  />
                  <div>
                    <h4 className="font-serif text-sm text-cream font-medium">{rev.name}</h4>
                    <p className="text-[10px] text-brass/70 font-body">
                      {rev.isLocalGuide ? 'Verified Local Guide' : 'Verified Google Customer'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-sm text-brass hover:text-copper-light font-body font-semibold tracking-wider uppercase"
            >
              Read All Guest Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LOCATION & ORDER BANNER */}
      <section className="relative py-20 bg-gradient-to-b from-transparent via-obsidian/80 to-obsidian border-t border-copper/15">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#20150d] via-[#2a170b] to-[#1a0f0a] rounded-3xl p-8 sm:p-12 border border-copper/30 shadow-[0_0_50px_rgba(184,115,51,0.15)] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl text-center lg:text-left">
              <span className="text-xs font-body tracking-[0.3em] text-copper uppercase font-semibold">
                Visit or Order Online
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
                Summon Your Feast Today
              </h3>
              <p className="text-cream/60 font-body text-sm leading-relaxed">
                Located at {businessInfo.address}. Dine-in, take away, or get lightning fast delivery across Lahore.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={`tel:${businessInfo.phone1}`}
                  className="inline-flex items-center gap-2 text-xs font-body text-cream/70 hover:text-brass"
                >
                  <Phone className="w-4 h-4 text-copper" /> {businessInfo.phone1}
                </a>
                <span className="text-copper/40">•</span>
                <span className="inline-flex items-center gap-2 text-xs font-body text-cream/70">
                  <MapPin className="w-4 h-4 text-copper" /> Al-Rehman Garden Phase 2
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/menu"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-copper to-brass text-obsidian font-body font-bold text-sm tracking-wider uppercase text-center shadow-[0_0_25px_rgba(201,161,74,0.4)] hover:scale-105 transition-all"
              >
                Order Feast Online
              </Link>
              <Link
                to="/location"
                className="px-8 py-4 rounded-full border border-copper/40 bg-glass-dark text-brass font-body text-sm tracking-wider uppercase text-center hover:bg-copper/20 transition-all"
              >
                View Map & Timings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
