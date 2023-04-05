import Image from "next/image"
import { FC } from "react"
import { IconType } from "react-icons/lib"

interface ServiceIconProps {
    shape: string
    icon: IconType
}

const ServiceIcon:FC<ServiceIconProps> = ({shape, icon: Icon}) => {
  return (
    <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
        <Icon className="text-3xl z-1 text-white" />
        <Image className="absolute group-hover:rotate-[30deg] transition-transform duration-500" width={120} height={120} alt="icon" src='/images/services-shape.svg' />
        <Image className="absolute" width={77} height={77} alt="icon" src={shape} />
    </div>
  )
}

export default ServiceIcon