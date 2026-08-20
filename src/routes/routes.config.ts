import { lazy, type ComponentType } from 'react'

export interface RouteConfig {
  path: string
  label: string
  isNav: boolean
  component: ComponentType<any>
  description?: string
}

export const routesConfig: RouteConfig[] = [
  {
    path: '/',
    label: 'Home',
    isNav: true,
    component: lazy(() => import('../pages/HomePage')),
    description: "The Empire's Feast homepage, featuring heroic stories, featured dishes, and quick reservation/ordering."
  },
  {
    path: '/menu',
    label: 'The Feast (Menu)',
    isNav: true,
    component: lazy(() => import('../pages/MenuPage')),
    description: 'Explore full Imperial Ottoman menu with interactive filtering and instant ordering.'
  },
  {
    path: '/lore',
    label: 'The Lore',
    isNav: true,
    component: lazy(() => import('../pages/LorePage')),
    description: 'Discover the culinary heritage and secrets of ancient Anatolian spices.'
  },
  {
    path: '/reviews',
    label: 'Imperial Praise',
    isNav: true,
    component: lazy(() => import('../pages/ReviewsPage')),
    description: 'Verified reviews and testimonials from esteemed Sultans and food connoisseurs.'
  },
  {
    path: '/location',
    label: 'Find Us',
    isNav: true,
    component: lazy(() => import('../pages/LocationPage')),
    description: 'Interactive map, restaurant timings, contact information and directions.'
  }
]
