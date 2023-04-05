import Image from "next/image"
import { FC } from "react"
import Section from "./Section"

const Brands:FC = () => {
  return (
    <Section pt={90}>
        <div className="flex justify-center flex-wrap">
            <div className="w-1/2 sm:w-1/3 md:w-1/5 flex items-center justify-center pt-8">
                <Image width={126} height={28} className="px-3 sm:px-5 md:px-6 lg:px-8 opacity-50 -z-1" alt="brand" src='/images/brand-1.png' style={{width: '100%', maxWidth: '200px', height: 'auto'}} />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/5 flex items-center justify-center pt-8">
                <Image width={126} height={28} className="px-3 sm:px-5 md:px-6 lg:px-8 opacity-50 -z-1" alt="brand" src='/images/brand-2.png' style={{width: '100%', maxWidth: '200px', height: 'auto'}} />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/5 flex items-center justify-center pt-8">
                <Image width={126} height={28} className="px-3 sm:px-5 md:px-6 lg:px-8 opacity-50 -z-1" alt="brand" src='/images/brand-3.png' style={{width: '100%', maxWidth: '200px', height: 'auto'}} />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/5 flex items-center justify-center pt-8">
                <Image width={126} height={28} className="px-3 sm:px-5 md:px-6 lg:px-8 opacity-50 -z-1" alt="brand" src='/images/brand-4.png' style={{width: '100%', maxWidth: '200px', height: 'auto'}} />
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/5 flex items-center justify-center pt-8">
                <Image width={126} height={28} className="px-3 sm:px-5 md:px-6 lg:px-8 opacity-50 -z-1" alt="brand" src='/images/brand-5.png' style={{width: '100%', maxWidth: '200px', height: 'auto'}} />
            </div>
        </div>
    </Section>
  )
}

export default Brands