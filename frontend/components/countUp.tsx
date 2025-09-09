"use client"
import { useEffect, useRef, useState } from "react"

interface CountUpProps {
  end: number
  duration?: number // Total animation time in ms
  isDecimal?: boolean
}

export default function CountUp({ end, duration = 1200, isDecimal = false }: CountUpProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let start = 0
          const startTime = performance.now()

          const animate = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1)
            // Ease-out effect for natural feel
            const easedProgress = 1 - Math.pow(1 - progress, 3)
            start = easedProgress * end
            setCount(start)
            if (progress < 1) requestAnimationFrame(animate)
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [end, duration])

  return (
    <span ref={ref} className="transition-all">
      {isDecimal ? count.toFixed(2) : Math.floor(count)}
    </span>
  )
}
