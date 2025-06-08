"use client";

import Image from "next/image";

export default function () {
  return (
    <section className="relative min-h-[500px] w-full">
      <Image
        src="/images/banner-dan-5.jpg"
        alt="CTA Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        className="z-0"
      />

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 container mx-auto px-4 md:px-8 py-24 flex items-center justify-end">
        <div className="md:w-1/2 text-white text-left">
          <h2 className="text-[50px] md:text-5xl font-bold leading-[1.1em] mb-4">
            Bạn đã sẵn sàng chia sẻ<br /> ý tưởng sản phẩm<br /> với chúng tôi?
          </h2>
          <div className="w-19 h-0.5 bg-red-500 mr-auto mb-4" />
          <p className="w-xl text-base">
            Đặt lịch hẹn hoặc gửi chúng tôi thông tin mô tả ngắn gọn về dự án của <br/>
            bạn để DAN Solutions giúp bạn hiện thực hóa ý tưởng kinh doanh nhé.
          </p>
        </div>
      </div>
    </section>
  );
}
