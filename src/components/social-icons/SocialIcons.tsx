import getSocialIcon from '@/utils/helpers/getSocialIcon'
import React from 'react'
import Button from '../shared/Button'
import IconButton from '../shared/IconButton'

const icons = [
  {
    id: 1,
    link: '/',
    icon: 'instagram',
  },
  {
    id: 2,
    link: '/',
    icon: 'facebook',
  },
  {
    id: 3,
    link: '/',
    icon: 'twitter',
  },
]

const SocialIcons = () => {
  return (
    <ul className='flex gap-3'>
      {icons.map((item) => (
        <li key={item.id}>
          <IconButton
            as='a'
            href={item.link}
            color='secondary'
            overlayStyles='hover:!bg-gray-100/10'
            icon={getSocialIcon(item?.icon)}
            target='_blank'
            rel='noopener noreferrer'
          />
        </li>
      ))}
    </ul>
  )
}

export default SocialIcons
