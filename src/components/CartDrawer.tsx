import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, ShoppingBag, Send, Phone, Sparkles, AlertCircle, User, MapPin } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { businessInfo } from '../data'

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems, generateWhatsAppOrderUrl } = useCart()
  const [customerName, setCustomerName] = useState('')
  const [address, setAddress] = useState('')
  const [instructions, setInstructions] = useState('')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [touched, setTouched] = useState({ name: false, address: false })

  const isNameEmpty = !customerName.trim()
  const isAddressEmpty = !address.trim()

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return

    setTouched({ name: true, address: true })

    if (isNameEmpty || isAddressEmpty) {
      if (isNameEmpty && isAddressEmpty) {
        setErrorMessage('Please enter both your Name and Delivery Address to proceed.')
      } else if (isNameEmpty) {
        setErrorMessage('Please enter your Name to proceed.')
      } else {
        setErrorMessage('Please enter your Delivery Address to proceed.')
      }
      return
    }

    setErrorMessage(null)
    const url = generateWhatsAppOrderUrl(customerName.trim(), address.trim(), instructions.trim())
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
          />

          {/* Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[460px] bg-gradient-to-b from-[#18110b] via-[#100a06] to-[#0a0705] border-l border-copper/30 shadow-[0_0_50px_rgba(0,0,0,0.9)] z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-copper/20 flex items-center justify-between bg-glass-dark">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-copper/30 to-brass/10 border border-copper/40 flex items-center justify-center shadow-[0_0_15px_rgba(184,115,51,0.3)]">
                  <ShoppingBag className="w-5 h-5 text-brass" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gold-gradient font-bold">The Sultan's Tray</h3>
                  <p className="text-xs text-cream/50 font-body">
                    {totalItems} item{totalItems !== 1 ? 's' : ''} in your royal feast
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-xs text-cream/40 hover:text-red-400 px-2.5 py-1 rounded-md border border-copper/10 hover:border-red-500/30 transition-all font-body"
                    title="Clear Feast"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-9 h-9 rounded-full bg-obsidian/80 border border-copper/20 flex items-center justify-center text-cream/70 hover:text-brass hover:border-copper/60 transition-all"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content / Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide" data-lenis-prevent>
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-copper/10 border border-copper/20 flex items-center justify-center mb-2">
                    <Sparkles className="w-9 h-9 text-copper/60" />
                  </div>
                  <h4 className="font-serif text-xl text-cream/90 font-medium">Your Royal Tray is Empty</h4>
                  <p className="text-sm text-cream/50 font-body max-w-xs leading-relaxed">
                    Explore our imperial burgers, fiery wraps, peri-peri chicken, and crafted shakes to summon your feast.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-copper/20 to-brass/20 border border-copper/40 text-brass text-sm font-body hover:shadow-[0_0_20px_rgba(184,115,51,0.3)] transition-all"
                  >
                    Explore Menu
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {cart.map((cartItem) => (
                      <div
                        key={cartItem.item.id}
                        className="bg-glass-card rounded-xl p-4 border border-copper/15 hover:border-copper/30 transition-all duration-300 flex items-center justify-between gap-3"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            {cartItem.item.num && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-copper/20 text-brass font-mono">
                                #{cartItem.item.num}
                              </span>
                            )}
                            <h4 className="font-serif text-sm font-medium text-cream truncate">
                              {cartItem.item.name}
                            </h4>
                          </div>
                          <p className="text-xs text-brass font-body font-semibold mt-1">
                            Rs {cartItem.item.price * cartItem.quantity}
                            {cartItem.quantity > 1 && (
                              <span className="text-[10px] text-cream/40 font-normal ml-1.5">
                                (Rs {cartItem.item.price} each)
                              </span>
                            )}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-obsidian/80 px-2 py-1 rounded-lg border border-copper/20 shrink-0">
                          <button
                            onClick={() => updateQuantity(cartItem.item.id, -1)}
                            className="text-cream/70 hover:text-brass p-0.5"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-mono font-bold text-cream px-1.5 min-w-[20px] text-center">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(cartItem.item.id, 1)}
                            className="text-cream/70 hover:text-brass p-0.5"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(cartItem.item.id)}
                          className="text-cream/30 hover:text-red-400 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Customer Information for direct order (Mandatory Name & Address) */}
                  <div className="pt-4 border-t border-copper/15 space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-wider text-brass font-serif font-semibold">
                        Delivery Details
                      </p>
                      <span className="text-[10px] text-amber-400/90 font-mono">
                        * Name & Address required
                      </span>
                    </div>

                    {/* Name Input */}
                    <div>
                      <label className="block text-[11px] text-cream/70 font-body mb-1 flex items-center gap-1">
                        <User className="w-3 h-3 text-copper" />
                        Your Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Hammad Ali"
                        value={customerName}
                        onChange={(e) => {
                          setCustomerName(e.target.value)
                          if (errorMessage) setErrorMessage(null)
                        }}
                        onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-obsidian/70 border text-xs text-cream focus:outline-none placeholder:text-cream/30 font-body transition-all ${
                          touched.name && isNameEmpty
                            ? 'border-red-500/80 bg-red-950/20 focus:border-red-400 shadow-[0_0_10px_rgba(239,68,68,0.2)]'
                            : 'border-copper/25 focus:border-brass focus:shadow-[0_0_15px_rgba(184,115,51,0.2)]'
                        }`}
                      />
                      {touched.name && isNameEmpty && (
                        <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> Name is required for order confirmation
                        </p>
                      )}
                    </div>

                    {/* Address Input */}
                    <div>
                      <label className="block text-[11px] text-cream/70 font-body mb-1 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-copper" />
                        Delivery Address / Table # <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. House #12, Block B, Al-Rehman Garden Phase 2"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value)
                          if (errorMessage) setErrorMessage(null)
                        }}
                        onBlur={() => setTouched((prev) => ({ ...prev, address: true }))}
                        className={`w-full px-3.5 py-2.5 rounded-lg bg-obsidian/70 border text-xs text-cream focus:outline-none placeholder:text-cream/30 font-body transition-all ${
                          touched.address && isAddressEmpty
                            ? 'border-red-500/80 bg-red-950/20 focus:border-red-400 shadow-[0_0_10px_rgba(239,68,68,0.2)]'
                            : 'border-copper/25 focus:border-brass focus:shadow-[0_0_15px_rgba(184,115,51,0.2)]'
                        }`}
                      />
                      {touched.address && isAddressEmpty && (
                        <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> Address is required for delivery
                        </p>
                      )}
                    </div>

                    {/* Special Instructions (Optional) */}
                    <div>
                      <label className="block text-[11px] text-cream/50 font-body mb-1">
                        Special Instructions (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="e.g. Extra spicy, less sauce, ring doorbell on arrival..."
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-lg bg-obsidian/60 border border-copper/20 text-xs text-cream focus:border-brass focus:outline-none placeholder:text-cream/30 font-body resize-none"
                      />
                    </div>

                    {/* Top Error Alert Banner if validation fails */}
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 rounded-lg bg-red-950/50 border border-red-500/40 text-red-300 text-xs font-body flex items-start gap-2"
                      >
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Footer Summary & WhatsApp Order CTA */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-copper/20 bg-glass-dark space-y-4">
                <div className="flex items-center justify-between text-sm font-body">
                  <span className="text-cream/60">Subtotal:</span>
                  <span className="font-serif text-xl font-bold text-brass">Rs {totalPrice.toLocaleString()}</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:to-green-600 text-white font-body text-sm font-semibold flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    Order via WhatsApp ({businessInfo.whatsappFormatted})
                  </button>

                  <a
                    href={`tel:${businessInfo.phone1}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-obsidian/80 border border-copper/30 hover:border-brass/60 text-brass font-body text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Order Hotline: {businessInfo.phone1}
                  </a>
                </div>

                <p className="text-[11px] text-center text-cream/40 font-body">
                  ⚡ Free direct confirmation via WhatsApp · Freshly prepared for you
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
