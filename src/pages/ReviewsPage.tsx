import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Star, Quote, MapPin, CheckCircle, ExternalLink, ThumbsUp, Sparkles, MessageSquare } from 'lucide-react'
import { reviews, businessInfo } from '../data'

function timeAgo(dateStr: string): string {
  try {
    const date = new Date(dateStr)
    const now = new Date('2026-08-06')
    const diffMs = now.getTime() - date.getTime()
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    if (days < 1) return 'Today'
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`
    if (days < 14) return '1 week ago'
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`
    return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? 's' : ''} ago`
  } catch {
    return 'Recently'
  }
}

export default function ReviewsPage() {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all')

  const filteredReviews = reviews.filter((r) => {
    if (filterRating === 'all') return true
    return r.stars === filterRating
  })

  return (
    <div className="relative min-h-screen bg-obsidian text-cream pt-24 pb-32">
      {/* Ambience patterns */}
      <div className="fixed inset-0 copper-texture opacity-60 pointer-events-none" />
      <div className="fixed inset-0 ottoman-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14 pt-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-copper/40 bg-glass-dark mb-4 shadow-[0_0_20px_rgba(184,115,51,0.2)]">
            <Sparkles className="w-4 h-4 text-brass" />
            <span className="text-xs font-body tracking-[0.25em] text-brass uppercase font-semibold">
              Guest Praise & Imperial Reviews
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight mb-4">
            <span className="text-gold-gradient">Praise of the Empire</span>
          </h1>

          <p className="text-sm sm:text-base text-cream/60 font-body leading-relaxed">
            Real testimonies from food lovers across Lahore who have tasted the Sultan's smashed beef burgers, spicy chicken fillets, and authentic doner wraps.
          </p>
        </motion.div>

        {/* Rating Scorecard Overview */}
        <div className="bg-glass-card rounded-3xl p-8 border border-copper/30 shadow-[0_0_40px_rgba(184,115,51,0.15)] mb-14 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left Big Score */}
            <div className="text-center md:border-r border-copper/20 md:pr-6">
              <span className="font-serif text-6xl sm:text-7xl font-bold text-gold-gradient block">
                {businessInfo.rating}
              </span>
              <div className="flex justify-center gap-1 my-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-brass text-brass" />
                ))}
              </div>
              <p className="text-xs text-cream/50 font-body">
                Based on verified Google Reviews
              </p>
            </div>

            {/* Middle Feature Highlights */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-cream/80 font-body">100% Australian Smashed Beef</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-cream/80 font-body">Signature BBQ & Twin Sauces</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-cream/80 font-body">Family Dining & Outdoor Vibe</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm text-cream/80 font-body">Hot, Fresh Direct Delivery</span>
              </div>
            </div>

            {/* Right Action */}
            <div className="text-center flex flex-col items-center justify-center gap-3 md:border-l border-copper/20 md:pl-6">
              <p className="text-xs text-cream/60 font-body">
                Dined with us recently?
              </p>
              <a
                href={businessInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-copper/30 to-brass/25 hover:from-copper/50 hover:to-brass/40 border border-copper/40 text-brass text-xs font-body font-semibold transition-all shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Write a Google Review
              </a>
            </div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="text-xs font-body text-cream/40 uppercase tracking-wider">Filter:</span>
          <button
            onClick={() => setFilterRating('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-body transition-all border ${
              filterRating === 'all'
                ? 'bg-copper/30 border-brass text-brass font-semibold'
                : 'bg-glass-dark border-copper/20 text-cream/50 hover:text-cream'
            }`}
          >
            All Reviews ({reviews.length})
          </button>
          <button
            onClick={() => setFilterRating(5)}
            className={`px-4 py-1.5 rounded-full text-xs font-body transition-all border flex items-center gap-1 ${
              filterRating === 5
                ? 'bg-copper/30 border-brass text-brass font-semibold'
                : 'bg-glass-dark border-copper/20 text-cream/50 hover:text-cream'
            }`}
          >
            <Star className="w-3 h-3 fill-brass text-brass" /> 5 Stars Only
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredReviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="bg-glass-card rounded-2xl p-6 border border-copper/20 hover:border-copper/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${s <= review.stars ? 'fill-brass text-brass' : 'text-cream/15'}`}
                      />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-copper/20 group-hover:text-copper/40 transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-cream/75 font-body leading-relaxed mb-4">
                  "{review.textTranslated || review.text}"
                </p>

                {review.responseFromOwnerText && (
                  <div className="mb-4 pl-3 py-1.5 border-l-2 border-copper/30 bg-espresso/40 rounded-r-lg">
                    <p className="text-[11px] text-brass/80 font-body">
                      <span className="text-copper font-semibold">Owner Reply: </span>
                      {review.responseFromOwnerText}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-copper/10 flex items-center gap-3">
                <img
                  src={review.reviewerPhotoUrl}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-copper/25"
                  loading="lazy"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm text-cream font-medium truncate">{review.name}</h4>
                  <div className="flex items-center gap-1.5">
                    {review.isLocalGuide && (
                      <span className="text-[10px] text-brass/80 font-body font-semibold">Local Guide</span>
                    )}
                    <span className="text-[10px] text-cream/30 font-body">
                      · {timeAgo(review.publishedAtDate)}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to Menu */}
        <div className="text-center bg-glass-dark rounded-3xl p-8 border border-copper/25 max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl text-cream font-bold mb-2">Taste What Everyone Is Talking About</h3>
          <p className="text-xs sm:text-sm text-cream/60 font-body mb-6">
            Join hundreds of satisfied food lovers in Lahore and order your imperial feast right now.
          </p>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-copper to-brass text-obsidian font-body font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(201,161,74,0.4)] hover:scale-105 transition-all"
          >
            Summon The Menu
          </Link>
        </div>
      </div>
    </div>
  )
}
