import React from 'react'
import CollectionCard from '../cards/CollectionCard'
import Button from '../shared/Button'
import Heading from '../shared/Heading'

interface ICollections {
  data: any
}

const Collections: React.FC<ICollections> = ({ data }) => {
  return (
    <section className='container max-w-7xl'>
      {/* <Button /> */}
      <Heading title='Koleksiyon dişI' />
      <ul className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5 gap-8'>
        {data.map((item: any) => (
          <li key={item.node.id}>
            <CollectionCard item={item.node} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Collections
