import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cls } from '@/utils/helpers/cls'

const labelStyles = {
  base: 'relative select-none font-medium flex items-center gap-2 w-full h-full pointer-events-none transition-colors',
  disabled: 'opacity-50',
  align: {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  },
  size: {
    small: 'text-xs [&_svg]:text-base',
    medium: 'text-sm [&_svg]:text-lg',
    large: 'text-base [&_svg]:text-[22px]',
  },
  variant: {
    contained: {
      inherit: 'text-white',
      primary: 'text-white',
      secondary: 'text-white',
      error: 'text-white',
    },
    outlined: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      inherit: 'text-gray-500',
      error: 'text-red-500',
    },
    ghost: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      inherit: 'text-gray-500',
      error: 'text-red-500',
    },
    link: {
      inherit: 'underline text-gray-500 group-hover:text-gray-600',
      primary: 'underline text-primary group-hover:text-primary-dark',
      secondary: 'underline text-secondary group-hover:text-black',
      error: 'underline text-red-500 group-hover:text-red-600',
    },
  },
}

const buttonStyles = {
  base: 'relative whitespace-nowrap inline-flex w-fit outline-none group',
  disabled: 'cursor-not-allowed pointer-events-none',
  fullWidth: '!w-full',
  noPaddings: '!p-0',
  size: {
    small: 'px-3 py-2.5',
    medium: 'px-5 py-2.5',
    large: 'px-6 py-2.5',
  },
}

const styles = {
  base: 'rounded-md absolute top-0 left-0 w-full h-full transition-colors group-focus-visible:ring-4 group-focus-visible:ring-blue-300',
  disabled: 'opacity-30',
  rounded: '!rounded-full',
  variant: {
    contained: {
      base: 'shadow-md',
      primary: 'bg-primary hover:bg-primary-dark',
      secondary: 'bg-secondary hover:bg-secondary-dark',
      inherit: 'bg-gray-500 hover:bg-gray-600',
      error: 'bg-red-500 hover:bg-red-600',
    },
    outlined: {
      base: 'border',
      primary: 'border-primary-light hover:bg-primary hover:bg-primary/10',
      secondary: 'border-neutral-400 hover:bg-neutral-500/10',
      inherit: 'border-gray-400 hover:bg-gray-500/10',
      error: 'border-red-500 hover:bg-red-500/10',
    },
    ghost: {
      base: '',
      primary: 'hover:bg-primary-dark/10',
      secondary: 'hover:bg-neutral-500/10',
      inherit: 'hover:bg-gray-500/10',
      error: 'hover:bg-red-600/10',
    },
    link: {
      base: '',
      inherit: 'hover:underline disabled:no-underline',
      primary: 'hover:underline disabled:no-underline',
      secondary: 'hover:underline disabled:no-underline',
      error: 'hover:underline disabled:no-underline',
    },
  },
}

type ButtonSize = 'small' | 'medium' | 'large'
type ButtonVariant = 'contained' | 'outlined' | 'ghost' | 'link'
type ButtonColor = 'inherit' | 'primary' | 'secondary' | 'error'
type ButtonAlign = 'left' | 'center' | 'right'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement & HTMLButtonElement> {
  size?: ButtonSize
  variant?: ButtonVariant
  color?: ButtonColor
  align?: ButtonAlign
  children?: ReactNode
  rounded?: boolean
  fullWidth?: boolean
  endIcon?: ReactNode
  startIcon?: ReactNode
  textStyles?: string
  overlayStyles?: string
  as?: 'a' | 'button'
  href?: string
  target?: string
  rel?: string
}

const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      as = 'button',
      variant = 'contained',
      color = 'primary',
      size = 'medium',
      align = 'center',
      rounded,
      disabled,
      startIcon,
      endIcon,
      fullWidth,
      className,
      textStyles,
      overlayStyles,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const Tag = as

    return (
      <Tag
        ref={ref}
        disabled={disabled}
        className={cls(`
        ${buttonStyles.base} 
        ${buttonStyles.size[size]} 
        ${fullWidth && buttonStyles.fullWidth} 
        ${disabled && buttonStyles.disabled}
        ${variant === 'link' && buttonStyles.noPaddings}
        ${className}
        `)}
        type={type}
        {...props}
      >
        <motion.div
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          className={cls(`
        ${styles.base}
        ${styles.variant[variant].base}
        ${styles.variant[variant][color]}
        ${rounded && styles.rounded}
        ${disabled && styles.disabled}
        ${overlayStyles}
        `)}
        />
        <div
          className={cls(`
        ${labelStyles.base}
        ${labelStyles.size[size]}
        ${labelStyles.variant[variant][color]} 
        ${labelStyles.align[align]}
        ${disabled && labelStyles.disabled}
        ${textStyles}`)}
        >
          {startIcon}
          {children}
          {endIcon}
        </div>
      </Tag>
    )
  }
)

export default Button
