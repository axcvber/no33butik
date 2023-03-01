import React, { ReactNode, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import Portal from '../layout/Portal'
import { IoClose } from 'react-icons/io5'
import { useScrollLock } from '@/hooks/useScrollLock'
import { cls } from '@/utils/helpers/cls'

const styles = {
  base: 'relative w-full m-auto block bg-white z-50 py-6 px-10 rounded-lg shadow-lg',
  size: {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  },
}

type ModalSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface IModal {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title: string
  description?: string
  size?: ModalSize
  className?: string
}

const overlayAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const modalAnimation = {
  initial: {
    y: '-100vh',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    y: -200,
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.15,
    },
  },
}

const Modal: React.FC<IModal> = ({ isOpen, onClose, title, description, children, size = 'md', className = '' }) => {
  const { lockScroll, unlockScroll } = useScrollLock()
  const modalRef = React.useRef(null)
  useOnClickOutside([modalRef], onClose)

  useEffect(() => {
    if (isOpen) {
      lockScroll()
    }

    return () => {
      unlockScroll()
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal wrapperId='modal'>
          <motion.div {...overlayAnimation} className={'overlay py-10 px-3 overflow-y-scroll flex z-50'}>
            <motion.div
              ref={modalRef}
              className={cls(`
              ${styles.base}
              ${styles.size[size]}
              ${className}
            `)}
              {...modalAnimation}
            >
              <div className='absolute top-4 right-4 text-secondary-light cursor-pointer hover:text-secondary hover:rotate-180 transition-all duration-300'>
                <IoClose fontSize={26} onClick={onClose} />
              </div>

              <header className='flex flex-col items-center gap-4 pt-4 pb-6 text-center'>
                <h3 className='uppercase font-bold text-2xl font-display'>{title}</h3>
                {description && <p className='text-sm text-text'>{description}</p>}
              </header>
              <div>{children}</div>
            </motion.div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  )
}

export default Modal
