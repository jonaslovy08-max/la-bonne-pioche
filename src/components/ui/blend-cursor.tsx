'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function BlendCursor() {
  const cursorRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current

    if (!cursor) return

    const moveCursor = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return

      cursor.style.opacity = '1'
      cursor.style.transform = `translate3d(${event.clientX - 2}px, ${event.clientY - 2}px, 0)`
    }

    const hideCursor = () => {
      cursor.style.opacity = '0'
    }

    window.addEventListener('pointermove', moveCursor)
    window.addEventListener('blur', hideCursor)
    document.documentElement.addEventListener('mouseleave', hideCursor)

    return () => {
      window.removeEventListener('pointermove', moveCursor)
      window.removeEventListener('blur', hideCursor)
      document.documentElement.removeEventListener('mouseleave', hideCursor)
    }
  }, [])

  return (
    <Image
      alt=""
      aria-hidden="true"
      className="lbp-blend-cursor"
      height={45}
      priority
      ref={cursorRef}
      src="/icons/pointer.svg"
      width={48}
    />
  )
}
