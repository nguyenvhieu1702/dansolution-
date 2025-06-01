export default function FormContact() {
    return (
        <div className="max-w-6xl mx-auto px-4  flex flex-col md:flex-row gap-10">
            {/* Khối form */}
            <div className="flex-1 bg-white shadow-md rounded-xl p-10 text-[13px]">
                <form method="post" name="New Form" className="space-y-6">
                    <input type="hidden" name="post_id" value="141" />
                    <input type="hidden" name="form_id" value="708cb163" />
                    <input type="hidden" name="referer_title" value="Liên Hệ - DAN Solutions" />
                    <input type="hidden" name="queried_id" value="141" />

                    <div>
                        <label htmlFor="form-field-name" className="block text-gray-700 mb-2 ">
                            Họ và Tên / Fullname
                        </label>
                        <input
                            type="text"
                            id="form-field-name"
                            name="form_fields[name]"
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 py-2"
                        />
                    </div>

                    <div>
                        <label htmlFor="form-field-email" className="block text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="form-field-email"
                            name="form_fields[email]"
                            required
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 py-2"
                        />
                    </div>

                    <div>
                        <label htmlFor="form-field-phone" className="block text-gray-700 mb-2">
                            Số điện thoại / Phone number
                        </label>
                        <input
                            type="tel"
                            id="form-field-phone"
                            name="form_fields[6b62a56]"
                            required
                            className="w-full border-b border-gray-300 focus:outline-none focus:border-red-500 py-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-[#fc1c40] text-white w-full py-3 rounded mt-4 hover:bg-red-600 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Khối thông tin liên hệ */}
            <div className="flex-1 flex flex-col justify-center items-start space-y-4 px-4 md:px-0">
                <h2 className="text-[50px] font-bold text-gray-900 ">Liên Hệ</h2>
                <div className="w-16 h-1 bg-[#fc1c40] mb-4"></div>

                <p className="text-gray-700 text-base leading-relaxed text-[14px]">
                    Vui lòng gửi email đến địa chỉ{' '}
                    huyenpv@dansolutions.vn
                    nếu bạn cần trao đổi thông tin về dự án sản phẩm số
                </p>

                <div className="text-gray-800 leading-relaxed text-[14px]">
                    <p className="italic font-semibold">
                        Address: 174 Nguyen Van Cong, Go Vap District, Ho Chi Minh City <br />
                        E-mail:{' '}
                        huyenpv@dansolutions.vn
                        <br />
                        Phone: (+84) 932 320 105
                    </p>
                </div>
            </div>
        </div>
    );
}
