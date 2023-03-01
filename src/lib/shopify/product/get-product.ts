import { Product as ShopifyProduct } from '../schema'
import { Product } from '@/lib/common/types/product'
import { getProductQuery } from '../utils/queries'
import { normalizeProduct } from '../utils'
import { ApiConfig, Variables } from '@/lib/common/types/api'

type FetchType = {
  productByHandle: ShopifyProduct
}

type ReturnType = {
  product: Product | null
}

const getProduct = async (options: { config: ApiConfig; variables: Variables }): Promise<ReturnType> => {
  const { config, variables } = options

  const { data } = await config.fetch<FetchType>({
    query: getProductQuery,
    variables,
  })

  const { productByHandle } = data

  return {
    product: productByHandle ? normalizeProduct(productByHandle) : null,
  }
}

export default getProduct
