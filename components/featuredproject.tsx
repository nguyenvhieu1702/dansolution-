'use client'

import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    src: '/images/project-1.png',
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
      <div className="flex justify-center flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-[13px] font-medium rounded-md px-[12px] py-[8px] mr-[3px] mb-[3px] transition
        ${active === cat
                ? 'bg-[#555555] opacity-80 text-white'
                : 'bg-[#333333] text-white hover:bg-[#555555] hover:opacity-80'
              }
`}
          >
            {cat}
          </button>
        ))}
      </div>


      <div className="flex flex-wrap justify-center gap-3 px-4 md:px-0 max-w-6xl mx-auto">
        {filtered.map((project, index) => (
          <div
            key={index}
            className="w-[367.95px] h-[248px] box-border border overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <Image
              src={project.src}
              alt={project.alt}
              width={368} // bạn có thể làm tròn
              height={248}
              unoptimized
              className="w-full h-full object-cover"
            />
          </div>

        ))}
      </div>

    </section>
  )
}
