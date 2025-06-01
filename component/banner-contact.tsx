// components/ProjectCallToAction.tsx

export default function BannerContact() {
  return (
    <div className="relative w-full py-20 px-4 text-center overflow-hidden">
  {/* Lớp nền với opacity */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
    style={{ backgroundImage: `url('/images/banner-contact.jpg')` }}
    aria-hidden="true"
  />

  {/* Nội dung phía trên */}
  <div className="relative max-w-2xl mx-auto text-gray-800 z-10">
    <p className="text-lg mb-2">Bạn đã sẵn sàng để bắt đầu chưa?</p>
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
      ĐẾN VỚI DỰ ÁN CỦA CHÚNG TÔI
    </h2>
    <div className="flex justify-center gap-4 flex-wrap">
      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition">
        Bắt đầu
      </button>
      <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-2 rounded transition">
        Liên hệ
      </button>
    </div>
  </div>
</div>

  );
}
