import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Slidebar = ({ display }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <ul className={` menu bg-[#01041b] ${display} md:${display} sm:${display} lg:block mx:${display} h-[100] sticky`}>
      <li  ><Link to={'/'}>
        <a>
          <img src="https://clonesnew.com/assets/storage/images/logo_dark_H7W.png" className='max-w-[250px]' alt="" />
        </a>
      </Link></li>
      <li className={currentPath == '/' && `bg-[#661AE6]`}><Link to={'/'}>
        <a>MUA TÀI KHOẢN</a>
      </Link></li>
      <li  ><a> MUA TÀI LIỆU</a></li>
      <li className={currentPath == '/purchase-history' && `bg-[#661AE6]`}><Link to={'/purchase-history'}>
        <a> Lịch Sử Mua Hàng</a>
      </Link></li>
      <li className={currentPath == '/bank' && `bg-[#661AE6]`}><Link to={'/bank'}>
        <a> Ngân Hàng</a>
      </Link></li>
      <li className={currentPath == '/transfer' && `bg-[#661AE6]`}><Link to={'/transfer'}>
        <a>Hoá Đơn</a>
      </Link></li>
      <li
        className={currentPath == '/bai-viet' && `bg-[#661AE6]`}
      >
        <Link to={'/bai-viet'}>
          <a> Bài Viết</a>
        </Link>
      </li>
      <li ><a> Công Cụ</a></li>
      <li ><a> Tài Liệu API</a></li>
      <li ><a> Liên Hệ</a></li>
      <li ><a> Liên Hệ Facebook</a></li>
    </ul >

  )
}

export default Slidebar