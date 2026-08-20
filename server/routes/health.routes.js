import { Router } from 'express'

const router = Router()
const startTime = Date.now()

router.get('/', (req, res) => {
  res.json({
    status: 'online',
    system: 'Ottoman Bites Backend API',
    uptimeSeconds: Math.floor((Date.now() - startTime) / 1000),
    timestamp: new Date().toISOString(),
    version: '2.0.0',
    environment: process.env.NODE_ENV || 'development'
  })
})

export default router
