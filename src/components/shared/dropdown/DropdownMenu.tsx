import { useOnHoverOutside } from '@/hooks/useOnHoverOutside'
import React, { ReactNode, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface IDropdownMenu {
  top: number
  left: number
  children: ReactNode
  bottom: number
}

const DropdownMenu = React.forwardRef<any, IDropdownMenu>(({ left, top, children, bottom }, ref) => {
  const targetRef = useRef(ref)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const dropdownAnimation = {
    initial: { scale: 0.5, x: 0, y: -top, opacity: 0 },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        duration: 0.4,
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
    exit: { scale: 0.5, x: 0, y: -top, opacity: 0, transition: { duration: 0.2 } },
  }

  useLayoutEffect(() => {
    if (ref.current) {
      console.log('Width suka', ref.current.offsetWidth)

      setWidth(ref.current.offsetWidth)
      setHeight(ref.current.offsetHeight)
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      // {...dropdownAnimation}
      style={{
        top: bottom - height,
        left: left - width,
        position: 'fixed',
        zIndex: 9999,
      }}
      // style={{
      //   top,
      //   left: left - width,
      //   position: 'fixed',
      //   zIndex: 9999,
      // }}
      // className={'max-w-[250px]'}
    >
      {children}
    </motion.div>
  )
})

export default DropdownMenu
