import { Instagram, Facebook, Phone, MapPin } from 'lucide-react'
import { businessInfo } from '../data'

export default function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-copper/15 overflow-hidden">
      <div className="absolute inset-0 ottoman-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-serif text-2xl text-gold-gradient mb-3">Ottoman Bites</h3>
            <p className="text-sm text-cream/40 font-body leading-relaxed max-w-xs">
              Legendary beef burgers forged in fire, steeped in history. A feast worthy of a Sultan.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm text-brass mb-4 tracking-wide">Contact</h4>
            <div className="space-y-2">
              <a href={`tel:${businessInfo.phone1}`} className="flex items-center gap-2 text-sm text-cream/50 hover:text-brass transition-colors font-body">
                <Phone className="w-4 h-4 text-copper/60" /> {businessInfo.phone1}
              </a>
              <a href={`tel:${businessInfo.phone2}`} className="flex items-center gap-2 text-sm text-cream/50 hover:text-brass transition-colors font-body">
                <Phone className="w-4 h-4 text-copper/60" /> {businessInfo.phone2}
              </a>
              <p className="flex items-start gap-2 text-sm text-cream/50 font-body">
                <MapPin className="w-4 h-4 text-copper/60 shrink-0 mt-0.5" /> {businessInfo.fullAddress}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-sm text-brass mb-4 tracking-wide">Follow the Empire</h4>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/ottomanbites"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-glass-dark border border-copper/20 flex items-center justify-center text-cream/60 hover:text-brass hover:border-copper/50 hover:shadow-[0_0_15px_rgba(184,115,51,0.2)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/ottomanbites"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-glass-dark border border-copper/20 flex items-center justify-center text-cream/60 hover:text-brass hover:border-copper/50 hover:shadow-[0_0_15px_rgba(184,115,51,0.2)] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-cream/30 font-body">@ottomanbites</p>
          </div>
        </div>

        <div className="pt-8 border-t border-copper/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/30 font-body">
            © {new Date().getFullYear()} Ottoman Bites. All rights reserved.
          </p>
          <p className="text-xs text-cream/20 font-body">
            Crafted with fire and spice.
          </p>
        </div>
      </div>
    </footer>
  )
}
