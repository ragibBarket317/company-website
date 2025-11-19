// src/hooks/useGsapScroll.js
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useGsapScroll = (targetRef, animation, options = {}) => {
  useEffect(() => {
    const el = targetRef.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...options,
        },
        ...animation,
      })
    }, el)

    return () => ctx.revert()
  }, [targetRef, animation, options])
}
