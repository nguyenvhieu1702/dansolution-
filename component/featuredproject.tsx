'use client'

import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    src: '/images/project-1.png', // Thay bằng ảnh của bạn trong thư mục public/images
    alt: 'Nam Canada',
    type: 'Website',
  },
  {
    src: '/images/project-2.png',
    alt: 'Fastcare',
    type: 'Mobile',
  },
  {
    src: '/images/project-3.png',
    alt: 'Tamda Express',
    type: 'Website',
  },
]

const categories = ['All', 'Mobile', 'Website']

export default function FeaturedProject() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.type === active)

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">DỰ ÁN TIÊU BIỂU</h2>
      <div className="w-24 h-1 bg-black mx-auto mb-8" />

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-md font-medium transition ${
              active === cat ? 'bg-black text-white' : 'bg-gray-200 text-black hover:bg-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0 max-w-6xl mx-auto">
        {filtered.map((project, index) => (
          <div key={index} className="border rounded-md overflow-hidden shadow-sm hover:shadow-md transition">
            <Image
              src={project.src}
              alt={project.alt}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
