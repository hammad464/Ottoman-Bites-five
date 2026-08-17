import { useState, useMemo, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Plus, Check, Sparkles, Send, Flame, Utensils, Filter, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react'
import { menu, type MenuItem, businessInfo } from '../data'
import { useCart } from '../context/CartContext'

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [addedItemIds, setAddedItemIds] = useState<{ [id: number]: boolean }>({})
  const { addToCart, setIsCartOpen, totalItems, totalPrice } = useCart()

  const tabsContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  // Flatten all items for 'all' or filter by active category
  const allCategories = useMemo(() => {
    return [
      { id: 'all', name: '👑 All Imperial Items', tagline: "The Sultan's Complete Feast" },
      ...menu,
    ]
  }, [])

  const checkScrollability = () => {
    if (tabsContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsContainerRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollability()
    window.addEventListener('resize', checkScrollability)
    return () => window.removeEventListener('resize', checkScrollability)
  }, [allCategories])

  const scrollTabs = (offset: number) => {
    if (tabsContainerRef.current) {
      tabsContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' })
    }
  }

  const handleCategorySelect = (catId: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    setActiveCategory(catId)
    if (e?.currentTarget) {
      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }

  const filteredItems = useMemo(() => {
    let items: MenuItem[] = []
    if (activeCategory === 'all') {
      items = menu.flatMap((c) => c.items)
    } else {
      const cat = menu.find((c) => c.id === activeCategory)
      items = cat ? cat.items : []
    }

    if (!searchQuery.trim()) return items

    const q = searchQuery.toLowerCase().trim()
    return items.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(q)
      const descMatch = item.description.toLowerCase().includes(q)
      const numMatch = item.num ? item.num.toLowerCase().includes(q) : false
      const badgeMatch = item.badge ? item.badge.toLowerCase().includes(q) : false
      return nameMatch || descMatch || numMatch || badgeMatch
    })
  }, [activeCategory, searchQuery])

  const handleAdd = (item: MenuItem) => {
    addToCart(item, 1)
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }))
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }))
    }, 1200)
  }

  const handleDirectWhatsApp = (item: MenuItem) => {
    const itemNum = item.num ? `[#${item.num}] ` : ''
    const text = `👑 *SULTAN'S FEAST ORDER — OTTOMAN BITES* 👑\n\nI would like to order:\n*• 1x ${itemNum}${item.name}* (Rs ${item.price})\n\nPlease share the total with delivery charges and estimated time. Thank you!`
    const phoneNum = businessInfo.whatsapp.replace(/[^0-9]/g, '')
    window.open(`https://wa.me/${phoneNum}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  const extrasCategory = menu.find((c) => c.id === 'extras')

  return (
    <div className="relative min-h-screen bg-obsidian text-cream pt-24 pb-32">
      {/* Background Ambience */}
      <div className="fixed inset-0 copper-texture opacity-60 pointer-events-none" />
      <div className="fixed inset-0 ottoman-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 pt-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-copper/40 bg-glass-dark mb-4">
            <Flame className="w-4 h-4 text-ember animate-pulse" />
            <span className="text-xs font-body tracking-[0.25em] text-brass uppercase font-semibold">
              The Sultan's Complete Menu
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight mb-4">
            <span className="text-gold-gradient">Eat Like A Sultan</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-cream/60 font-body leading-relaxed">
            Every creation is forged in fire and steeped in Ottoman tradition. Select your dishes, customize your feast, and order directly to your doorstep.
          </p>
        </motion.div>

        {/* Search & Category Filter Bar */}
        <div className="mb-10 space-y-6">
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-copper absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search burgers, wraps, shakes, item #..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-glass-dark border border-copper/30 text-cream placeholder:text-cream/30 text-sm font-body focus:outline-none focus:border-brass focus:shadow-[0_0_20px_rgba(184,115,51,0.25)] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-cream/40 hover:text-brass"
              >
                Clear
              </button>
            )}
          </div>

          {/* Smooth Horizontal Scrollable Category Bar with Nav Controls */}
          <div className="relative max-w-5xl mx-auto flex items-center gap-2 group/bar">
            {/* Left Scroll Button */}
            {canScrollLeft && (
              <button
                onClick={() => scrollTabs(-240)}
                className="hidden sm:flex shrink-0 w-9 h-9 rounded-full bg-obsidian/90 border border-copper/40 items-center justify-center text-brass hover:bg-copper/20 hover:border-brass transition-all shadow-lg z-20"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {/* Left Edge Shadow Fade */}
            {canScrollLeft && (
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent pointer-events-none z-10" />
            )}

            {/* Scrollable Container */}
            <div
              ref={tabsContainerRef}
              data-lenis-prevent
              onScroll={checkScrollability}
              onWheel={(e) => {
                if (tabsContainerRef.current && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                  tabsContainerRef.current.scrollLeft += e.deltaY * 0.9
                }
              }}
              className="flex-1 flex items-center gap-2.5 overflow-x-auto py-2 px-3 scrollbar-hide scroll-smooth select-none cursor-grab active:cursor-grabbing"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {allCategories.map((cat) => {
                const isActive = activeCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={(e) => handleCategorySelect(cat.id, e)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-body tracking-wide whitespace-nowrap transition-all duration-300 border shrink-0 ${
                      isActive
                        ? 'bg-gradient-to-r from-copper/40 via-brass/25 to-copper/40 border-brass text-brass shadow-[0_0_20px_rgba(184,115,51,0.35)] font-semibold scale-105'
                        : 'bg-glass-dark border-copper/20 text-cream/65 hover:text-cream hover:border-copper/50 hover:bg-copper/10'
                    }`}
                  >
                    {cat.name}
                  </button>
                )
              })}
            </div>

            {/* Right Edge Shadow Fade */}
            {canScrollRight && (
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-obsidian via-obsidian/80 to-transparent pointer-events-none z-10" />
            )}

            {/* Right Scroll Button */}
            {canScrollRight && (
              <button
                onClick={() => scrollTabs(240)}
                className="hidden sm:flex shrink-0 w-9 h-9 rounded-full bg-obsidian/90 border border-copper/40 items-center justify-center text-brass hover:bg-copper/20 hover:border-brass transition-all shadow-lg z-20"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Current Active Category Tagline */}
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm text-copper-light/90 font-serif italic tracking-wide">
            {allCategories.find((c) => c.id === activeCategory)?.tagline}
          </p>
          <p className="text-xs text-cream/40 font-body mt-1">
            Showing {filteredItems.length} imperial item{filteredItems.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center bg-glass-card rounded-2xl border border-copper/20 p-8 max-w-lg mx-auto">
            <Filter className="w-10 h-10 text-copper/50 mx-auto mb-3" />
            <h3 className="font-serif text-xl text-cream font-medium">No Dishes Found</h3>
            <p className="text-xs sm:text-sm text-cream/50 font-body mt-1">
              No imperial delicacies match "{searchQuery}". Try searching for another keyword or reset the filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('all')
              }}
              className="mt-5 px-5 py-2 rounded-full border border-copper/40 text-brass text-xs font-body hover:bg-copper/20"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group relative bg-glass-card rounded-2xl overflow-hidden border border-copper/20 hover:border-copper/50 transition-all duration-500 hover:shadow-[0_8px_35px_rgba(184,115,51,0.2)] flex flex-col justify-between"
                >
                  {item.image && (
                    <div className="relative h-52 overflow-hidden bg-obsidian">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent" />

                      {/* Number Tag */}
                      {item.num && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-obsidian/90 border border-copper/40 text-[11px] font-mono text-brass font-bold backdrop-blur-md shadow-md">
                          #{item.num}
                        </span>
                      )}

                      {/* Badge */}
                      {item.badge && (
                        <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-ottoman-red to-ottoman-burgundy border border-copper/40 text-[11px] font-body text-cream font-medium tracking-wide backdrop-blur-md shadow-md">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-serif text-lg sm:text-xl text-cream group-hover:text-brass transition-colors duration-300 leading-tight">
                          {item.name}
                        </h3>
                        <span className="font-body text-lg font-bold text-brass whitespace-nowrap">
                          Rs {item.price}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-cream/55 font-body leading-relaxed mb-5">
                        {item.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-copper/15 flex items-center gap-2">
                      <button
                        onClick={() => handleAdd(item)}
                        className={`flex-1 py-2.5 px-3 rounded-xl font-body text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 ${
                          addedItemIds[item.id]
                            ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                            : 'bg-gradient-to-r from-copper/25 to-brass/20 hover:from-copper/40 hover:to-brass/35 border border-copper/35 text-brass shadow-[0_0_15px_rgba(184,115,51,0.15)] hover:scale-[1.02]'
                        }`}
                      >
                        {addedItemIds[item.id] ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Added to Tray
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" /> Add to Feast
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => handleDirectWhatsApp(item)}
                        title="Order this dish instantly via WhatsApp"
                        className="py-2.5 px-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-600/40 text-emerald-400 text-xs font-body flex items-center justify-center gap-1 transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </button>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-copper/0 group-hover:ring-copper/30 transition-all duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Extras & Add-ons Spotlight */}
        {extrasCategory && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-[#1c120a] via-[#24170d] to-[#170e08] rounded-3xl p-8 border border-copper/30 shadow-[0_0_40px_rgba(184,115,51,0.15)]"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-body tracking-[0.25em] text-copper uppercase font-semibold">
                  Upgrade Your Feast
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gold-gradient">
                  Sultan's Extras & Add-ons
                </h3>
                <p className="text-xs sm:text-sm text-cream/50 font-body">
                  Add extra Australian beef patty, crispy crumber fries, double cheese, or signature sauce dips.
                </p>
              </div>
              <span className="text-xs text-brass font-body px-3 py-1.5 rounded-full border border-copper/30 bg-obsidian/60 self-start md:self-auto">
                Customizable to Any Meal
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {extrasCategory.items.map((extra) => (
                <div
                  key={extra.id}
                  className="bg-obsidian/70 rounded-xl p-3.5 border border-copper/20 hover:border-copper/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] text-brass/70 font-mono">#{extra.num}</span>
                      <span className="text-xs font-bold text-brass">Rs {extra.price}</span>
                    </div>
                    <h4 className="font-serif text-xs sm:text-sm text-cream font-medium leading-snug">
                      {extra.name}
                    </h4>
                  </div>
                  <button
                    onClick={() => handleAdd(extra)}
                    className="mt-3 w-full py-1.5 rounded-lg bg-copper/15 hover:bg-copper/30 border border-copper/30 text-brass text-[11px] font-body flex items-center justify-center gap-1 transition-all"
                  >
                    <Plus className="w-3 h-3" /> Add Extra
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom Ordering Notice Banner */}
        <div className="mt-16 text-center bg-glass-card rounded-2xl p-6 border border-copper/20 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-brass font-serif text-lg font-bold mb-2">
            <Utensils className="w-5 h-5 text-copper" />
            <span>Ready to Place Your Royal Order?</span>
          </div>
          <p className="text-xs sm:text-sm text-cream/60 font-body mb-4 leading-relaxed">
            Order for Dine-In, Takeaway, or Home Delivery across Lahore. Call our direct order hotline or message us on WhatsApp with free instant confirmation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-copper to-brass text-obsidian font-body font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(201,161,74,0.4)] hover:scale-105 transition-all flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              View Selected Tray ({totalItems} Items · Rs {totalPrice.toLocaleString()})
            </button>
            <a
              href={`tel:${businessInfo.phone1}`}
              className="px-6 py-3 rounded-full bg-obsidian/80 border border-copper/40 text-brass text-xs sm:text-sm font-body hover:bg-copper/15 transition-all"
            >
              Call Hotline: {businessInfo.phone1}
            </a>
          </div>
        </div>
      </div>

      {/* Floating Bottom Cart CTA (on mobile/desktop when items are in cart) */}
      {totalItems > 0 && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md bg-gradient-to-r from-[#2a170b] to-[#1a0f0a] border border-copper/50 rounded-2xl p-3.5 shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-lg flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-copper/20 border border-copper/40 flex items-center justify-center text-brass font-bold">
              {totalItems}
            </div>
            <div>
              <p className="text-xs text-cream/50 font-body">Royal Tray Subtotal</p>
              <p className="font-serif text-base font-bold text-brass">Rs {totalPrice.toLocaleString()}</p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-copper to-brass text-obsidian font-body font-bold text-xs tracking-wider uppercase shadow-[0_0_15px_rgba(201,161,74,0.4)] hover:scale-105 transition-all flex items-center gap-1.5"
          >
            Review Feast <Sparkles className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </div>
  )
}
