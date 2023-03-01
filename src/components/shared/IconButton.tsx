import { cls } from '@/utils/helpers/cls'
import React, { ReactNode } from 'react'
import Button, { ButtonProps } from './Button'

const styles = {
  size: {
    small: '!p-2',
    medium: '!p-2',
    large: '!p-2 [&_svg]:text-2xl',
  },
}

interface IconButtonProps extends ButtonProps {
  icon: ReactNode
}

const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => {
  const size = props.size || 'medium'
  return (
    <Button
      className={cls(`
      ${styles.size[size]} 
    `)}
      startIcon={icon}
      {...props}
    />
  )
}

export default IconButton
