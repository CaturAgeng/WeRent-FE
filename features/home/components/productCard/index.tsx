import Image from "next/image";
import { ProductCardProp } from "features/home";
// import Link from "next/link"

export default function ProductCard({ src, alt, title, description }: ProductCardProp) {
    return (
        // <Link href={href} passHref>
            <div className="w-full h-72 border-2 border-gray-200 rounded-xl overflow-hidden flex-col cursor-pointer hover:border-green-900">
                <div className="relative w-full h-3/4 flex">
                    <Image
                    src={src}
                    fill
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                    alt={alt}
                    />
                </div>
                <div className="w-full h-1/4 bg-white px-4 flex flex-col justify-center">
                    <h1 className="font-semibold text-sm">{title}</h1>
                    <p className="text-gray-400 text-xs">{description}</p>
                </div>
            </div>
        // </Link>
    );
}