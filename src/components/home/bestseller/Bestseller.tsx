import ProductCard from '@/components/cards/ProductCard'
import Heading from '@/components/shared/Heading'
import React from 'react'

const data = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/da7mdxekb/image/upload/v1675991078/onu-kruvaze-kemerli-siyah-tulum-tulum-2b54-4_llfhif.jpg',
    name: 'Bej Leopar Desen Likralı Kruvaze Elbise',
    price: {
      currentPrice: '₺460,00',
      fullPrice: '₺660,00',
    },
    category: 'Elbise',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/da7mdxekb/image/upload/v1675991078/onu-kruvaze-kemerli-siyah-tulum-tulum-2b54-4_llfhif.jpg',
    name: 'Bej Leopar Desen Likralı Kruvaze Elbise',
    price: {
      currentPrice: '₺460,00',
      fullPrice: '₺660,00',
    },
    category: 'Elbise',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/da7mdxekb/image/upload/v1675991078/onu-kruvaze-kemerli-siyah-tulum-tulum-2b54-4_llfhif.jpg',
    name: 'Bej Leopar Desen Likralı Kruvaze Elbise',
    price: {
      currentPrice: '₺460,00',
      fullPrice: '₺660,00',
    },
    category: 'Elbise',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/da7mdxekb/image/upload/v1675991078/onu-kruvaze-kemerli-siyah-tulum-tulum-2b54-4_llfhif.jpg',
    name: 'Bej Leopar Desen Likralı Kruvaze Elbise',
    price: {
      currentPrice: '₺460,00',
      fullPrice: '₺660,00',
    },
    category: 'Elbise',
  },
]

interface IBestseller {
  data: any
}

const Bestseller: React.FC<IBestseller> = ({ data }) => {
  return (
    <section className='container max-w-7xl'>
      <Heading title='Şu anda popülers' />
      <ul className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5 gap-8'>
        {data.map((item: any) => (
          <li key={item.node.id}>
            <ProductCard item={item.node} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Bestseller
