import http from 'http'
import app from '../server/index.js'

async function runLocalTests() {
  console.log('🧪 ==========================================')
  console.log('🧪 STARTING COMPREHENSIVE LOCAL API TEST SUITE')
  console.log('🧪 ==========================================\n')

  const server = http.createServer(app)
  const TEST_PORT = 5099

  await new Promise((resolve) => server.listen(TEST_PORT, '127.0.0.1', resolve))
  console.log(`✅ Test server running on http://127.0.0.1:${TEST_PORT}\n`)

  const BASE = `http://127.0.0.1:${TEST_PORT}`
  let passed = 0
  let failed = 0

  async function test(name, fn) {
    try {
      await fn()
      console.log(`  ✅ PASS: ${name}`)
      passed++
    } catch (err) {
      console.error(`  ❌ FAIL: ${name}`)
      console.error(`     Error: ${err.message}`)
      failed++
    }
  }

  // 1. Root and /api
  await test('GET / returns status online', async () => {
    const res = await fetch(`${BASE}/`)
    const data = await res.json()
    if (res.status !== 200 || data.status !== 'online') throw new Error(`Expected 200 online, got ${res.status}`)
  })

  await test('GET /api returns available endpoints', async () => {
    const res = await fetch(`${BASE}/api`)
    const data = await res.json()
    if (!data.endpoints || !data.endpoints.menu) throw new Error('Missing endpoints in /api')
  })

  // 2. Health check
  await test('GET /api/health returns system info', async () => {
    const res = await fetch(`${BASE}/api/health`)
    const data = await res.json()
    if (data.status !== 'online' || typeof data.uptimeSeconds !== 'number') throw new Error('Invalid health payload')
  })

  // 3. Menu endpoints
  await test('GET /api/menu returns all 57 items across categories', async () => {
    const res = await fetch(`${BASE}/api/menu`)
    const data = await res.json()
    if (!data.success || data.count !== 57 || !Array.isArray(data.data)) {
      throw new Error(`Expected 57 items, got count=${data.count}`)
    }
  })

  await test('GET /api/menu?category=beef-burgers filters category', async () => {
    const res = await fetch(`${BASE}/api/menu?category=beef-burgers`)
    const data = await res.json()
    if (data.data.length !== 1 || data.data[0].id !== 'beef-burgers') {
      throw new Error('Category filter failed')
    }
  })

  await test('GET /api/menu?search=sultan searches item text', async () => {
    const res = await fetch(`${BASE}/api/menu?search=sultan`)
    const data = await res.json()
    if (data.count < 1) throw new Error('Search query returned 0 items')
  })

  await test('GET /api/menu/categories returns category list', async () => {
    const res = await fetch(`${BASE}/api/menu/categories`)
    const data = await res.json()
    if (!Array.isArray(data.data) || data.data.length === 0) throw new Error('Empty categories list')
  })

  await test('GET /api/menu/featured returns beef, chicken, peri-peri highlights', async () => {
    const res = await fetch(`${BASE}/api/menu/featured`)
    const data = await res.json()
    if (!data.data.highlights || data.data.highlights.length === 0) throw new Error('Featured highlights missing')
  })

  await test('GET /api/menu/item/22 returns Ottoman Signature Burger', async () => {
    const res = await fetch(`${BASE}/api/menu/item/22`)
    const data = await res.json()
    if (data.data.name !== 'Ottoman Signature' || data.data.price !== 799) {
      throw new Error(`Expected Ottoman Signature 799, got ${data.data?.name}`)
    }
  })

  await test('GET /api/menu/item/99999 returns 404 for nonexistent item', async () => {
    const res = await fetch(`${BASE}/api/menu/item/99999`)
    if (res.status !== 404) throw new Error(`Expected 404, got ${res.status}`)
  })

  // 4. Reviews
  await test('GET /api/reviews returns review list and rating stats', async () => {
    const res = await fetch(`${BASE}/api/reviews`)
    const data = await res.json()
    if (!data.stats || typeof data.stats.averageRating !== 'number') throw new Error('Missing stats in reviews')
  })

  await test('POST /api/reviews adds a valid review', async () => {
    const res = await fetch(`${BASE}/api/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Sultan',
        text: 'The smashed burger was extraordinary!',
        stars: 5
      })
    })
    const data = await res.json()
    if (res.status !== 201 || data.data.name !== 'Test Sultan') throw new Error('Failed to create review')
  })

  await test('POST /api/reviews returns 400 for empty name/text', async () => {
    const res = await fetch(`${BASE}/api/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: '', text: '' })
    })
    if (res.status !== 400) throw new Error(`Expected 400, got ${res.status}`)
  })

  // 5. Business Info
  await test('GET /api/info returns phone, hours, and coordinates', async () => {
    const res = await fetch(`${BASE}/api/info`)
    const data = await res.json()
    if (!data.data.whatsapp || !data.data.coordinates.lat) throw new Error('Invalid business info')
  })

  // 6. Orders
  await test('POST /api/orders creates order and generates valid WhatsApp URL', async () => {
    const orderPayload = {
      customerName: 'Ahmad Khan',
      address: 'House 12, Block B, Al-Rehman Garden Phase 2, Lahore',
      instructions: 'Please send extra garlic sauce',
      items: [
        { id: 22, name: 'Ottoman Signature Burger', price: 799, quantity: 2 },
        { id: 46, name: 'OB Crumber Fries', price: 450, quantity: 1 }
      ]
    }
    const res = await fetch(`${BASE}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload)
    })
    const data = await res.json()
    if (res.status !== 201 || !data.data.order.id.startsWith('OB-')) {
      throw new Error('Order creation failed')
    }
    if (data.data.order.grandTotal !== 2048) {
      throw new Error(`Expected total 2048, got ${data.data.order.grandTotal}`)
    }
    if (!data.data.whatsappUrl.includes('wa.me/923132707666')) {
      throw new Error('Invalid WhatsApp URL')
    }
  })

  await test('POST /api/orders returns 400 when missing items', async () => {
    const res = await fetch(`${BASE}/api/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerName: 'Ahmad', address: 'Lahore', items: [] })
    })
    if (res.status !== 400) throw new Error(`Expected 400, got ${res.status}`)
  })

  // 7. Design System Tokens
  await test('GET /api/design-system returns 3-layer tokens', async () => {
    const res = await fetch(`${BASE}/api/design-system`)
    const data = await res.json()
    if (!data.data.tokens.primitive || !data.data.tokens.semantic) {
      throw new Error('Invalid token structure')
    }
  })

  // 8. 404 Catch-All
  await test('GET /api/nonexistent-endpoint returns 404 JSON', async () => {
    const res = await fetch(`${BASE}/api/nonexistent-endpoint`)
    const data = await res.json()
    if (res.status !== 404 || !data.error) throw new Error(`Expected 404, got ${res.status}`)
  })

  // Shutdown test server
  await new Promise((resolve) => server.close(resolve))

  console.log('\n==========================================')
  console.log(`TEST SUMMARY: ${passed} PASSED, ${failed} FAILED`)
  console.log('==========================================\n')

  if (failed > 0) {
    process.exit(1)
  }
}

runLocalTests().catch((err) => {
  console.error('Fatal Test Runner Error:', err)
  process.exit(1)
})
