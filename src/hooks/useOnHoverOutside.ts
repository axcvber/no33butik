import React, { useEffect } from 'react'

export function useOnHoverOutside(refArr: Array<React.RefObject<HTMLElement>>, handler: (event: Event) => void) {
  React.useEffect(() => {
    const listener = (event: Event) => {
      if (!refArr.find((e) => e.current) || refArr.find((e) => e.current?.contains(event.target as Node))) {
        return
      }
      handler(event)
    }
    document.addEventListener('mouseover', listener)
    return () => {
      document.removeEventListener('mouseout', listener)
    }
  }, [refArr, handler])
}

// export function useOnHoverOutside(ref: React.RefObject<HTMLElement>, handler: (event: Event) => void) {
//   React.useEffect(() => {
//     const listener = (event: Event) => {
//       if (!ref.current || ref.current.contains(event.target as Node)) {
//         return
//       }
//       handler(event)
//     }
//     document.addEventListener('mouseover', listener)
//     return () => {
//       document.removeEventListener('mouseout', listener)
//     }
//   }, [ref, handler])
// }
