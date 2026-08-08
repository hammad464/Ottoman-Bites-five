import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'
import { businessInfo, heroImages } from '../data'

export default function Location() {
  return (
    <section id="location" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages.arches}
          alt="Ancient stone arches"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/85 to-obsidian" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-body tracking-[0.3em] text-copper uppercase mb-3 block">Visit the Kingdom</span>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold">
            <span className="text-gold-gradient">Find the Feast</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden border border-copper/20 min-h-[400px] group"
          >
            <iframe
              src={`https://maps.google.com/maps?q=${businessInfo.lat},${businessInfo.lng}&z=15&output=embed`}
              className="w-full h-full min-h-[400px] grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-90 transition-all duration-700"
              loading="lazy"
              title="Ottoman Bites location map"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-glass-card rounded-2xl p-6 border border-copper/15">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-copper/10 border border-copper/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brass" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-cream mb-1">Address</h3>
                  <p className="text-sm text-cream/55 font-body leading-relaxed">{businessInfo.address}</p>
                  <a
                    href={businessInfo.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs text-brass hover:text-copper-light transition-colors font-body"
                  >
                    Get directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-glass-card rounded-2xl p-6 border border-copper/15">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-copper/10 border border-copper/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brass" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-cream mb-1">Call to Order</h3>
                  <a href={`tel:${businessInfo.phone1}`} className="block text-sm text-cream/60 hover:text-brass transition-colors font-body">{businessInfo.phone1}</a>
                  <a href={`tel:${businessInfo.phone2}`} className="block text-sm text-cream/60 hover:text-brass transition-colors font-body">{businessInfo.phone2}</a>
                </div>
              </div>
            </div>

            <div className="bg-glass-card rounded-2xl p-6 border border-copper/15">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-copper/10 border border-copper/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brass" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-cream mb-3">Opening Hours</h3>
                  <div className="space-y-1.5">
                    {businessInfo.hours.map((h) => (
                      <div key={h.day} className="flex items-center justify-between text-sm font-body">
                        <span className="text-cream/50">{h.day}</span>
                        <span className="text-cream/70">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
