import Image from "next/image"
import logoImg from '@/public/assets/logoImg.jpg'
const logo = () => {
  return (
    <Image src={logoImg} alt="logo" width={90} height={90}/>
  )
}

export default logo