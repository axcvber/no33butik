import { ApiConfig } from '@/lib/common/types/api'
import { Customer, CustomerCreateInput, CustomerUserError } from '../schema'
import { customerCreateMutation } from '../utils/mutations'

type SuccessResponse = {
  customer: Customer
}

type ErrorResponse = {
  customerUserErrors: CustomerUserError | []
}

interface CreateTokenResponse {
  customerCreate: SuccessResponse & ErrorResponse
}

const customerSignup = async (options: { config: ApiConfig; variables: CustomerCreateInput }) => {
  try {
    const { config, variables } = options
    const { data } = await config.fetch<CreateTokenResponse>({
      query: customerCreateMutation,
      variables: {
        input: variables,
      },
    })
    console.log('data.customerCreate.customer', data.customerCreate.customer)

    return data.customerCreate.customer
  } catch (error) {
    console.log('Error', error)
  }
}

export default customerSignup
