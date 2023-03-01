import React, { useEffect, useLayoutEffect } from 'react'
import BaseInput from '../shared/BaseInput'
import { IField } from './Field'
import { useController } from 'react-hook-form'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi'
import { cls } from '@/utils/helpers/cls'
import { IoClose } from 'react-icons/io5'
import { FiCheck } from 'react-icons/fi'
import { CreatePasswordSchema } from '@/validation/schemas'

const PasswordField: React.FC<IField> = ({ name, control, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false)
  const [showPassIcon, setShowPassIcon] = React.useState(false)
  const [initErrors, setInitErrors] = React.useState<string[] | undefined>([])
  const [errors, setErrors] = React.useState<string[] | undefined>([])
  const wrapperRef = React.useRef<HTMLInputElement | null>(null)
  useOnClickOutside([wrapperRef], () => setShowPassIcon(false))

  const {
    field,
    fieldState: { error, isDirty },
  } = useController({
    name,
    control,
    defaultValue: '',
  })

  const getInitErrors = () => {
    const result = CreatePasswordSchema.safeParse({ password: '' })
    if (!result.success) {
      const errors = result.error.format().password?._errors
      setInitErrors(errors)
    }
  }

  const getSyncErrors = async (value: string) => {
    const result = await CreatePasswordSchema.safeParseAsync({ password: value }, { async: true })
    if (!result.success) {
      const errors = result.error.format().password?._errors
      setErrors(errors)
    } else {
      setErrors([])
    }
  }

  useLayoutEffect(() => {
    getInitErrors()
  }, [])

  useEffect(() => {
    getSyncErrors(field.value)
  }, [field.value])

  return (
    <div ref={wrapperRef}>
      <BaseInput
        {...field}
        id={name}
        error={!!error}
        errorText={'Password does not meet minimal requirements.'}
        type={showPassword ? 'text' : 'password'}
        onFocus={() => setShowPassIcon(true)}
        endIcon={
          showPassIcon && (
            <div className='cursor-pointer select-none text-gray-600' onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
            </div>
          )
        }
        {...props}
      />
      {isDirty && initErrors && (
        <div className='flex flex-wrap gap-x-2 mt-3 ml-0.5'>
          {initErrors.map((e, inx) => (
            <div className={'flex items-center gap-0.5 text-[11px] [&_svg]:text-[13px]'} key={inx}>
              <span className={cls(`${!errors?.includes(e) ? 'text-secondary font-medium' : 'text-gray-400'}`)}>
                {e}
              </span>
              {errors?.includes(e) ? <IoClose className='text-red-500' /> : <FiCheck className='text-green-500' />}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PasswordField
