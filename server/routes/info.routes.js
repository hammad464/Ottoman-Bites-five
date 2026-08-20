import { Router } from 'express'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const infoData = JSON.parse(readFileSync(join(__dirname, '../data/businessInfo.json'), 'utf-8'))

const router = Router()

// GET /api/info
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: infoData
  })
})

export default router
