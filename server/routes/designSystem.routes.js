import { Router } from 'express'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const tokensData = JSON.parse(readFileSync(join(__dirname, '../data/designTokens.json'), 'utf-8'))

const router = Router()

// GET /api/design-system
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: tokensData
  })
})

// GET /api/design-system/tokens
router.get('/tokens', (req, res) => {
  res.json({
    success: true,
    data: tokensData.tokens
  })
})

// GET /api/design-system/colors
router.get('/colors', (req, res) => {
  res.json({
    success: true,
    data: {
      primitive: tokensData.tokens.primitive.color,
      semantic: tokensData.tokens.semantic
    }
  })
})

// GET /api/design-system/typography
router.get('/typography', (req, res) => {
  res.json({
    success: true,
    data: tokensData.tokens.primitive.typography
  })
})

// GET /api/design-system/components
router.get('/components', (req, res) => {
  res.json({
    success: true,
    data: tokensData.tokens.components
  })
})

export default router
