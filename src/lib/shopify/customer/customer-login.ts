import { Customer, CustomerAccessToken, CustomerAccessTokenCreateInput, CustomerUserError } from '../schema'
import { ApiConfig, Variables } from '@/lib/common/types/api'
import { customerAccessTokenCreateMutation } from '../utils/mutations'
import getCustomerQuery from '../utils/queries/get-customer-query'
import { getConfig } from '../api/config'
import { setCustomerToken } from '../utils/customer-token'
import throwUserErrors from '../utils/throw-user-errors'

type SuccessResponse = {
  customerAccessToken: CustomerAccessToken
}

type ErrorResponse = {
  customerUserErrors: CustomerUserError | []
}

interface CreateTokenResponse {
  customerAccessTokenCreate: SuccessResponse & ErrorResponse
}

const handleLogin = async (data: any) => {
  try {
    const response = data.customerAccessTokenCreate
    throwUserErrors(response?.customerUserErrors)

    const customerAccessToken = response?.customerAccessToken
    const accessToken = customerAccessToken?.accessToken
    console.log('accessToken', accessToken)

    if (accessToken) {
      const config = getConfig()
      const { data: userData } = await config.fetch<{ customer: Customer }>({
        query: getCustomerQuery,
        variables: {
          customerAccessToken: accessToken,
        },
      })

      setCustomerToken(accessToken)
      console.log('userData', userData)

      return userData
    }
    return null
  } catch (error) {
    console.log('Error', error)
  }
}

// export const handleAutomaticLogin = async (
//   fetch: <T = any, B = Body>(options: FetcherOptions<B>) => Promise<T>,
//   input: CustomerAccessTokenCreateInput
// ) => {
//   try {
//     const loginData = await fetch({
//       query: customerAccessTokenCreateMutation,
//       variables: {
//         input,
//       },
//     })
//     handleLogin(loginData)
//   } catch (error) {}
// }

export const customerLogin = async (options: { config: ApiConfig; variables: CustomerAccessTokenCreateInput }) => {
  const { config, variables } = options
  try {
    const { data } = await config.fetch<CreateTokenResponse>({
      query: customerAccessTokenCreateMutation,
      variables: {
        input: variables,
      },
    })
    console.log('loginData', data)
    return handleLogin(data)
  } catch (error) {}
}

// const customerLogin = async (options: { config: ApiConfig; variables: CustomerAccessTokenCreateInput }) => {
//   try {
//     const { variables } = options
//     console.log('variables suka', variables)
//     const config = getConfig()
//     const { data } = await config.fetch<CreateTokenResponse>({
//       query: customerAccessTokenCreateMutation,
//       variables: {
//         input: variables,
//       },
//     })

//     const accessToken = data.customerAccessTokenCreate.customerAccessToken?.accessToken

//     if (!accessToken) {
//       throw new Error('Invalid credentials')
//     }
//     console.log('accessToken SUKA', accessToken)

//     const { data: userData } = await config.fetch<{ customer: Customer }>({
//       query: getCustomerQuery,
//       variables: {
//         customerAccessToken: accessToken,
//       },
//     })
//     console.log('userData', userData)

//     if (!userData) {
//       throw new Error('Invalid token')
//     }
//     return userData
//   } catch (error) {
//     console.log('Error', error)
//   }
// }

export default customerLogin
