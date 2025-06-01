'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const logos = [
  {
    src: 'https://dansolutions.vn/wp-content/uploads/2024/05/tdf-logo.webp',
    alt: 'TDF Logo',
  },
  {
    src: 'https://dansolutions.vn/wp-content/uploads/2024/05/logo-3.png',
    alt: 'Logo 3',
  },
  {
    src: 'https://dansolutions.vn/wp-content/uploads/2024/05/Logo_Vietnam_Bike_Tours.jpg',
    alt: 'Vietnam Bike Tours',
  },
  {
    src: 'https://dansolutions.vn/wp-content/uploads/2024/05/dougologo_1.png',
    alt: 'Dougo Logo',
  },
  {
    src: 'https://dansolutions.vn/wp-content/uploads/2024/11/Screenshot-2024-11-01-at-19.56.34.png',
    alt: 'Trạm Mây',
  },
  {
    src: 'https://dansolutions.vn/wp-content/uploads/2024/05/logo-fastcare-155x28-01.webp',
    alt: 'Fastcare',
  },
  {
    src: 'https://dansolutions.vn/wp-content/uploads/2024/11/Screenshot-2024-11-01-at-15.43.51.png',
    alt: 'Skylink',
  },
]

export default function Partner() {
  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">ĐỐI TÁC & KHÁCH HÀNG</h2>
        <div className="w-20 h-1 mx-auto mt-2 bg-green-600 rounded-full" />
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={15}
        slidesPerView={5}
        loop
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
        className="max-w-6xl mx-auto px-4"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="object-contain h-20 transition duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
