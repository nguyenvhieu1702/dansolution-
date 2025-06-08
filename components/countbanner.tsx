'use client'

import CountUp from 'react-countup'
import { Briefcase, Users, DollarSign } from 'lucide-react'

const stats = [
  {
    icon: <Briefcase size={40} className="text-white" />,
    value: 5,
    label: 'Lĩnh Vực',
  },
  {
    icon: <Users size={40} className="text-white" />,
    value: 20,
    label: 'Khách hàng',
  },
  {
    icon: <DollarSign size={40} className="text-white" />,
    value: 40,
    label: 'Dự án',
  },
]

export default function CountBanner() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 overflow-hidden"
      style={{ backgroundImage: "url('/images/banner-dan-2.jpg')" }} 
    >

      <div className="absolute inset-0 bg-black opacity-0 z-0" />

  
      <img
        src='/images/banner-dan-3.jpg' 
        alt="overlay image"
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-60" 
      />

 
      <div className="relative z-20 max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-62">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-white text-center">
            <div className="bg-white/10 rounded-full p-8 mb-4">{item.icon}</div>
            <p className="text-[28px] font-bold">
              <CountUp end={item.value} duration={2.5} />+
            </p>
            <p className="text-base">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
