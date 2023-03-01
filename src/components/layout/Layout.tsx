import React, { ReactNode } from 'react'
import Footer from '../footer/Footer'
import Modal from '../shared/Modal'
import ModalProvider from '../modal/ModalProvider'
import Navbar from '../navbar/Navbar'

interface ILayout {
  children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <ModalProvider>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main id='main'>{children}</main>
        <Footer />
      </div>
    </ModalProvider>
  )
}

export default Layout
