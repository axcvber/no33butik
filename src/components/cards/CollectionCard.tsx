import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { FiCornerDownRight } from 'react-icons/fi'
import Link from 'next/link'

interface ICollectionCard {
  item: any
}

const CollectionCard: React.FC<ICollectionCard> = ({ item }) => {
  return (
    <Link href={`/collections/${item.handle}`} passHref legacyBehavior>
      <motion.a
        whileHover={{ scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        href='#'
        className='block shadow-md group relative overflow-hidden rounded-3xl'
      >
        <div className='w-full h-full relative group-hover:after:bg-transparent after:block after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.1)] after:transition'>
          <Image
            src={item.image.url}
            alt={item.image.altText}
            width={300}
            height={400}
            placeholder='blur'
            blurDataURL={item.image.url}
            className='object-cover w-full max-h-[380px]'
            sizes='100vw'
          />
        </div>
        <div className='absolute bottom-0 left-0 w-full px-5 py-3 bg-[rgba(0,0,0,0.3)]'>
          <div className='flex items-center gap-2'>
            <h6 className='text-lg font-display font-medium text-white'>{item.title}</h6>
            <FiCornerDownRight fontSize={20} color='#fff' />
          </div>
        </div>
      </motion.a>
    </Link>
  )
}

export default CollectionCard
