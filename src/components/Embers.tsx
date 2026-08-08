import { useEffect, useState } from 'react'

interface Ember {
  id: number
  left: number
  size: number
  duration: number
  delay: number
}

export default function Embers({ count = 30 }: { count?: number }) {
  const [embers, setEmbers] = useState<Ember[]>([])

  useEffect(() => {
    const generated: Ember[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 6 + 5,
      delay: Math.random() * 8,
    }))
    setEmbers(generated)
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {embers.map((e) => (
        <div
          key={e.id}
          className="absolute bottom-0 rounded-full bg-gradient-to-t from-ember/80 via-copper/60 to-transparent animate-ember-float"
          style={{
            left: `${e.left}%`,
            width: `${e.size}px`,
            height: `${e.size}px`,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
            boxShadow: '0 0 6px rgba(255, 122, 24, 0.8), 0 0 12px rgba(184, 115, 51, 0.4)',
          }}
        />
      ))}
    </div>
  )
}
