import { useEffect, useState } from "react"

export function useScroll() {
  const [reachBottom, setReachBottom] = useState(false)
  const scrollHandler = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    if (scrollTop + clientHeight >= scrollHeight) {
      setReachBottom(true)
    } else {
      setReachBottom(false)
    }
  }

  window.addEventListener('scroll', scrollHandler)

  useEffect(() => {
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return { reachBottom }
}