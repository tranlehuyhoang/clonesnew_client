import React from 'react'
import { Link } from 'react-router-dom'

const Slidebar2 = ({ display, setslide }) => {
  return (
    <ul className={`menu bg-[#01041b] ${display === 'hidden' ? 'h-[0px]' : 'h-[700px]'} lg:hidden mx:hidden h-[100] sticky overflow-hidden`}>
      <li onClick={setslide} ><Link to={'/'}>
        <a>
          <img src="https://clonesnew.com/assets/storage/images/logo_dark_H7W.png" className='max-w-[250px]' alt="" />
        </a>
      </Link></li>
      <li onClick={setslide} ><Link to={'/'}>
        <a>MUA TÀI KHOẢN</a>
      </Link></li>
      <li onClick={setslide} ><a> MUA TÀI LIỆU</a></li>
      <li onClick={setslide} ><Link to={'/purchase-history'}>
        <a> Lịch Sử Mua Hàng</a>
      </Link></li>
      <li onClick={setslide} ><Link to={'/bank'}>
        <a> Ngân Hàng</a>
      </Link></li>
      <li onClick={setslide} ><Link to={'/transfer'}>
        <a>Hoá Đơn</a>
      </Link></li>
      <li onClick={setslide} >
        <Link to={"/bai-viet"}>
          <a> Bài Viết</a>
        </Link></li>
      <li onClick={setslide} ><a> Công Cụ</a></li>
      <li onClick={setslide} ><a> Tài Liệu API</a></li>
      <li onClick={setslide} ><a> Liên Hệ</a></li>
      <li onClick={setslide} ><a> Liên Hệ Facebook</a></li>
    </ul >

  )
}

export default Slidebar2