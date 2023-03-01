import { cls } from '@/utils/helpers/cls'
import { motion } from 'framer-motion'
import React, { ReactNode, useLayoutEffect, useRef, useState } from 'react'

export type PositionType = {
  x: number
  y: number
  width: number
  height: number
  left: number
  right: number
  bottom: number
}

export type PopoverPlacemet =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'left-start'
  | 'left-center'
  | 'left-end'
  | 'right-start'
  | 'right-center'
  | 'right-end'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end'

interface IPopover {
  children: ReactNode
  position: PositionType
  placement?: PopoverPlacemet
  fullSize?: boolean
  className?: string
}

const Popover = React.forwardRef<HTMLDivElement, IPopover>(
  ({ children, position, placement = 'bottom-start', fullSize, className }, ref) => {
    const targetRef = useRef<HTMLDivElement | null>(null)
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
    console.log('popover position', position)
    console.log('popover dimensions', dimensions)

    let offsetY
    let offsetX
    let arrowPosition = ''
    let margin = ''
    let translate = ''
    let animateY = 0
    let animateX = 0

    switch (placement) {
      case 'top-start':
        offsetY = position.y - dimensions.height
        offsetX = position.left
        arrowPosition = ''
        margin = 'mb-4'
        animateY = 40
        animateX = -40
        break

      case 'top-center':
        offsetY = position.y - dimensions.height
        offsetX = position.left + position.width / 2
        translate = '!-translate-x-1/2'
        arrowPosition = ''
        margin = 'mb-4'
        animateY = 40
        animateX = -40

        break

      case 'top-end':
        offsetY = position.y - dimensions.height
        offsetX = position.right - dimensions.width
        arrowPosition = ''
        margin = 'mb-4'
        break

      case 'left-start':
        offsetY = position.y
        offsetX = position.x - dimensions.width
        arrowPosition = `after:top-1.5 after:-right-1 before:top-1.5 before:-right-1`
        margin = 'mr-4'
        break

      case 'left-center':
        offsetY = position.y + position.height / 2
        offsetX = position.x - dimensions.width
        translate = '-translate-y-1/2'
        arrowPosition =
          'after:top-1/2 after:-right-1.5 before:top-1/2 before:-right-1.5 before:-translate-y-1/2 after:-translate-y-1/2'
        margin = 'mr-4'
        break

      case 'left-end':
        offsetY = position.y - dimensions.height + position.height
        offsetX = position.x - dimensions.width
        arrowPosition = 'after:bottom-2 after:-right-1.5 before:bottom-2 before:-right-1.5'
        margin = 'mr-4'
        break

      case 'bottom-start':
        offsetY = position.y + position.height
        offsetX = position.left
        arrowPosition = ''
        margin = 'mt-4'
        animateY = -offsetY
        animateX = 40
        break
      case 'bottom-center':
        offsetY = position.y + position.height
        offsetX = position.left + position.width / 2
        translate = '-translate-x-1/2'
        arrowPosition = ''
        margin = 'mt-4'
        break
      case 'bottom-end':
        offsetY = position.y + position.height
        offsetX = position.right - dimensions.width
        arrowPosition = ''
        margin = 'mt-4'
        break

      default:
        break
    }

    useLayoutEffect(() => {
      if (targetRef.current) {
        setDimensions({
          width: targetRef.current.offsetWidth,
          height: targetRef.current.offsetHeight,
        })
      }
    }, [])

    return (
      <motion.div
        ref={(node) => {
          targetRef.current = node
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        className={cls(`
        ${fullSize && 'container translate-x-1/2'}
        ${translate}
       
      `)}
        style={{
          top: offsetY,
          left: fullSize ? 0 : offsetX,
          right: fullSize ? 0 : 'auto',
          position: 'fixed',
          zIndex: 9999,
        }}
        initial={{ scale: 0.5, opacity: 0, y: animateY, x: animateX }}
        animate={{
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            type: 'spring',
            duration: 0.4,
            delayChildren: 0.2,
            staggerChildren: 0.05,
          },
        }}
        exit={{
          y: animateY,
          x: animateX,
          scale: 0.5,
          opacity: 0,
          transition: { duration: 0.2 },
        }}
      >
        <div
          className={cls(`
          ${margin}
          
          p-2 bg-white border border-gray-100 shadow-md rounded-xl
          ${className}
          `)}
        >
          {children}
        </div>
      </motion.div>
    )
  }
)

export default Popover
