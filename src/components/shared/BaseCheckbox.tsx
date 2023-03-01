import { cls } from '@/utils/helpers/cls'
import React, { forwardRef, InputHTMLAttributes } from 'react'

const styles = {
  base: 'shadow-none border rounded-sm !ring-offset-0 focus:ring-0',
  state: {
    normal: 'border-gray-300',
    error: 'border-red-400',
    disabled: 'border-gray-100',
  },
  size: {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-5 h-5',
  },
  color: {
    primary: 'text-primary',
    secondary: 'text-secondary',
  },
}

const labelStyles = {
  base: 'select-none',
  state: {
    normal: 'text-secondary',
    error: 'text-red-500',
    disabled: 'text-gray-300',
  },
  size: {
    small: 'text-xs ml-1.5',
    medium: 'text-sm ml-2',
    large: 'text-base ml-2',
  },
}

type InputSize = 'small' | 'medium' | 'large'
type InputColor = 'primary' | 'secondary'

export interface IBaseCheckbox extends InputHTMLAttributes<HTMLInputElement> {
  boxSize?: InputSize
  color?: InputColor
  label: string
  type?: string
  error?: boolean
  disabled?: boolean
}

const BaseCheckbox = forwardRef<HTMLInputElement, IBaseCheckbox>(
  (
    {
      label,
      type = 'text',
      error = false,
      disabled = false,
      className,
      boxSize = 'medium',
      color = 'secondary',
      ...rest
    },
    ref
  ) => (
    <div className={cls(`flex items-center ${className}`)}>
      <input
        ref={ref}
        type='checkbox'
        disabled={disabled}
        className={cls(`
          ${styles.base}
          ${styles.color[color]}
          ${styles.size[boxSize]}
          ${disabled ? styles.state.disabled : error ? styles.state.error : styles.state.normal}
        `)}
        {...rest}
      />
      <label
        htmlFor={rest.id}
        className={cls(`
          ${labelStyles.base}
          ${labelStyles.size[boxSize]}
          ${disabled ? labelStyles.state.disabled : error ? labelStyles.state.error : labelStyles.state.normal}
        `)}
      >
        {label}
      </label>
    </div>
  )
)

export default BaseCheckbox
