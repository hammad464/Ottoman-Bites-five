import { Router } from 'express'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
let reviewsData = JSON.parse(readFileSync(join(__dirname, '../data/reviews.json'), 'utf-8'))

const router = Router()

// GET /api/reviews
router.get('/', (req, res) => {
  const totalStars = reviewsData.reduce((acc, r) => acc + (r.stars || 5), 0)
  const averageRating = (totalStars / (reviewsData.length || 1)).toFixed(1)

  res.json({
    success: true,
    count: reviewsData.length,
    stats: {
      averageRating: parseFloat(averageRating),
      totalReviews: reviewsData.length,
      fiveStarCount: reviewsData.filter(r => r.stars === 5).length
    },
    data: reviewsData
  })
})

// POST /api/reviews
router.post('/', (req, res) => {
  const { name, text, stars } = req.body

  if (!name || !text) {
    return res.status(400).json({
      success: false,
      error: 'Name and review text are required'
    })
  }

  const newReview = {
    id: reviewsData.length + 1,
    name: name.trim(),
    text: text.trim(),
    textTranslated: null,
    stars: Number(stars) || 5,
    publishedAtDate: new Date().toISOString(),
    isLocalGuide: false,
    reviewerNumberOfReviews: 1,
    reviewerPhotoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80',
    responseFromOwnerText: 'Thank you for dining with the Sultan!'
  }

  reviewsData = [newReview, ...reviewsData]

  res.status(201).json({
    success: true,
    message: 'Review submitted successfully',
    data: newReview
  })
})

export default router
