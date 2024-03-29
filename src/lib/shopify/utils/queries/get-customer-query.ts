export const getCustomerQuery = `
  query getCustomer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      firstName
      lastName
      displayName
      email
      phone
      tags
      acceptsMarketing
      createdAt
    }
  }
`
export default getCustomerQuery
