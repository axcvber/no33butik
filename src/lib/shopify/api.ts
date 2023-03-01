const domain = process.env.SHOPIFY_STORE_DOMAIN as string
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN as string

export async function ShopifyData(query: string) {
  const URL = `https://${domain}/api/2023-01/graphql.json`

  const options = {
    endpoint: URL,
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  }

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json()
    })

    return data
  } catch (error) {
    throw new Error('Products not fetched')
  }
}

export async function getAllProducts() {
  const query = `{
    products(first: 250) {
      edges {
        node {
          id
          title
          handle
          productType
          featuredImage {
            url
            altText
          }
          priceRange {
            minVariantPrice {
              amount
            }
          }
          compareAtPriceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query)

  const allProducts = response.data.products.edges ? response.data.products.edges : []

  return allProducts
}

export async function getAllCollections() {
  const query = `{
    collections(first: 4) {
      edges {
        node {
          id
          title
          handle
          image {
            url
            altText
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query)

  const allCollections = response.data.collections.edges ? response.data.collections.edges : []

  return allCollections
}

export async function getAllProductPaths() {
  const query = `query getAllProductPaths($first: Int = 250, $cursor: String) {
    products(first: $first, after: $cursor) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          handle
        }
        cursor
      }
    }
  }`

  const response = await ShopifyData(query)

  const allProductPaths = response.data.products.edges ? response.data.products.edges : []

  return allProductPaths
}

export async function getProduct(handle: string) {
  const query = `
  {
    product(handle: "${handle}") {
      id
      handle
      title
      productType
      description
      featuredImage {
        url
        altText
      }
      priceRange {
        minVariantPrice {
          amount
        }
      }
      compareAtPriceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
          }
        }
      }
    }
  }`

  const response = await ShopifyData(query)
  console.log('response', response)

  const product = response.data?.product ? response.data.product : null

  return product
}

interface CustomerCreateInput {
  email: string
  password: string
  firstName: string
  lastName: string
}

interface CustomerAccessTokenCreateInput {
  email: string
  password: string
}

export async function signUpCustomer(credentials: CustomerCreateInput) {
  const query = `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: ${credentials}) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        id
        email
        firstName
        lastName
      }
    }
  }`

  const response = await ShopifyData(query)
  console.log('customerCreate', response)

  const customer = response.data?.customerCreate.customer ? response.data?.customerCreate.customer : null

  return customer
}

export async function signInCustomer() {
  const query = `
  mutation customerAccessTokenCreate {
    customerAccessTokenCreate(input: {email: "test2@exampl2e.com", password: "HiZqFuDvDdQ7"}) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }`

  const response = await ShopifyData(query)
  console.log('signInCustomer', response)

  const customerAccessToken = response.data?.customerAccessTokenCreate.customerAccessToken.accessToken
  console.log('customerAccessToken', customerAccessToken)

  if (customerAccessToken) {
    const query2 = `
    query {
      customer(customerAccessToken: "${customerAccessToken}") {
        id
        firstName
        lastName
        acceptsMarketing
        email
        phone
      }
    }`
    const response = await ShopifyData(query2)
    console.log('customer data', response)

    const customer = response.data?.customer ? response.data?.customer : null

    return customer
  }
}

// export async function shopifyFetch({ query, variables = {} }) {
//   const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
//   const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

//   try {
//     const result = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'X-Shopify-Storefront-Access-Token': key
//       },
//       body: { query, variables } && JSON.stringify({ query, variables })
//     });

//     return {
//       status: result.status,
//       body: await result.json()
//     };
//   } catch (error) {
//     console.error('Error:', error);
//     return {
//       status: 500,
//       error: 'Error receiving data'
//     };
//   }
// }
