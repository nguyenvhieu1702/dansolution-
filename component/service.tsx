// components/OurServicesSection.tsx
import { FaLaptopCode, FaMobileAlt, FaTools, FaServer, FaSearch, FaMagic, FaHandsHelping } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { LuSearchCheck } from "react-icons/lu";

const services = [
  {
    title: "WEBSITE",
    description: "DAN Solutions cung cấp website với giao diện hiện đại, chuẩn SEO, và tính năng tối ưu, giúp doanh nghiệp tự tin khẳng định thương hiệu trên nền tảng số.",
    icon: <FaLaptopCode size={40} className="text-[#0f172a]" />,
  },
  {
    title: "MOBILE APP",
    description: "Chúng tôi dùng React Native tạo ứng dụng di động đáng tin cậy, tối ưu trải nghiệm người dùng trên nhiều nền tảng, tiết kiệm thời gian và chi phí.",
    icon: <FaMobileAlt size={40} className="text-[#0f172a]" />,
  },
  {
    title: "GIA CÔNG PHẦN MỀM",
    description: "DAN Solutions đảm bảo quy trình gia công chuyên nghiệp: từ tư vấn giải pháp, thiết kế, phát triển đến kiểm thử và vận hành, giúp doanh nghiệp tối ưu hóa chi phí và hiệu quả.",
    icon: <MdApi size={40} className="text-[#0f172a]" />,
  },
  {
    title: "BẢO TRÌ VẬN HÀNH",
    description: "DAN Solutions cung cấp dịch vụ bảo trì và vận hành toàn diện, đảm bảo hệ thống hoạt động ổn định, an toàn và tối ưu, giúp doanh nghiệp tập trung phát triển mà không lo gián đoạn kỹ thuật.",
    icon: <FaServer size={40} className="text-[#0f172a]" />,
  },
  {
    title: "DỊCH VỤ TƯ VẤN CÔNG NGHỆ",
    description: "DAN Solutions cung cấp giải pháp tư vấn toàn diện, giúp khách hàng lựa chọn nền tảng công nghệ phù hợp và đối tác phát triển tối ưu.",
    icon: <FaHandsHelping size={40} className="text-[#0f172a]" />,
  },
  {
    title: "SEO & Web Hosting",
    description: "DAN Solutions không chỉ tối ưu từ khóa mà còn nâng cao trải nghiệm người dùng, giúp doanh nghiệp thu hút và giữ chân khách hàng hiệu quả, kết hợp với dịch vụ lưu trữ ổn định và bảo mật.",
    icon: <LuSearchCheck size={40} className="text-[#0f172a]" />,
  },
];

export default function Service() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 uppercase">DỊCH VỤ CỦA CHÚNG TÔI</h2>
        <p className="max-w-2xl mx-auto mb-8 text-base font-normal text-[#111633] ">
          Nhiệm vụ hàng đầu của DanSolution là mang đến những trải nghiệm dịch vụ công nghệ hàng đầu cho khách hàng. Sự hài lòng của quý vị chính là mục tiêu thành công của chúng tôi.
        </p>
        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
          <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
          <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
          <div className="h-1 w-[30px] bg-orange-500 rounded-full"></div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {services.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="bg-white shadow-lg rounded-full p-5">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 uppercase">{item.title}</h3>
                <p className="text-base font-normal">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
