"use client";
import Image from "next/image";

const teamData = [
  {
    name: "LONG TRAN",
    role: "Co-founder / Design Head",
    image: "/images/LongTran.png",
    description:
      "Hơn 8 năm kinh nghiệm trong thiết kế giao diện người dùng (UI) và trải nghiệm người dùng (UX), phát triển các sản phẩm số đáp ứng xu hướng hiện đại.",
  },
  {
    name: "DANNY PHAN",
    role: "Founder / Managing Director",
    image: "/images/danny.jpg",
    description:
      "Hơn 9 năm kinh nghiệm trong xây dựng và phát triển phần mềm, chuyên sâu về chiến lược sản phẩm và tái cấu trúc quy trình, giúp doanh nghiệp tối ưu hiệu suất và thúc đẩy tăng trưởng bền vững.",
  },
  {
    name: "Long Nguyen",
    role: "Head of Solutions Architect",
    image: "/images/LongNguyen.png",
    description:
      "Hơn 10 năm kinh nghiệm trong thiết kế và tối ưu kiến trúc hệ thống. Với chuyên môn sâu rộng và tư duy chiến lược, dẫn dắt đội ngũ xây dựng các giải pháp công nghệ linh hoạt, đáp ứng nhu cầu phát triển và tối đa hóa hiệu quả cho khách hàng.",
  },
];

export default function Team() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Đội ngũ</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {teamData.map((member, index) => (
          <div key={index}>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={500}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{member.role}</p>
            <p className="text-sm text-gray-600">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
