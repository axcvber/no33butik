import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../shared/Button'
import { BiShoppingBag, BiSearch, BiHeart } from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import IconButton from '../shared/IconButton'

interface IProductCard {
  item: any
}

const ProductCard: React.FC<IProductCard> = ({ item }) => {
  return (
    <div className='shadow-md overflow-hidden rounded-3xl'>
      <div className='relative'>
        <Link href={`/product/${item.handle}`}>
          <Image
            src={item.featuredImage.url}
            alt='category'
            width={300}
            height={400}
            placeholder='blur'
            blurDataURL={item.featuredImage.url}
            className='object-cover w-full max-h-[300px]'
            sizes='100vw'
          />
        </Link>
        <div className='absolute top-4 left-4 flex flex-col items-start gap-1.5'>
          {/* <div className=' bg-secondary  px-5 py-1.5 leading-[1] rounded-full shadow-sm'>
            <span className='text-white font-medium uppercase text-xs'>New</span>
          </div> */}
          <div className='bg-red-500  px-5 py-1.5 rounded-full leading-[1] shadow-sm'>
            <span className='text-white font-medium uppercase text-xs'>-75%</span>
          </div>
        </div>

        <div className='absolute top-4 right-4 text-primary cursor-pointer hover:opacity-60 select-none'>
          <AiOutlineHeart fontSize={30} />
        </div>
      </div>

      <div className='w-full p-5 flex justify-between items-end gap-2'>
        <div className='flex flex-col gap-2'>
          <span className='text-xs font-medium text-primary'>{item.productType}</span>
          <Link href={`/product/${item.handle}`} className='font-[600] text-secondary hover:text-text transition'>
            {item.title}
          </Link>
          <div className='flex items-center gap-2'>
            <span className='text-xl font-display font-[600] text-red-400'>
              ₺{item.priceRange.minVariantPrice.amount}
            </span>
            <span className='text-sm line-through font-display text-text'>
              ₺{item.compareAtPriceRange.minVariantPrice.amount}
            </span>
          </div>
        </div>
        <IconButton icon={<BiShoppingBag />} size='large' rounded />
      </div>
    </div>
  )
}

export default ProductCard
