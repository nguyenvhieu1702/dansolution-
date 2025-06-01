'use client'

const testimonials = [
  {
    name: 'Mr. Dung Đinh',
    role: 'CTO of TAMDA GROUP',
    logo: '/images/tamda-logo.png',
    content: `DAN Solutions đã giúp chúng tôi không chỉ xây dựng mà còn duy trì hệ thống từ eCommerce, app di động, quản lý nội bộ, logistics đến cả vận hành Cloud AWS...`,
  },
  {
    name: 'Mr. Đặng Thiện',
    role: 'Founder / CEO of FASTCARE',
    logo: '/images/fastcare-logo.png',
    content: `Cảm ơn các bạn đã hỗ trợ từ việc xây dựng website, hệ thống quản trị nội bộ đến bảo trì hệ thống. Nhờ các bạn mà chúng tôi không phải lo về công nghệ...`,
  },
  {
    name: 'Ms. Thy Nguyễn',
    role: 'CEO Trường mầm non Vietnam Canada Preschool',
    logo: '/images/vcp-logo.png',
    content: `DAN Solutions đã giúp chúng tôi xây dựng một hệ thống quản lý giáo dục đồng bộ, từ việc quản lý học sinh đến thông tin liên lạc với phụ huynh...`,
  },

]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold uppercase">Nhận xét</h2>
        <p className="text-sm text-gray-500 mt-2">Đánh giá từ khách hàng</p>
        <div className="mt-2 flex justify-center">
          <span className="w-6 h-1 bg-orange-500 rounded-full"></span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 items-start">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-blue-100 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h.01M15 12h.01M7.757 4.243a6 6 0 018.486 0M12 2v2m-6 6a6 6 0 0012 0"
              />
            </svg>
            <p className="text-gray-700 text-sm mb-6">{item.content}</p>
            <img
              src={item.logo}
              alt={item.name}
              className="w-14 h-14 rounded-full mb-3 object-contain"
            />
            <h4 className="font-bold text-gray-900">{item.name}</h4>
            <p className="text-xs text-gray-500">{item.role}</p>
          </div>
        ))}
      </div>

    </section>
  )
}
