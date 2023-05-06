import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Table from './Table'

const Home = () => {
  return (
    <>

      <div className=' min-h-[100vh] h-[1500px]  transition-width relative   w-[100%]'>
        <div className='sticky top-0 right-0 left-0 z-30'>
          <Navbar />

        </div>
        <div>
          <div className="card   bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="  text-center">VUI LÒNG BANK MB AUTO - MBBANK CỘNG TAY NHÉ </h2>
              <p className='text-center'>
                Mọi danh mục clone đều có ghi chú rõ ràng về các kiểu xuất file

              </p>
              <p className='text-center'>
                Zalo hỗ trợ : 0337799453

              </p>
              <p className='text-center'>
                Hotline hỗ trợ: 0337799453

              </p>
              <p className='text-center'>
                Lưu Ý:
              </p>
              <p className='text-center'>
                Để tránh lấy mất tiền và clone các bạn vui lòng không đặt tài khoản hoặc mật khẩu trùng với web khác
              </p>
              <p className='text-center'>
                Khuyến cáo nên mua đủ sài, Clone được checklive trước khi xuất file, không có chính sách bảo hành

              </p>
              <p className='text-center'>
                Rất cảm ơn các bạn đã và đang ủng hộ CLONESNEW.COM, rất mong rằng sẽ phục vụ các bạn tốt nhất heart
                XÓA DATA ĐƠN HÀNG SAU 5 NGÀY KỂ TỪ NGÀY MUA AE LƯU Ý
              </p>
              <p className='text-center'>

                XÓA DATA ĐƠN HÀNG SAU 5 NGÀY KỂ TỪ NGÀY MUA AE LƯU Ý

              </p>
            </div>
          </div>
        </div>
        <Table img={'https://clonesnew.com/assets/storage/images/categoryQVJ1.png'} keyss={'1'} name={'facebook'} price={1000} />
        <Table img={'https://clonesnew.com/assets/storage/images/category9OH.png'} keyss={'2'} name={'tiktok'} price={5000} />
        <div className=' bottom-0 right-0 left-0 '>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home