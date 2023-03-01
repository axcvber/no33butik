import NextImage from '@/components/layout/NextImage'
import Heading from '@/components/shared/Heading'
import Line from '@/components/shared/Line'
import { cls } from '@/utils/helpers/cls'

import React, { useState } from 'react'
import { FaInstagram } from 'react-icons/fa'

const data = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/da7mdxekb/image/upload/v1676069234/14092022-6_1_ijrshk.jpg',
    link: '/',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/da7mdxekb/image/upload/v1675959057/leopar-desen-katli-sifon-elbise-elbise-5a8ccc_mfbzms.jpg',
    link: '/',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/da7mdxekb/image/upload/v1675991078/onu-kruvaze-kemerli-siyah-tulum-tulum-2b54-4_llfhif.jpg',
    link: '/',
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/da7mdxekb/image/upload/v1676040816/Rectangle_19_zoprg7.jpg',
    link: '/',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/da7mdxekb/image/upload/v1675991078/onu-kruvaze-kemerli-siyah-tulum-tulum-2b54-4_llfhif.jpg',
    link: '/',
  },
]

const InstGallery = () => {
  return (
    <section className='container max-w-7xl my-10'>
      <div className='flex gap-12 items-start md:items-center flex-col md:flex-row'>
        <div className='hidden md:block rotate-180 select-none self-end mb-10' style={{ writingMode: 'vertical-rl' }}>
          <span className='text-secondary font-medium text-xl'>@no33butik</span>
        </div>
        <div>
          <Heading withLine title='Check our instagram' />

          <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 rounded-md overflow-hidden shadow-md mt-4'>
            {data.map((item, inx) => {
              return (
                <React.Fragment key={item.id}>
                  <li className={'flex max-w-[200px] max-h-[200px] group overflow-hidden'}>
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex group-hover:scale-105 group-hover:after:bg-[rgba(0,0,0,0.3)] relative duration-300 ease-in-out after:transition-colors after:duration-300  after:absolute after:w-full after:h-full'
                    >
                      <NextImage
                        priority
                        width={200}
                        height={200}
                        src={item.image}
                        alt='insta'
                        className='object-cover w-full h-auto'
                      />
                    </a>
                  </li>

                  {inx === 2 && (
                    <li className='bg-primary hover:bg-primary-light transition-colors duration-300'>
                      <a
                        href={'/'}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-full h-full relative flex justify-center items-center text-4xl text-white'
                      >
                        <FaInstagram />
                      </a>
                    </li>
                  )}
                </React.Fragment>
              )
            })}
          </ul>
        </div>

        <div className='max-w-sm flex-1'>
          <h6 className='text-4xl font-display lowercase font-medium text-primary mb-2'>Stil</h6>
          <Line />
          <h6 className='text-4xl font-display lowercase font-medium text-secondary mt-2'>kültür</h6>

          <p className='text-text my-4'>
            Kültürümüz neşeyi, mutluluğu temsil eder, yaratıcılık, başarı, güç ve güçlendirir markamızı takip eden
            bayanlar.
          </p>
          <span className='text-3xl text-primary'>#no33butik</span>
        </div>
      </div>
    </section>
  )
}

export default InstGallery
