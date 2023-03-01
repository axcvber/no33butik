import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { HiMenu, HiOutlineChevronLeft } from 'react-icons/hi'
import Portal from '../layout/Portal'
import IconButton from '../shared/IconButton'
import { IoClose } from 'react-icons/io5'
import { useScrollLock } from '@/hooks/useScrollLock'

const overlayAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const menuAnimation = {
  initial: {
    x: '-100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.15,
    },
  },
}

const innerMenuAnimation = {
  initial: {
    position: 'absolute',
    x: '-110%',
    top: 0,
    height: 0,
  },
  animate: {
    x: '0',
    position: 'static',
    height: 'auto',
  },
  exit: {
    position: 'absolute',
    top: 0,
    x: '-110%',
    height: 0,
  },
  transition: {
    duration: 0.4,
  },
}

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false)
  const { lockScroll, unlockScroll } = useScrollLock()
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  const onOpenMenu = () => {
    setOpen(true)
  }

  const onCloseMenu = () => {
    setOpen(false)
  }

  // function calcHeight(definition: AnimationDefinition) {
  //   const height = el.offsetHeight;
  //   setMenuHeight(height);
  // }

  const calcHeight = (el: AnimationDefinition) => {
    const height = el.offsetHeight
    setMenuHeight(height)
  }

  useEffect(() => {
    if (isOpen) {
      lockScroll()
    }

    return () => {
      unlockScroll()
    }
  }, [isOpen])

  return (
    <>
      <IconButton rounded variant='ghost' size='large' color='secondary' icon={<HiMenu />} onClick={onOpenMenu} />
      <AnimatePresence>
        {isOpen && (
          <Portal wrapperId={'mobile-menu'}>
            <motion.div layout className='fixed top-0 right-0 bg-white z-[9999] w-96 h-auto flex ' {...menuAnimation}>
              <div className='absolute top-2 right-3 z-50 text-secondary-light cursor-pointer hover:text-secondary hover:rotate-180 transition-all duration-300'>
                <IconButton
                  rounded
                  variant='ghost'
                  size='large'
                  color='secondary'
                  icon={<IoClose />}
                  onClick={onCloseMenu}
                />
              </div>
              <AnimatePresence>
                {activeMenu === 'main' && (
                  <motion.ul
                    layout
                    onAnimationStart={(e) => calcHeight(e)}
                    key={'container'}
                    className='w-full p-5'
                    {...innerMenuAnimation}
                    transition={innerMenuAnimation.transition}
                  >
                    <li>Home</li>
                    <li onClick={() => setActiveMenu('collection')}>Collection</li>
                    <li>The newests</li>
                    <li>Net 50% off</li>
                    <li>Season sale</li>
                  </motion.ul>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {activeMenu === 'collection' && (
                  <motion.div
                    key={'container2'}
                    className='w-full p-5 bg-red-300'
                    {...innerMenuAnimation}
                    transition={innerMenuAnimation.transition}
                  >
                    <IconButton
                      rounded
                      variant='ghost'
                      size='large'
                      color='secondary'
                      icon={<HiOutlineChevronLeft />}
                      onClick={() => setActiveMenu('main')}
                    />
                    <div>Collection 1</div>
                    <div>Collection 2</div>
                    <div>Collection 3</div>
                    <div>Collection 4</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div {...overlayAnimation} className={'overlay z-50'} />
          </Portal>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu
