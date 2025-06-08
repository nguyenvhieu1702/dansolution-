'use client'

const testimonials = [
  {
    name: 'Mr. Dung Đinh',
    role: 'CTO of TAMDA GROUP',
    logo: '/images/tamda.png',
    content: `DAN Solutions đã giúp chúng tôi không chỉ xây dựng mà còn duy trì hệ thống từ eCommerce, app di động, quản lý nội bộ, logistics đến cả vận hành Cloud AWS. Nhờ có họ, mọi thứ hoạt động mượt mà, không còn bị gián đoạn. Quản lý công việc giờ đây trở nên dễ dàng hơn, và chúng tôi có thể tập trung vào việc phát triển mà không lo lắng về kỹ thuật.`,
  },
  {
    name: 'Mr. Đặng Thiện',
    role: 'Founder / CEO of FASTCARE',
    logo: '/images/fastcare.png',
    content: `Cám ơn các bạn đã hỗ trợ từ việc xây dựng website, hệ thống quản trị nội bộ đến bảo trì hệ thống. Nhờ các bạn mà chúng tôi không phải lo về công nghệ, có thời gian tập trung vào việc phát triển business và chi nhánh.`,
  },
  {
    name: 'Ms. Thy Nguyễn',
    role: 'CEO Trường mầm non Vietnam Canada Preschool',
    logo: '/images/canada.png',
    content: `DAN Solutions đã giúp chúng tôi xây dựng một hệ thống quản lý giáo dục đồng bộ, từ việc quản lý học sinh đến thông tin liên lạc với phụ huynh. Nhờ sự chuyên nghiệp và tận tâm của đội ngũ, hệ thống mới không chỉ dễ dùng mà còn giúp trường hoạt động hiệu quả hơn rất nhiều.`,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold uppercase text-[#0A0A0A]">NHẬN XÉT</h2>
        <p className="text-base text-[#6B7280] mt-2">Đánh giá từ khách hàng</p>
        <div className="flex justify-center mt-3">
          <div className="flex gap-2 items-center">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <div className="w-8 h-1 bg-orange-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-[56px] px-4">
        {testimonials.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center w-[300px] mb-[30px]">
            <div className="bg-white shadow-lg rounded-[20px] relative px-6 pt-10 pb-16 text-center">
              {/* Icon trích dẫn */}
              <div className="text-[40px] text-blue-200 font-serif mb-4">”</div>

              {/* Nội dung */}
              <p className="text-base text-gray-700 leading-relaxed">{item.content}</p>

              {/* Logo avatar */}
              <div className="absolute bottom-[-32px] left-1/2 transform -translate-x-1/2">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md object-contain bg-white"
                />
              </div>
            </div>

            {/* Tên & vai trò */}
            <div className="mt-12 text-center">
              <h4 className="text-[18px] font-semibold text-[#0A0A0A]">{item.name}</h4>
              <p className="text-[13px] text-gray-500 mt-1">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
