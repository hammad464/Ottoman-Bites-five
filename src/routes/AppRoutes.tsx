import { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { routesConfig } from './routes.config'
import PageLoader from '../components/PageLoader'

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routesConfig.map((route) => {
          const Component = route.component
          return <Route key={route.path} path={route.path} element={<Component />} />
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  )
}
