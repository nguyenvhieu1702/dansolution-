import Image from "next/image";

interface PostProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export default function Post({ image, title, excerpt, date, category }: PostProps) {
  return (
    <div className="w-[368px]   overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">

      <div className="relative w-full h-60">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{excerpt}</p>
        <div className="mt-4 flex items-center text-xs text-gray-500 gap-2">
          <span>📅 {date}</span>
          <span>•</span>
          <span>📚 {category}</span>
        </div>
      </div>
    </div>
  );
}
