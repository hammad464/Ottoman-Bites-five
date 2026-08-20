import { menu as fallbackMenu, reviews as fallbackReviews, businessInfo as fallbackBusinessInfo, type MenuCategory, type MenuItem, type Review } from '../data'

export interface ApiResponse<T> {
  success: boolean
  data: T
  error?: string
  count?: number
  stats?: {
    averageRating: number
    totalReviews: number
    fiveStarCount: number
  }
}

export interface OrderItem {
  id: number
  name: string
  price: number
  quantity: number
  category?: string
  badge?: string
}

export interface OrderPayload {
  customerName: string
  address: string
  instructions?: string
  items: OrderItem[]
}

export interface OrderResult {
  order: {
    id: string
    customerName: string
    address: string
    instructions: string
    items: OrderItem[]
    subtotal: number
    deliveryFee: number
    grandTotal: number
    status: string
    createdAt: string
  }
  whatsappUrl: string
}

export interface DesignTokensResponse {
  system: {
    name: string
    version: string
    description: string
    brand: {
      name: string
      tagline: string
      origin: string
    }
  }
  tokens: {
    primitive: Record<string, any>
    semantic: Record<string, any>
    components: Record<string, any>
  }
}

const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || (typeof window !== 'undefined' ? '/api' : 'http://localhost:5000/api')

// Helper for safe fetch with instant offline fallback
async function fetchWithFallback<T>(url: string, fallbackData: T, options?: RequestInit): Promise<T> {
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    })

    if (!res.ok) {
      console.warn(`[API] ${url} returned ${res.status}, using static fallback`)
      return fallbackData
    }

    const json = await res.json()
    return json.data !== undefined ? json.data : json
  } catch (err) {
    // Backend server offline or request failed; graceful fallback
    return fallbackData
  }
}

export const imperialApi = {
  // 1. Health & Server Status
  async getHealth(): Promise<{ status: string; uptimeSeconds: number; version: string }> {
    try {
      const res = await fetch(`${API_BASE_URL}/health`)
      if (res.ok) return await res.json()
      return { status: 'offline-mode', uptimeSeconds: 0, version: '2.0.0-fallback' }
    } catch {
      return { status: 'offline-mode', uptimeSeconds: 0, version: '2.0.0-fallback' }
    }
  },

  // 2. Menu Endpoints
  async getMenu(category?: string, search?: string): Promise<MenuCategory[]> {
    let url = `${API_BASE_URL}/menu`
    const params = new URLSearchParams()
    if (category && category !== 'all') params.append('category', category)
    if (search && search.trim()) params.append('search', search.trim())
    if (params.toString()) url += `?${params.toString()}`

    return fetchWithFallback<MenuCategory[]>(url, fallbackMenu)
  },

  async getCategories(): Promise<Array<{ id: string; name: string; tagline: string; itemCount: number }>> {
    const fallbackCategories = fallbackMenu.map((c) => ({
      id: c.id,
      name: c.name,
      tagline: c.tagline,
      itemCount: c.items.length,
    }))
    return fetchWithFallback(`${API_BASE_URL}/menu/categories`, fallbackCategories)
  },

  async getMenuItem(id: number): Promise<MenuItem | null> {
    const allFallbackItems = fallbackMenu.flatMap((c) => c.items)
    const fallbackItem = allFallbackItems.find((i) => i.id === id) || null
    return fetchWithFallback<MenuItem | null>(`${API_BASE_URL}/menu/item/${id}`, fallbackItem)
  },

  async getFeaturedMenu(): Promise<{ beef: MenuItem[]; chicken: MenuItem[]; periPeri: MenuItem[]; highlights: MenuItem[] }> {
    const beef = fallbackMenu.find((c) => c.id === 'beef-burgers')?.items.slice(0, 3) || []
    const chicken = fallbackMenu.find((c) => c.id === 'chicken-burgers')?.items.slice(0, 3) || []
    const periPeri = fallbackMenu.find((c) => c.id === 'peri-peri')?.items.slice(0, 2) || []
    const fallbackData = {
      beef,
      chicken,
      periPeri,
      highlights: [...beef.slice(0, 2), ...chicken.slice(0, 2), ...periPeri.slice(0, 2)],
    }
    return fetchWithFallback(`${API_BASE_URL}/menu/featured`, fallbackData)
  },

  // 3. Reviews Endpoints
  async getReviews(): Promise<Review[]> {
    return fetchWithFallback<Review[]>(`${API_BASE_URL}/reviews`, fallbackReviews)
  },

  async submitReview(review: { name: string; text: string; stars: number }): Promise<{ success: boolean; data: Review }> {
    try {
      const res = await fetch(`${API_BASE_URL}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
      })
      if (res.ok) {
        return await res.json()
      }
    } catch {
      // ignore
    }

    const fallbackCreated: Review = {
      name: review.name,
      text: review.text,
      textTranslated: null,
      stars: review.stars,
      publishedAtDate: new Date().toISOString(),
      isLocalGuide: false,
      reviewerNumberOfReviews: 1,
      reviewerPhotoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
      responseFromOwnerText: 'Thank you for dining with the Sultan!',
    }

    return { success: true, data: fallbackCreated }
  },

  // 4. Business Info Endpoint
  async getBusinessInfo(): Promise<typeof fallbackBusinessInfo> {
    return fetchWithFallback(`${API_BASE_URL}/info`, fallbackBusinessInfo)
  },

  // 5. Orders & WhatsApp Checkout
  async createOrder(payload: OrderPayload): Promise<OrderResult> {
    const subtotal = payload.items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    const orderId = `OB-${Date.now().toString().slice(-6)}`

    // Fallback WhatsApp message generator
    let message = `👑 *OTTOMAN BITES - NEW ORDER (${orderId})*\n\n`
    message += `👤 *Customer:* ${payload.customerName}\n`
    message += `📍 *Address:* ${payload.address}\n`
    if (payload.instructions) {
      message += `📝 *Notes:* ${payload.instructions}\n`
    }
    message += `\n*─── ORDER ITEMS ───*\n`
    payload.items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x${item.quantity || 1} — Rs. ${(item.price * (item.quantity || 1)).toLocaleString()}\n`
    })
    message += `\n*💰 TOTAL AMOUNT: Rs. ${subtotal.toLocaleString()}*\n`
    message += `\n⚡ *Order Status:* Ready for imperial dispatch!`

    const fallbackUrl = `https://wa.me/923132707666?text=${encodeURIComponent(message)}`

    const fallbackResult: OrderResult = {
      order: {
        id: orderId,
        customerName: payload.customerName,
        address: payload.address,
        instructions: payload.instructions || '',
        items: payload.items,
        subtotal,
        deliveryFee: 0,
        grandTotal: subtotal,
        status: 'received',
        createdAt: new Date().toISOString(),
      },
      whatsappUrl: fallbackUrl,
    }

    try {
      const res = await fetch(`${API_BASE_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        const json = await res.json()
        return json.data || fallbackResult
      }
    } catch {
      // offline fallback
    }

    return fallbackResult
  },

  // 6. Design System Endpoint
  async getDesignSystem(): Promise<DesignTokensResponse | null> {
    try {
      const res = await fetch(`${API_BASE_URL}/design-system`)
      if (res.ok) {
        const json = await res.json()
        return json.data
      }
    } catch {
      // fallback handled by page static tokens
    }
    return null
  },
}
