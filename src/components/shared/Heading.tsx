import clsx from 'clsx'
import React from 'react'
import Line from './Line'

interface IHeading {
  title: string
  withLine?: boolean
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  color?: 'light' | 'dark'
}

const colors = {
  light: 'text-white',
  dark: 'text-secondary',
}

const Heading: React.FC<IHeading> = ({ title, withLine, as = 'h3', color = 'dark', className }) => {
  const Tag = as
  return (
    <div>
      {withLine && <Line />}
      <Tag className={clsx('font-display font-bold text-2xl mt-2 uppercase', colors[color], className)}>{title}</Tag>
    </div>
  )
}

export default Heading
