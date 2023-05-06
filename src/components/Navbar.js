import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slidebar2 from './Slidebar2';
const Navbar = () => {
    const formattedAmount = (amount) => {
        return amount.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    };
    const [price, setprice] = useState(0);
    const [quantity, setquantity] = useState(0);
    const [bills, setBills] = useState([]);
    const [user, setUser] = useState(localStorage.getItem('user') || false);
    const [slide, setslide] = useState('hidden');
    const [money, setMoney] = useState(0);
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }
    const handleOpenSlide = () => {
        setslide(slide == 'hidden' ? 'block' : 'hidden')
    }
    useEffect(() => {
        setUser(localStorage.getItem('user') || false);
        setMoney(localStorage.getItem('money') || 0)
        console.log(money)

        fetch('http://localhost:5000/api/bill')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.message
                const hehe = filteredData.filter(item => item.username === localStorage.getItem('user'));
                setBills(hehe);

            })
            .catch(error => console.error(error));

    }, [user]);
    useEffect(() => {
        var price = 0
        var quantity = 0
        bills.map((item) => {
            price += item.price * item.quantity
            quantity += item.quantity
        });
        setprice(price)
        setquantity(quantity)
    }, [bills]);
    return (
        <>
            <Slidebar2 display={slide} setslide={handleOpenSlide} />
            <div className=''>
                <div className="navbar z-50 bg-[#01041b] max-h-full flex   justify-between">
                    <div className="">

                        <a className="btn btn-ghost normal-case text-xl block  lg:hidden  " onClick={handleOpenSlide}>
                            <img src="https://avatars.githubusercontent.com/u/111523395?s=400&u=989203865f60690fa45076bd4814cfb0aa8ce6ab&v=4" width={50} alt="" />
                        </a>
                        {user &&
                            <button className="btn btn-outline btn-secondary">
                                Số dư : {

                                    formattedAmount(Number(money))
                                }
                            </button>
                        }
                        {!user &&
                            <div>
                                <Link to={'/login'}>
                                    <button className="btn btn-outline btn-secondary">
                                        Đăng nhập
                                    </button>
                                </Link>
                                <Link to={'/signup'}>
                                    <button className="btn btn-outline btn-primary">Đăng kí</button>
                                </Link>
                            </div>

                        }
                    </div>
                    <div className="">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">{quantity}</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">{quantity} Items</span>
                                    <span className="text-info">Subtotal: {price} vnd</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>{user}</div>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar