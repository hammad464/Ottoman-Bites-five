import { motion } from 'framer-motion'
import { Star, Quote, MapPin } from 'lucide-react'
import { reviews, businessInfo } from '../data'

function timeAgo(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date('2026-08-06')
  const diffMs = now.getTime() - date.getTime()
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  if (days < 1) return 'Today'
  if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`
  if (days < 14) return 'a week ago'
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`
  return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? 's' : ''} ago`
}

export default function Reviews() {
  const featured = reviews.filter((r) => r.text).slice(0, 9)

  return (
    <section id="reviews" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 copper-texture" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-body tracking-[0.3em] text-copper uppercase mb-3 block">Words from the Guests</span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold mb-6">
            <span className="text-gold-gradient">Praise of the Empire</span>
          </h2>

          <div className="inline-flex flex-col items-center gap-2 px-8 py-5 rounded-2xl bg-glass-dark border border-copper/20">
            <div className="flex items-center gap-3">
              <span className="font-serif text-5xl text-brass font-bold">{businessInfo.rating}</span>
              <div className="flex flex-col gap-1">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${s <= Math.round(businessInfo.rating) ? 'fill-brass text-brass' : 'text-cream/20'}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-cream/50 font-body">{businessInfo.reviewsCount} Google reviews</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="relative bg-glass-card rounded-2xl p-6 border border-copper/15 hover:border-copper/30 transition-all duration-500 group"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-copper/10 group-hover:text-copper/20 transition-colors" />

              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-3.5 h-3.5 ${s <= review.stars ? 'fill-brass text-brass' : 'text-cream/15'}`}
                  />
                ))}
              </div>

              <p className="text-sm text-cream/65 font-body leading-relaxed mb-4 line-clamp-6">
                {review.textTranslated || review.text}
              </p>

              {review.responseFromOwnerText && (
                <div className="mb-4 pl-3 border-l-2 border-copper/20">
                  <p className="text-xs text-brass/60 font-body">
                    <span className="text-copper/80 font-medium">Owner: </span>
                    {review.responseFromOwnerText}
                  </p>
                </div>
              )}

              <div className="flex items-center gap-3 pt-4 border-t border-copper/10">
                <img
                  src={review.reviewerPhotoUrl}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-copper/20"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-cream/80 font-body font-medium truncate">{review.name}</p>
                  <div className="flex items-center gap-1.5">
                    {review.isLocalGuide && (
                      <span className="text-[10px] text-brass/60 font-body">Local Guide</span>
                    )}
                    <span className="text-[10px] text-cream/30 font-body">· {timeAgo(review.publishedAtDate)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href={businessInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-copper/30 text-sm font-body text-brass hover:bg-copper/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(184,115,51,0.2)]"
          >
            <MapPin className="w-4 h-4" />
            Read all reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}
