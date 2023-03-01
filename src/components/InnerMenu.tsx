import { AnimatePresence } from 'framer-motion'
import React from 'react'

const InnerMenu = () => {
  return (
    <>
      <AnimatePresence>
        {activeMenu === 'main' && (
          <motion.ul
            layout
            key={'container'}
            className='w-full p-5 h-[150px]'
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
    </>
  )
}

export default InnerMenu
