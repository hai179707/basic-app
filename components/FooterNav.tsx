import Link from "next/link"
import { FC } from "react"

interface FooterNavProps {
    title: string,
    items: {url?: string, text: string}[],
    className?: string
}

const FooterNav: FC<FooterNavProps> = ({title, items, className}) => {
  return (
    <div className={className}>
        <div className="lg:px-5">
            <h4 className="text-2xl font-semibold pb-5">{title}</h4>
            <ul className="text-secondary">
                {items.map((item, index) => {
                    if(item.url) {
                        return <li key={index} className="py-2"><Link href={item.url} className="hover:text-blue transition-colors duration-500">{item.text}</Link></li>
                    }
                    else {
                        return <li key={index} className="py-2">{item.text}</li>
                    }
                })}
            </ul>
        </div>
    </div>
  )
}

export default FooterNav