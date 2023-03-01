import { useOnHoverOutside } from '@/hooks/useOnHoverOutside'
import { AnimatePresence, motion } from 'framer-motion'
import React, { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Portal from '../../layout/Portal'
import DropdownMenu from './DropdownMenu'

interface IHoverDropdown {
  trigger: ReactNode
  menu: any
}

const HoverDropdown: React.FC<IHoverDropdown> = ({ trigger, menu }) => {
  const [position, setPosition] = useState<{
    x: number
    y: number
    width: number
    left: number
    right: number
    bottom: number
  } | null>(null)
  const dropdownRef = useRef(null)

  console.log('position', position)

  const handleMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect()
    // const elementWidth = dropdownRef.current?.offsetWidth
    // console.log('elementWidth', elementWidth)

    setPosition({
      x: bounds.x,
      y: bounds.y + bounds.height,
      width: bounds.width,
      left: bounds.left,
      right: bounds.right,
      bottom: bounds.y,
    })
  }
  const handleMouseOut = () => setPosition(null)
  const anchorProps = {
    onMouseOver: handleMouseOver,
    // onMouseOut: handleMouseOut,
  }
  const anchor = React.isValidElement(trigger) ? (
    React.cloneElement(trigger, anchorProps)
  ) : (
    <span {...anchorProps}>{trigger}</span>
  )

  // useLayoutEffect(() => {
  //   if (dropdownRef.current) {
  //     console.log('width', dropdownRef.current?.offsetWidth)

  //     setWidth(dropdownRef.current?.offsetWidth)
  //   }
  // }, [])

  useOnHoverOutside([dropdownRef], handleMouseOut)

  return (
    <>
      {anchor}
      <AnimatePresence>
        {position && (
          <Portal wrapperId={`dropdown-${anchor.key}`}>
            <DropdownMenu ref={dropdownRef} top={position!.y} left={position.right} bottom={position.bottom}>
              <ul className='bg-white my-4 border border-gray-100 shadow-md rounded-xl p-2 flex flex-col gap-2'>
                {menu.map((menuItem: any, index: number) => (
                  <li key={index} onClick={handleMouseOut}>
                    {React.cloneElement(menuItem, {
                      onClick: () => {
                        menuItem.props.onClick()
                      },
                    })}
                  </li>
                ))}
              </ul>
            </DropdownMenu>
            {/* <motion.div
              ref={dropdownRef}
              key={`dropdown-${anchor.key}`}
              // {...dropdownAnimation}
              // ref={dropdownRef}
              // className={`w-[200px] `}
              // style={{
              //   top: position!.y,
              //   left: 0,
              //   right: 0,
              //   position: 'fixed',
              //   zIndex: 9999,
              // }}
              style={{
                top: position.y,
                left: position.right,
                position: 'fixed',
                zIndex: 9999,
              }}
            >
              <ul className='bg-white mt-4 border border-gray-100 shadow-md rounded-xl p-4'>
                {menu.map((menuItem: any, index: number) => (
                  <li key={index} className='menu-item'>
                    {React.cloneElement(menuItem, {
                      onClick: () => {
                        menuItem.props.onClick()
                        handleMouseOut()
                      },
                    })}
                  </li>
                ))}
              </ul>
            </motion.div> */}
          </Portal>
        )}
      </AnimatePresence>
    </>
  )
}

export default HoverDropdown
