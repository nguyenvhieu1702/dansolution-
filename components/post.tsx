import Image from "next/image";
import Link from "next/link";
import { FaFolder, FaRegClock, FaArrowRight } from "react-icons/fa";

export interface PostProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

export default function Post({ image, title, excerpt, date, category, slug }: PostProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="group relative w-[368px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
        <div className="relative w-full h-60">
          <Image src={image} alt={title} fill className="object-cover" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          >
            <FaArrowRight className="text-white text-2xl" />
          </div>
        </div>
        <div className="p-4 bg-white">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-600 mt-2">{excerpt}</p>
          <div className="mt-4 flex items-center text-xs text-gray-500 gap-4">
            <span className="flex items-center gap-1">
              <FaRegClock className="text-gray-400" /> {date}
            </span>
            <span className="flex items-center gap-1">
              <FaFolder className="text-gray-400" /> {category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
