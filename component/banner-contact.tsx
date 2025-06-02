// components/ProjectCallToAction.tsx

export default function BannerContact() {
  return (
    <div className="relative w-full h-[404.1px] text-center overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url('/images/banner-contact.jpg')` }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-2xl mx-auto text-gray-800">
          <p className="text-[25px] font-[300px] mb-2">Bạn đã sẵn sàng để bắt đầu chưa?</p>
          <h2 className="mb-6 text-gray-900 text-[35px] font-semibold">
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
    </div>


  );
}
