import { z } from 'zod'

export type SignInFormInputs = z.infer<typeof SignInFormSchema>
export type SignUpFormInputs = z.infer<typeof SignUpFormSchema>
export type RecoverPassInputs = z.infer<typeof RecoverPassFormSchema>
export type PersonalInfoInputs = z.infer<typeof PersonalInfoFormSchema>

export const SignInFormSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  password: z.string().min(6, 'Please choose a longer password').max(256, 'Consider using a short password'),
  rememberMe: z.boolean().optional(),
})

const SignUpBaseFormSchema = z.object({
  firstName: z.string().min(1, 'First Name must be atleast 1 characters long!'),
  lastName: z
    .string()
    .min(1, 'Username must be atleast 1 characters long!')
    .max(10, 'Consider using shorter username.'),
  email: z
    .string({
      required_error: 'Please enter a email address.',
    })
    .email('Please enter a valid email address.'),
  acceptsMarketing: z.boolean().optional(),
})

export const CreatePasswordSchema = z.object({
  password: z
    .string()
    .min(8, 'Minimum of 8 characters')
    .regex(RegExp('(.*[A-Z].*)'), '1 uppercase letter')
    .regex(RegExp('(.*[a-z].*)'), '1 lowercase letter')
    .regex(RegExp('(.*\\d.*)'), '1 number'),
})

export const SignUpFormSchema = SignUpBaseFormSchema.merge(CreatePasswordSchema)

export const RecoverPassFormSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
})

export const PersonalInfoFormSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
  firstName: z.string().min(1, 'First Name must be atleast 1 characters long!'),
  lastName: z
    .string()
    .min(1, 'Username must be atleast 1 characters long!')
    .max(10, 'Consider using shorter username.'),
  dateOfBirth: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  postcode: z.string().optional(),
})
