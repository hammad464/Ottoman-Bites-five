import express from 'express'
import cors from 'cors'
import healthRoutes from './routes/health.routes.js'
import menuRoutes from './routes/menu.routes.js'
import reviewsRoutes from './routes/reviews.routes.js'
import infoRoutes from './routes/info.routes.js'
import ordersRoutes from './routes/orders.routes.js'
import designSystemRoutes from './routes/designSystem.routes.js'

const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())

// Request Logger
app.use((req, res, next) => {
  const start = Date.now()
  res.on('finish', () => {
    const duration = Date.now() - start
    console.log(`[API] ${req.method} ${req.originalUrl} - ${res.statusCode} (${duration}ms)`)
  })
  next()
})

// Root & /api Endpoints
const rootHandler = (req, res) => {
  res.json({
    name: 'Ottoman Bites Imperial Backend API',
    status: 'online',
    version: '2.0.0',
    endpoints: {
      health: '/api/health',
      menu: '/api/menu',
      menuCategories: '/api/menu/categories',
      menuFeatured: '/api/menu/featured',
      menuItem: '/api/menu/item/:id',
      reviews: '/api/reviews',
      businessInfo: '/api/info',
      orders: '/api/orders',
    }
  })
}

app.get('/', rootHandler)
app.get('/api', rootHandler)

// Mount Routes
app.use('/api/health', healthRoutes)
app.use('/api/menu', menuRoutes)
app.use('/api/reviews', reviewsRoutes)
app.use('/api/info', infoRoutes)
app.use('/api/orders', ordersRoutes)
app.use('/api/design-system', designSystemRoutes)

// 404 Route for unmatched API calls
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `API Route ${req.originalUrl} not found`,
    availableEndpoints: '/api'
  })
})

// Error Handler
app.use((err, req, res, next) => {
  console.error('[Server Error]', err)
  res.status(500).json({
    success: false,
    error: 'Internal Imperial Server Error',
    message: err.message
  })
})

// Start Server - Bind explicitly to 0.0.0.0 for Render / Cloud compatibility
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n=================================================`)
  console.log(`  👑 OTTOMAN BITES BACKEND API SERVER RUNNING`)
  console.log(`  🚀 Host: 0.0.0.0:${PORT}`)
  console.log(`  🍽️  Menu API: /api/menu`)
  console.log(`  ⭐ Reviews API: /api/reviews`)
  console.log(`  📍 Info API: /api/info`)
  console.log(`=================================================\n`)
})

export default app
