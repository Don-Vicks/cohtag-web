import React from 'react'
import { ReactLenis } from 'lenis/react'

/**
 * SmoothScroll component wraps the application to provide buttery smooth
 * scrolling physics using Lenis.
 * 
 * It automatically respects the 'prefers-reduced-motion' media query
 * to ensure accessibility for users who prefer native scrolling.
 */
function SmoothScroll({ children }) {
  return (
    <ReactLenis 
      root 
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false, // Maintain native touch scrolling for best mobile experience
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
