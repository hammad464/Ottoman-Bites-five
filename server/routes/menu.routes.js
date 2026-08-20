import { Router } from 'express'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const menuData = JSON.parse(readFileSync(join(__dirname, '../data/menu.json'), 'utf-8'))

const router = Router()

// GET /api/menu (with optional category & search query filtering)
router.get('/', (req, res) => {
  const { category, search } = req.query

  let result = menuData

  if (category && category !== 'all') {
    result = result.filter(c => c.id === category)
  }

  if (search && typeof search === 'string' && search.trim() !== '') {
    const q = search.toLowerCase().trim()
    result = result.map(c => ({
      ...c,
      items: c.items.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.badge && item.badge.toLowerCase().includes(q))
      )
    })).filter(c => c.items.length > 0)
  }

  res.json({
    success: true,
    count: result.reduce((acc, cat) => acc + cat.items.length, 0),
    data: result
  })
})

// GET /api/menu/categories
router.get('/categories', (req, res) => {
  const categories = menuData.map(c => ({
    id: c.id,
    name: c.name,
    tagline: c.tagline,
    itemCount: c.items.length
  }))

  res.json({
    success: true,
    data: categories
  })
})

// GET /api/menu/featured
router.get('/featured', (req, res) => {
  const beef = menuData.find(c => c.id === 'beef-burgers')?.items.slice(0, 3) || []
  const chicken = menuData.find(c => c.id === 'chicken-burgers')?.items.slice(0, 3) || []
  const periPeri = menuData.find(c => c.id === 'peri-peri')?.items.slice(0, 2) || []

  res.json({
    success: true,
    data: {
      beef,
      chicken,
      periPeri,
      highlights: [...beef.slice(0, 2), ...chicken.slice(0, 2), ...periPeri.slice(0, 2)]
    }
  })
})

// GET /api/menu/item/:id
router.get('/item/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  const allItems = menuData.flatMap(c => c.items)
  const item = allItems.find(i => i.id === id)

  if (!item) {
    return res.status(404).json({
      success: false,
      error: 'Menu item not found'
    })
  }

  res.json({
    success: true,
    data: item
  })
})

export default router
