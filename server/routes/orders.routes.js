import { Router } from 'express'

const router = Router()
const ordersStore = []

// POST /api/orders
router.post('/', (req, res) => {
  const { customerName, address, instructions, items } = req.body

  if (!customerName || !address) {
    return res.status(400).json({
      success: false,
      error: 'Customer name and delivery address are required'
    })
  }

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      success: false,
      error: 'Cart items cannot be empty'
    })
  }

  const subtotal = items.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
  const deliveryFee = 0 // Included or calculated
  const grandTotal = subtotal + deliveryFee

  const orderId = `OB-${Date.now().toString().slice(-6)}`
  const order = {
    id: orderId,
    customerName: customerName.trim(),
    address: address.trim(),
    instructions: (instructions || '').trim(),
    items,
    subtotal,
    deliveryFee,
    grandTotal,
    status: 'received',
    createdAt: new Date().toISOString()
  }

  ordersStore.unshift(order)

  // WhatsApp order text formatting
  let message = `👑 *OTTOMAN BITES - NEW ORDER (${orderId})*\n\n`
  message += `👤 *Customer:* ${order.customerName}\n`
  message += `📍 *Address:* ${order.address}\n`
  if (order.instructions) {
    message += `📝 *Notes:* ${order.instructions}\n`
  }
  message += `\n*─── ORDER ITEMS ───*\n`
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.name} x${item.quantity || 1} — Rs. ${(item.price * (item.quantity || 1)).toLocaleString()}\n`
  })
  message += `\n*💰 TOTAL AMOUNT: Rs. ${grandTotal.toLocaleString()}*\n`
  message += `\n⚡ *Order Status:* Ready for imperial dispatch!`

  const whatsappPhone = '923132707666'
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`

  res.status(201).json({
    success: true,
    message: 'Order created successfully',
    data: {
      order,
      whatsappUrl
    }
  })
})

// GET /api/orders
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: ordersStore.length,
    data: ordersStore
  })
})

export default router
