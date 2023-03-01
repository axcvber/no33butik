import React from 'react'

export const useOnClickOutside = (refArr: Array<React.RefObject<HTMLElement>>, handler: (event: Event) => void) => {
  React.useEffect(() => {
    const listener = (event: Event) => {
      if (!refArr.find((e) => e.current) || refArr.find((e) => e.current?.contains(event.target as Node))) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [refArr, handler])
}

// export const useOnClickOutside = (ref: React.RefObject<HTMLElement>, handler: (event: Event) => void) => {
//   React.useEffect(() => {
//     const listener = (event: Event) => {
//       if (!ref.current || ref.current.contains(event.target as Node)) {
//         return
//       }
//       handler(event)
//     }
//     document.addEventListener('mousedown', listener)
//     document.addEventListener('touchstart', listener)
//     return () => {
//       document.removeEventListener('mousedown', listener)
//       document.removeEventListener('touchstart', listener)
//     }
//   }, [ref, handler])
// }
