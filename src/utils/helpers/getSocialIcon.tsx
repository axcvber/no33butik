import { BsWhatsapp } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { TbBrandFacebook, TbBrandTelegram } from 'react-icons/tb'
import { FaViber, FaWhatsapp, FaTelegram, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

const getSocialIcon = (iconName?: string) => {
  let Icon
  switch (iconName) {
    case 'instagram':
      Icon = <FaInstagram />
      break
    case 'whatsapp':
      Icon = <FaWhatsapp />
      break
    case 'telegram':
      Icon = <TbBrandTelegram />
      break
    case 'viber':
      Icon = <FaViber />
      break
    case 'facebook':
      Icon = <FaFacebookF />
      break
    case 'twitter':
      Icon = <FaTwitter />
      break
  }
  return Icon
}
export default getSocialIcon
