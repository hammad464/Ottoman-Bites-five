import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Send, Navigation, Car, Utensils, CheckCircle } from 'lucide-react'
import { businessInfo } from '../data'

export default function LocationPage() {
  return (
    <div className="relative min-h-screen bg-obsidian text-cream pt-24 pb-32">
      {/* Background patterns */}
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
            <MapPin className="w-4 h-4 text-brass" />
            <span className="text-xs font-body tracking-[0.25em] text-brass uppercase font-semibold">
              Visit The Palace
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight mb-4">
            <span className="text-gold-gradient">Find the Feast</span>
          </h1>

          <p className="text-sm sm:text-base text-cream/60 font-body leading-relaxed">
            Visit our branch in Al-Rehman Garden Phase 2, Lahore, or order straight to your doorstep. We are ready to serve you like a Sultan.
          </p>
        </motion.div>

        {/* Map & Main Information Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Map Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-glass-card rounded-3xl p-4 border border-copper/30 shadow-2xl flex flex-col justify-between"
          >
            <div className="relative rounded-2xl overflow-hidden min-h-[420px] lg:min-h-[500px] border border-copper/20 group">
              <iframe
                src={`https://maps.google.com/maps?q=${businessInfo.lat},${businessInfo.lng}&z=15&output=embed`}
                className="w-full h-full min-h-[420px] lg:min-h-[500px] grayscale-[40%] contrast-125 brightness-90 group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                title="Ottoman Bites Location"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 bg-obsidian/90 border border-copper/40 px-4 py-2 rounded-xl backdrop-blur-md shadow-lg flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brass" />
                <span className="text-xs font-serif font-bold text-cream">Ottoman Bites · Lahore</span>
              </div>
            </div>

            <div className="pt-4 px-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-cream/50 font-body">
                Coordinates: {businessInfo.lat}, {businessInfo.lng}
              </p>
              <a
                href={businessInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-copper/20 hover:bg-copper/40 border border-copper/40 text-brass text-xs font-body font-semibold transition-all"
              >
                <Navigation className="w-3.5 h-3.5" /> Open in Google Maps
              </a>
            </div>
          </motion.div>

          {/* Contact & Hours Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Address Card */}
            <div className="bg-glass-card rounded-2xl p-6 border border-copper/20 hover:border-copper/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-copper/15 border border-copper/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brass" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-cream font-semibold mb-1">Palace Address</h3>
                  <p className="text-xs sm:text-sm text-cream/70 font-body leading-relaxed mb-3">
                    {businessInfo.fullAddress}
                  </p>
                  <span className="text-[11px] text-brass/80 font-mono bg-copper/10 px-2.5 py-1 rounded-md border border-copper/20 inline-block">
                    Opposite Head Office, Gate 1
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Order Contacts */}
            <div className="bg-glass-card rounded-2xl p-6 border border-copper/20 hover:border-copper/40 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-copper/15 border border-copper/30 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brass" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-cream font-semibold mb-1">Call & WhatsApp</h3>
                  <p className="text-xs text-cream/50 font-body">Direct order line & inquiries</p>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={`tel:${businessInfo.phone1}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-obsidian/70 border border-copper/20 hover:border-brass/40 text-xs sm:text-sm text-cream hover:text-brass transition-all font-body"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-copper" /> Hotline 1
                  </span>
                  <span className="font-mono font-bold text-brass">{businessInfo.phone1}</span>
                </a>

                <a
                  href={`tel:${businessInfo.phone2}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-obsidian/70 border border-copper/20 hover:border-brass/40 text-xs sm:text-sm text-cream hover:text-brass transition-all font-body"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-copper" /> Hotline 2
                  </span>
                  <span className="font-mono font-bold text-brass">{businessInfo.phone2}</span>
                </a>

                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/50 border border-emerald-600/40 hover:bg-emerald-900/60 text-xs sm:text-sm text-emerald-300 font-body font-semibold transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Send className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Orders
                  </span>
                  <span className="font-mono">{businessInfo.whatsappFormatted}</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-glass-card rounded-2xl p-6 border border-copper/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-copper/15 border border-copper/30 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brass" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-cream font-semibold mb-1">Feast Hours</h3>
                  <p className="text-xs text-cream/50 font-body">Open 7 days a week for late night cravings</p>
                </div>
              </div>

              <div className="space-y-2 border-t border-copper/10 pt-3">
                {businessInfo.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between text-xs font-body py-1 border-b border-copper/5">
                    <span className="text-cream/70 font-medium">{h.day}</span>
                    <span className="text-brass font-mono">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dine-In & Delivery Perks */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-glass-dark rounded-2xl p-6 border border-copper/20 text-center">
            <Utensils className="w-8 h-8 text-brass mx-auto mb-3" />
            <h4 className="font-serif text-base text-cream font-semibold mb-1">Dine-In & Outdoor Seating</h4>
            <p className="text-xs text-cream/50 font-body leading-relaxed">
              Enjoy your freshly prepared burgers and loaded fries in our ambient, family-friendly outdoor garden setup.
            </p>
          </div>

          <div className="bg-glass-dark rounded-2xl p-6 border border-copper/20 text-center">
            <Car className="w-8 h-8 text-brass mx-auto mb-3" />
            <h4 className="font-serif text-base text-cream font-semibold mb-1">Takeaway & Drive-Through</h4>
            <p className="text-xs text-cream/50 font-body leading-relaxed">
              Call ahead or message on WhatsApp to have your hot meal packed and waiting for your arrival.
            </p>
          </div>

          <div className="bg-glass-dark rounded-2xl p-6 border border-copper/20 text-center">
            <CheckCircle className="w-8 h-8 text-brass mx-auto mb-3" />
            <h4 className="font-serif text-base text-cream font-semibold mb-1">Fast Home Delivery</h4>
            <p className="text-xs text-cream/50 font-body leading-relaxed">
              Reliable food delivery across Al-Rehman Garden and adjacent Lahore neighborhoods with thermal packing.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/menu"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-copper to-brass text-obsidian font-body font-bold text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(201,161,74,0.4)] hover:scale-105 transition-all"
          >
            Order Your Meal Online Now
          </Link>
        </div>
      </div>
    </div>
  )
}
