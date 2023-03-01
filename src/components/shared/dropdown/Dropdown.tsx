import Portal from '@/components/layout/Portal'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { useOnHoverOutside } from '@/hooks/useOnHoverOutside'
import { AnimatePresence, motion } from 'framer-motion'
import React, { PropsWithChildren, ReactElement, ReactNode, useRef, useState } from 'react'
import Popover, { PopoverPlacemet, PositionType } from '../Popover'

type ActionType = 'click' | 'hover'

interface IDropdown {
  trigger: ReactNode
  type?: ActionType
  placement?: PopoverPlacemet
  children: ReactNode
  fullSize?: boolean
  withOverlay?: boolean
  className?: string
}

const Dropdown: React.FC<IDropdown> = ({
  trigger,
  placement,
  children,
  type = 'click',
  fullSize,
  withOverlay,
  className,
}) => {
  const [position, setPosition] = useState<PositionType | null>(null)
  const dropdownRef = useRef(null)
  const anchorRef = useRef(null)

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect()
    setPosition({
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height,
      left: bounds.left,
      right: bounds.right,
      bottom: bounds.y,
    })
  }

  const handleClose = () => setPosition(null)

  const handleToogle = (e: React.MouseEvent<HTMLElement>) => (!position ? handleOpen(e) : handleClose())

  type === 'click'
    ? useOnClickOutside([dropdownRef, anchorRef], handleClose)
    : useOnHoverOutside([dropdownRef, anchorRef], handleClose)

  const anchorClickProps = {
    onClick: handleToogle,
    ref: anchorRef,
  }

  const anchorHoverProps = {
    onMouseOver: handleOpen,
    ref: anchorRef,
  }
  const anchor = React.isValidElement(trigger)
    ? React.cloneElement(trigger, type === 'click' ? anchorClickProps : anchorHoverProps)
    : null

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const onClick = () => {
        handleClose()
        child.props.onClick?.()
      }
      return React.cloneElement(child as any, { onClick })
    }
    return child
  })

  return (
    <>
      {anchor}
      <AnimatePresence>
        {position && (
          <Portal wrapperId={`dropdown-${position.x}`}>
            <Popover
              ref={dropdownRef}
              position={position}
              placement={placement}
              fullSize={fullSize}
              className={className}
            >
              {childrenWithProps}
            </Popover>
            {withOverlay && (
              <motion.div
                className='overlay bg-black/10 z-30 backdrop-blur-md'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </Portal>
        )}
      </AnimatePresence>
    </>
  )
}

export default Dropdown
