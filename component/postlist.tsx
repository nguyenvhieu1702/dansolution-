import Post from "./post";


const newsData = [
  {
    image: "/images/news-1.jpg",
    title: "Quy Trình Xây Dựng Website: Từ Nhận Yêu Cầu Đến Vận Hành",
    excerpt:
      "Trong thời đại số hóa, website đóng vai trò quan trọng giúp doanh nghiệp xây dựng thương hiệu, tiếp cận khách hàng và tối ưu hóa hoạt động kinh doanh....",
    date: "1 Tháng mười một, 2024",
    category: "Kiến Thức Website",
  },
  {
    image: "/images/news-2.jpg",
    title: "Design web giá rẻ, hợp lí tại Hà Nội",
    excerpt:
      "Trong thời đại số hóa ngày càng phát triển, việc sở hữu một trang web chuyên nghiệp và chất lượng là yếu tố quan trọng giúp các cá nhân và...",
    date: "20 Tháng 5, 2024",
    category: "Kiến Thức Website",
  },
  {
    image: "/images/news-3.jpg",
    title: "Website – Giải Pháp Kết Nối Doanh Nghiệp Với Khách Hàng",
    excerpt:
      "TP.HCM là trung tâm TP.HCM là trung tâm kinh tế và văn hóa năng động của Việt Nam, nơi có sự phát triển mạnh mẽ trong lĩnh vực công nghệ thông tin. Việc thiết...kinh tế và văn hóa năng động, nơi có sự phát triển mạnh trong công nghệ thông tin...",
    date: "20 Tháng 5, 2024",
    category: "Kiến Thức Website",
  },
];

export default function PostList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {newsData.map((item, index) => (
        <Post key={index} {...item} />
      ))}
    </div>
  );
}
