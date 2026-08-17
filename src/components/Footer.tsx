import { Link } from 'react-router-dom'
import { Instagram, Facebook, Phone, MapPin, Send, Flame, Sparkles } from 'lucide-react'
import { businessInfo } from '../data'

export default function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-copper/20 overflow-hidden">
      <div className="absolute inset-0 ottoman-pattern opacity-15" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-copper/20 border border-copper/40 flex items-center justify-center text-brass font-serif font-bold text-xs">
                OB
              </div>
              <h3 className="font-serif text-2xl text-gold-gradient font-bold">Ottoman Bites</h3>
            </div>
            <p className="text-xs sm:text-sm text-cream/50 font-body leading-relaxed max-w-xs">
              Legendary beef & chicken burgers forged in fire, steeped in history. An imperial feast worthy of a Sultan.
            </p>
            <div className="flex items-center gap-2 text-xs text-brass font-body">
              <Flame className="w-3.5 h-3.5 text-ember" />
              <span>Eat Like A Sultan</span>
            </div>
          </div>

          {/* Page Links Col */}
          <div>
            <h4 className="font-serif text-sm text-brass mb-4 tracking-wider uppercase font-semibold">
              The Empire Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-body">
              <li>
                <Link to="/" className="text-cream/60 hover:text-brass transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-cream/60 hover:text-brass transition-colors flex items-center gap-1.5">
                  The Complete Feast (Menu)
                  <span className="px-1.5 py-0.5 rounded bg-copper/20 text-[10px] text-brass font-mono">Updated</span>
                </Link>
              </li>
              <li>
                <Link to="/lore" className="text-cream/60 hover:text-brass transition-colors">
                  The Ottoman Lore & Spices
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-cream/60 hover:text-brass transition-colors">
                  Imperial Praise (4.9★)
                </Link>
              </li>
              <li>
                <Link to="/location" className="text-cream/60 hover:text-brass transition-colors">
                  Find Our Kitchen & Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-serif text-sm text-brass mb-4 tracking-wider uppercase font-semibold">
              Call & WhatsApp Orders
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm font-body">
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Send className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>WhatsApp: {businessInfo.whatsappFormatted}</span>
              </a>
              <a
                href={`tel:${businessInfo.phone1}`}
                className="flex items-center gap-2 text-cream/60 hover:text-brass transition-colors"
              >
                <Phone className="w-4 h-4 text-copper shrink-0" /> {businessInfo.phone1}
              </a>
              <a
                href={`tel:${businessInfo.phone2}`}
                className="flex items-center gap-2 text-cream/60 hover:text-brass transition-colors"
              >
                <Phone className="w-4 h-4 text-copper shrink-0" /> {businessInfo.phone2}
              </a>
              <p className="flex items-start gap-2 text-cream/50 pt-1 leading-relaxed">
                <MapPin className="w-4 h-4 text-copper shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </p>
            </div>
          </div>

          {/* Socials & Hours */}
          <div>
            <h4 className="font-serif text-sm text-brass mb-4 tracking-wider uppercase font-semibold">
              Follow The Empire
            </h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://instagram.com/ottomanbites"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-glass-dark border border-copper/30 flex items-center justify-center text-cream/70 hover:text-brass hover:border-brass hover:shadow-[0_0_15px_rgba(184,115,51,0.3)] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/ottomanbites"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-glass-dark border border-copper/30 flex items-center justify-center text-cream/70 hover:text-brass hover:border-brass hover:shadow-[0_0_15px_rgba(184,115,51,0.3)] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-glass-dark border border-emerald-500/40 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
                aria-label="WhatsApp"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-cream/40 font-body leading-relaxed">
              Open 7 days a week: 6:00 PM – 2:30 AM (Monday from 6:00 AM)
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-copper/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40 font-body">
            © {new Date().getFullYear()} Ottoman Bites. All rights reserved.
          </p>
          <p className="text-xs text-cream/30 font-body flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-copper/60" /> Crafted with fire, spice & imperial passion.
          </p>
        </div>
      </div>
    </footer>
  )
}
