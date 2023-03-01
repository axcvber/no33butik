import React, { useEffect, useRef, useState } from 'react'

const ExploreWidget = () => {
  const [isReady, setReady] = useState(false)
  const ref = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    setReady(true)
    if (ref.current) {
      const text = ref.current
      text.innerHTML = text.innerText.replace(/\S/g, '<span>$&</span>')

      const span = text.children as HTMLCollectionOf<HTMLElement>
      for (let i = 0; i < span.length; i++) {
        span[i].style.transform = 'rotate(' + i * 18 + 'deg)'
      }
    }
  }, [isReady])

  if (!isReady) {
    return null
  }

  return (
    <div className='rotate-text'>
      <h2 ref={ref} className='text'>
        keşfetmek-keşfetmek-
      </h2>
      <svg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M22.5 1.875L16.875 16.875L1.875 22.5L16.875 28.125L22.5 43.125L28.125 28.125L43.125 22.5L28.125 16.875L22.5 1.875Z'
          fill='#FF9A66'
        />
      </svg>
    </div>
  )
}

export default ExploreWidget
