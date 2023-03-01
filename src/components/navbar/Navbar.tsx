import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../Logo'
import NavActions from './NavActions'
import Ust from './Ust'
import { IoIosArrowDown } from 'react-icons/io'
import { HiChevronDown } from 'react-icons/hi'
import MobileMenu from './MobileMenu'
import Dropdown from '../shared/dropdown/Dropdown'
import accountLinks from '@/routes/accountLinks'
import Button from '../shared/Button'

const navLinks = [
  {
    label: 'Koleksiyon',
    path: '/collection',
    focused: false,
  },
  {
    label: 'En yeniler',
    path: '/new-season',
    focused: true,
  },
  {
    label: 'Net %50 İndirim',
    path: '/net-50-off',
    focused: true,
  },
  {
    label: 'Sezon İndirimi',
    path: '/season-sale',
    focused: false,
  },
]

const data = [
  {
    category: 'Top clothing',
    path: '/top-clothing',
    subcategories: [
      {
        category: 'Dress',
        path: '/top-clothing/dress',
      },
      {
        category: 'Shirt',
        path: '/top-clothing/shirt',
      },
      {
        category: 'Sweatshirt',
        path: '/top-clothing/sweatshirt',
      },
      {
        category: 'Knitwear & sweater',
        path: '/top-clothing/knitwear-sweater',
      },
      {
        category: 'T-shirt',
        path: '/top-clothing/t-shirt',
      },
      {
        category: 'Athlete',
        path: '/top-clothing/athlete',
      },
      {
        category: 'Blouse',
        path: '/top-clothing/blouse',
      },
      {
        category: 'Crop',
        path: '/top-clothing/crop',
      },
      {
        category: 'Set',
        path: '/top-clothing/set',
      },
      {
        category: 'Sports teams',
        path: '/top-clothing/sports-team',
      },
    ],
  },
  {
    category: 'Underwear',
    path: '/underwear',
    subcategories: [
      {
        category: 'Jeans',
        path: '/underwear/jeans',
      },
      {
        category: 'Trousers',
        path: '/underwear/trousers',
      },
      {
        category: 'Overalls',
        path: '/underwear/overalls',
      },
      {
        category: 'Skirt',
        path: '/underwear/skirt',
      },
      {
        category: 'Bottom tracksuit',
        path: '/underwear/bottom-tracksuit',
      },
      {
        category: 'Leggings',
        path: '/underwear/leggings',
      },
      {
        category: 'Shorts',
        path: '/underwear/shorts',
      },
    ],
  },
  {
    category: 'Outerwear',
    path: '/outerwear',
    subcategories: [
      {
        category: 'Jackets',
        path: '/outerwear/jackets',
      },
      {
        category: 'Coat',
        path: '/outerwear/coat',
      },
      {
        category: 'Jacket',
        path: '/outerwear/Jacket',
      },
      {
        category: 'Waistcoat',
        path: '/outerwear/waistcoat',
      },
      {
        category: 'Trench coat',
        path: '/outerwear/trench-coat',
      },
      {
        category: 'Cardigan',
        path: '/outerwear/cardigan',
      },
    ],
  },
  {
    category: 'Accessory',
    path: '/accessory',
    subcategories: [
      {
        category: 'Bag',
        path: '/accessory/bag',
      },
    ],
  },
]

const Navbar = () => {
  return (
    <>
      <Ust />
      <header className='bg-white border-b border-gray-200 z-50 sticky'>
        <nav className='container relative flex justify-between items-center h-[75px]'>
          <ul className='flex gap-4'>
            {navLinks.map((item) => {
              if (item.focused) {
                return (
                  <li key={item.path} className='flex items-center'>
                    <Link
                      href={item.path}
                      className={`uppercase ${item.focused ? 'text-primary' : 'text-secondary'} text-sm font-bold `}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              } else {
                return (
                  // <NavDropdown>
                  //   <li
                  //     className={`flex items-start gap-[2px] bg-red-500 hover:text-primary uppercase ${
                  //       item.focused ? 'text-primary' : 'text-secondary'
                  //     } text-sm font-bold`}
                  //   >
                  //     <Link href={item.path}>{item.label}</Link>
                  //     <HiChevronDown fontSize={18} />
                  //   </li>
                  // </NavDropdown>

                  <Dropdown
                    className='mt-12 !p-8'
                    withOverlay
                    fullSize
                    trigger={
                      <li
                        className={`flex items-start gap-[2px] hover:text-primary uppercase ${
                          item.focused ? 'text-primary' : 'text-secondary'
                        } text-sm font-bold`}
                      >
                        <Link href={item.path}>{item.label}</Link>
                        <HiChevronDown fontSize={18} />
                      </li>
                    }
                    type='hover'
                  >
                    <nav className='grid grid-cols-4 gap-6'>
                      {data.map((item) => (
                        <div key={item.path}>
                          <Link
                            href={item.path}
                            className='font-bold uppercase font-display block mb-2 transition duration-100 ease-in-out hover:text-primary'
                          >
                            {item.category}
                          </Link>
                          <ul>
                            {item.subcategories.map((item) => (
                              <li key={item.path} className='mb-2 last:mb-0'>
                                <Link
                                  href={item.path}
                                  className='font-medium  text-text font-body transition duration-100 ease-in-out hover:text-secondary'
                                >
                                  {item.category}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </nav>
                  </Dropdown>
                )
              }
            })}

            {/* {navLinks.map((item) => (
              <li key={item.path} className='flex items-center'>
                <Link
                  href={item.path}
                  className={`uppercase ${item.focused ? 'text-primary' : 'text-secondary'} text-sm font-bold `}
                >
                  {item.label}
                </Link>
              </li>
            ))} */}
          </ul>
          <div className='absolute left-1/2 -translate-x-1/2'>
            <Logo />
          </div>

          <NavActions />
          <MobileMenu />
        </nav>
      </header>
    </>
  )
}

export default Navbar
