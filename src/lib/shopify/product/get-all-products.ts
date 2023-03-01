import { normalizeProduct } from '../utils'
import { ProductConnection } from '../schema'
import { ApiConfig } from '@/lib/common/types/api'
import { getAllProductsQuery } from '../utils/queries'
import { Product } from '@/lib/common/types/product'

type ReturnType = {
  products: ProductConnection
}

const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    query: getAllProductsQuery,
  })

  const products = data.products.edges.map(({ node: product }) => normalizeProduct(product)) ?? []

  return products
}

export default getAllProducts
