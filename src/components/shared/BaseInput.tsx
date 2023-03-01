import React, { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import Label from './Label'
import { cls } from '@/utils/helpers/cls'

const styles = {
  base: 'px-3 py-2.5 flex-1 placeholder-gray-400 font-medium text-gray-600 focus:ring-2 duration-300 transition-all appearance-none w-full rounded-md outline-none border-none',
  state: {
    normal: '',
    error: 'ring-red-400 focus:!ring-red-400 bg-white',
    disabled: 'cursor-default opacity-60 placeholder-gray-300',
  },
  size: {
    small: 'sm:text-xs',
    medium: 'text-sm',
    large: 'text-base',
  },
  variant: {
    outlined: 'ring-1 ring-gray-200',
    filled: 'bg-gray-100 hover:bg-gray-200 focus:bg-white',
  },
  color: {
    primary: 'focus:ring-primary',
    secondary: 'focus:ring-gray-600',
  },
  adornmentLeftSpacing: {
    small: 'pl-8',
    medium: 'pl-9',
    large: 'pl-10',
  },
  adornmentRightSpacing: {
    small: 'pr-8',
    medium: 'pr-9',
    large: 'pr-10',
  },
}

const iconStyles = {
  base: 'absolute inset-y-0 flex items-center',
  size: {
    small: 'text-base',
    medium: 'text-lg',
    large: 'text-xl',
  },
  color: {
    primary: 'text-primary',
    secondary: 'text-gray-500',
  },
}

type InputSize = 'small' | 'medium' | 'large'
type InputVariant = 'outlined' | 'filled'
type InputColor = 'primary' | 'secondary'

export interface IBaseInput extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize
  variant?: InputVariant
  color?: InputColor
  label?: string
  type?: React.HTMLInputTypeAttribute
  error?: boolean
  required?: boolean
  disabled?: boolean
  errorText?: string
  startIcon?: ReactNode
  endIcon?: ReactNode
  inputStyles?: string
}

const BaseInput = forwardRef<HTMLInputElement, IBaseInput>(
  (
    {
      label,
      type = 'text',
      error = false,
      required = false,
      disabled = false,
      className,
      startIcon,
      endIcon,
      errorText = '',
      inputSize = 'medium',
      color = 'secondary',
      variant = 'outlined',
      inputStyles,
      ...rest
    },
    ref
  ) => (
    <div>
      <div className={cls(`relative w-full ${className}`)}>
        {label && <Label name={rest.name || ''} label={label} />}

        {startIcon && (
          <div
            className={cls(`left-0 pl-3 ${iconStyles.base} ${iconStyles.color[color]} ${iconStyles.size[inputSize]}`)}
          >
            {startIcon}
          </div>
        )}

        <input
          ref={ref}
          className={cls(`
          ${styles.base}
          ${styles.color[color]}
          ${disabled ? styles.state.disabled : error ? styles.state.error : styles.state.normal}
          ${styles.size[inputSize]}
          ${styles.variant[variant]}
          ${startIcon && styles.adornmentLeftSpacing[inputSize]}
          ${endIcon && styles.adornmentRightSpacing[inputSize]}
          ${inputStyles}
        `)}
          disabled={disabled}
          required={required}
          type={type}
          {...rest}
        />

        {endIcon && (
          <div
            className={cls(`right-0 pr-3 ${iconStyles.base} ${iconStyles.color[color]} ${iconStyles.size[inputSize]}`)}
          >
            {endIcon}
          </div>
        )}
      </div>
      {error && <span className='block mt-1.5 ml-0.5 text-xs text-red-500'>{errorText}</span>}
    </div>
  )
)

export default BaseInput
