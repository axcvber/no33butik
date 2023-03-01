import { Product } from '@/lib/common/types/product'
import { getConfig } from '@/lib/shopify/api/config'
import { getProduct } from '@/lib/shopify/product'
import getAllProductsPaths from '@/lib/shopify/product/get-all-products-paths'
import { GetStaticPaths, GetStaticPathsContext, GetStaticPropsContext, NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

interface IProductPage {
  product: Product
}

const ProductPage: NextPage<IProductPage> = ({ product }) => {
  console.log('product', product)

  return (
    <div className='mt-10 container'>
      <h5>{product.name}</h5>
      {/* <h5>{product.description}</h5> */}

      {/* <h5>{product.productType}</h5> */}
      <Image width={200} height={200} alt={product.images[0].alt || ''} src={product.images[0].url} />
      <p>
        ₺{product.price.value} {` `}
        {product.price.currencyCode}
      </p>
      {/* <p className='line-through'>₺{product.compareAtPriceRange.minVariantPrice.amount}</p> */}
      {/* <p>₺{product.priceRange.minVariantPrice.amount}</p>
      <p className='line-through'>₺{product.compareAtPriceRange.minVariantPrice.amount}</p> */}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const config = getConfig()
  const { products } = await getAllProductsPaths(config)

  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

// provide product spefici data to the page
export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  const config = getConfig()

  const { product } = await getProduct({
    config,
    variables: { slug: params?.slug },
  })

  return {
    props: {
      product,
    },
  }
}

// export async function getStaticPaths() {
//   const products = await getAllProductPaths()

//   console.log('products suka', products)

//   const paths = products.map((item: any) => {
//     const slug = String(item.node.handle)

//     return {
//       params: { slug },
//     }
//   })

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
//   console.log('params', params)

//   const product = await getProduct(params!.slug as any)
//   return {
//     props: {
//       product,
//     },
//   }
// }

// export async function getStaticPaths({ locales }: GetStaticPathsContext) {
//   const products = await getAllProductPaths()

//   return {
//     paths: locales
//       ? locales.reduce<string[]>((arr, locale) => {
//           // Add a product path for every locale
//           products.forEach((product: any) => {
//             arr.push(`/${locale}/product/${product.node.handle}`)
//           })
//           return arr
//         }, [])
//       : products.map((product: any) => `/product/${product.node.handle}`),
//     fallback: 'blocking',
//   }
// }

export default ProductPage
