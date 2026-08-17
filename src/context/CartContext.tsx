import React, { createContext, useContext, useState, useEffect } from 'react'
import { MenuItem, businessInfo } from '../data'

export interface CartItem {
  item: MenuItem
  quantity: number
  selectedExtras?: { name: string; price: number }[]
  specialInstructions?: string
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: MenuItem, quantity?: number, extras?: { name: string; price: number }[]) => void
  removeFromCart: (itemId: number) => void
  updateQuantity: (itemId: number, delta: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  generateWhatsAppOrderUrl: (customerName?: string, address?: string, instructions?: string) => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ottoman_bites_cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem('ottoman_bites_cart', JSON.stringify(cart))
    } catch {
      // ignore
    }
  }, [cart])

  const addToCart = (item: MenuItem, quantity = 1, extras: { name: string; price: number }[] = []) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.item.id === item.id)
      if (existingIndex > -1) {
        const next = [...prev]
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        }
        return next
      }
      return [...prev, { item, quantity, selectedExtras: extras }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (itemId: number) => {
    setCart((prev) => prev.filter((i) => i.item.id !== itemId))
  }

  const updateQuantity = (itemId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.item.id === itemId) {
            const nextQty = i.quantity + delta
            return nextQty > 0 ? { ...i, quantity: nextQty } : null
          }
          return i
        })
        .filter(Boolean) as CartItem[]
    )
  }

  const clearCart = () => setCart([])

  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0)
  
  const totalPrice = cart.reduce((acc, curr) => {
    const extrasTotal = curr.selectedExtras?.reduce((eAcc, e) => eAcc + e.price, 0) || 0
    return acc + (curr.item.price + extrasTotal) * curr.quantity
  }, 0)

  const generateWhatsAppOrderUrl = (customerName = '', address = '', instructions = '') => {
    let text = `👑 *SULTAN'S FEAST ORDER — OTTOMAN BITES* 👑\n\n`
    text += `━━━━━━━━━━━━━━━━━━━━━\n`
    cart.forEach((c, idx) => {
      const itemNum = c.item.num ? `[#${c.item.num}] ` : ''
      text += `*${idx + 1}. ${itemNum}${c.item.name}* (x${c.quantity})\n`
      text += `    Price: Rs ${c.item.price * c.quantity}\n`
      if (c.selectedExtras && c.selectedExtras.length > 0) {
        text += `    + Extras: ${c.selectedExtras.map((e) => `${e.name} (+Rs ${e.price})`).join(', ')}\n`
      }
    })
    text += `━━━━━━━━━━━━━━━━━━━━━\n`
    text += `*TOTAL AMOUNT: Rs ${totalPrice.toLocaleString()}*\n\n`
    
    if (customerName.trim()) {
      text += `👤 *Customer:* ${customerName.trim()}\n`
    }
    if (address.trim()) {
      text += `📍 *Delivery Address:* ${address.trim()}\n`
    }
    if (instructions.trim()) {
      text += `📝 *Notes:* ${instructions.trim()}\n`
    }
    text += `\nPlease confirm my order and share estimated delivery time. Thank you!`

    const encoded = encodeURIComponent(text)
    const phoneNum = businessInfo.whatsapp.replace(/[^0-9]/g, '')
    return `https://wa.me/${phoneNum}?text=${encoded}`
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
