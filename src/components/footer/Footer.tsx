import { navLinks } from '@/common/navLinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiChevronDown } from 'react-icons/hi'
import Button from '../shared/Button'
import Dropdown from '../shared/dropdown/Dropdown'
import HoverDropdown from '../shared/dropdown/HoverDropdown'
import SocialIcons from '../social-icons/SocialIcons'

const collectionArr = [
  {
    path: '/top-clothing',
    label: 'Top Clothing',
  },
  {
    path: '/underwear',
    label: 'Underwear',
  },
  {
    path: '/outerwear',
    label: 'Outerwear',
  },
  {
    path: '/accessory',
    label: 'Accessory',
  },
]

const helpArr = [
  {
    path: '/order-status',
    label: 'Order status',
  },
  {
    path: '/shipping-delivery',
    label: 'Shipping & delivery',
  },
  {
    path: '/returns',
    label: 'Returns',
  },
  {
    path: '/contact-us',
    label: 'Contact us',
  },
]

const policies = [
  {
    path: '/terms',
    label: 'Terms of Use',
  },
  {
    path: '/privacy-policy',
    label: 'Privacy Policy',
  },
  {
    path: '/cookie-usage',
    label: 'Cookie Usage',
  },
]

const Footer = () => {
  return (
    <footer className='bg-[#111] mt-auto pt-10 pb-3 text-neutral-500 text-xs font-medium'>
      <div className='container max-w-7xl'>
        <nav className='flex justify-between flex-wrap gap-8'>
          <div>
            <h3 className='footer-heading'>Navigation</h3>
            <ul className='footer-list'>
              {navLinks.map((item) => (
                <li key={item.path}>
                  <Link className='footer-link' href={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='footer-heading'>Collection</h3>
            <ul className='footer-list'>
              {collectionArr.map((item) => (
                <li key={item.path}>
                  <Link className='footer-link' href={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='footer-heading'>Get help</h3>
            <ul className='footer-list'>
              {helpArr.map((item) => (
                <li key={item.path}>
                  <Link className='footer-link' href={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='footer-heading'>Payment options</h3>
            <Image width={100} height={100} src='/payment-options.png' alt='payment-options' />
          </div>
          <div className='max-w-xs'>
            <h3 className='footer-heading'>Social Media</h3>
            <p className='leading-6 mb-3'>Follow us on social media to find out the latest updates on out products</p>
            <SocialIcons />
          </div>
        </nav>
        <hr className='border-neutral-800 mt-8 mb-4' />
        <nav className='flex justify-between flex-wrap gap-4 items-center text-neutral-500'>
          <ul className='flex gap-3 flex-wrap'>
            {policies.map((item) => (
              <li key={item.path}>
                <Link className='footer-link' href={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <span>&copy; {new Date().getFullYear()} No33butik, Inc. All Rights Reserved</span>

          <div className='flex items-center gap-3'>
            <div className='flex items-center gap-1'>
              <a
                className='footer-link underline font-semibold'
                href='https://t.me/axcvber'
                target='_blank'
                rel='noopener noreferrer'
              >
                AXCVBER
              </a>
              <span>tarafından düzenlendi</span>
            </div>

            <div className='flex items-center gap-0.5'>
              <span>English</span>
              <HiChevronDown fontSize={18} />
            </div>
            <Dropdown
              trigger={
                <Button
                  textStyles='text-inherit group-hover:!text-white no-underline'
                  size='small'
                  variant='link'
                  color='secondary'
                  endIcon={<HiChevronDown />}
                >
                  English
                </Button>
              }
              type='click'
              placement='top-end'
            >
              <ul className='flex flex-col'>
                <Button
                  align='left'
                  className='!py-2 !px-3'
                  fullWidth
                  startIcon={<Image width={20} height={20} src='/usa.png' alt='usa' />}
                  variant='ghost'
                  color='secondary'
                >
                  English
                </Button>
                <Button
                  align='left'
                  className='!py-2 !px-3'
                  fullWidth
                  startIcon={<Image width={20} height={20} src='/turkey.png' alt='turkey' />}
                  variant='ghost'
                  color='secondary'
                >
                  Turkish
                </Button>
              </ul>
            </Dropdown>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
