
export default function MainBanner() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/images/chuyen-doi-so.jpg')",
        }}
        aria-hidden="true"
      />



      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-white text-left flex flex-col justify-center h-full">
        <div className="flex items-center mb-2">
          <div className="w-[40px] h-px bg-[#ff712b] mr-3   " />
          <p className="text-base font-semibold tracking-widest text-white">
            CÁCH MẠNG
          </p>
        </div>

        <h1 className="text-[58px] md:text-5xl font-bold mb-4">CHUYỂN ĐỔI SỐ</h1>
        <p className="text-[19px] font-medium leading-[32px] mb-8">
          DAN Solutions dẫn đầu chuyển đổi số, giúp doanh nghiệp nâng cao hiệu suất, giảm chi phí và tự động hóa quy trình trong kỷ nguyên 4.0.
          Với công nghệ tiên tiến, chúng tôi đồng hành cùng đối tác khám phá tiềm năng số, thúc đẩy thành công trong mỗi bước đi.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            XEM THÊM
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
            LIÊN HỆ
          </button>
        </div>
      </div>
    </section>
  );
}
