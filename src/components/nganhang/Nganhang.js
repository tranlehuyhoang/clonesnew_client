import React, { useState } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Link, json, useNavigate } from 'react-router-dom'

const Nganhang = () => {

    const navigate = useNavigate();

    const [name, setsname] = useState();
    const [load, setload] = useState(false);
    const [amount, setAmount] = useState(20000);
    const [formData, setFormData] = useState({
        username: localStorage.getItem('user'),
        amount: amount

    });

    const handleAmountChange = (event) => {
        setFormData({
            ...formData,
            amount: event.target.value
        });
        setAmount(event.target.value);

    };
    const createBill = async () => {

        try {
            const response = await fetch('http://localhost:5000/api/transfer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            // do something with the response data
        } catch (error) {
            console.error(error);
        }
        setload(true)
        const data = {
            accountNo: 104567890,
            accountName: 'TRAN LE HUY HOANG',
            acqId: 970422,
            amount: amount,
            addInfo: localStorage.getItem('user'),
            format: 'text',
            template: 'compact'
        };

        try {
            const response = await fetch('https://api.vietqr.io/v2/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();

            if (responseData) {
                console.log(responseData)
                localStorage.setItem('hoadon', JSON.stringify({
                    name: localStorage.getItem('user'),
                    qrcode: responseData.data.qrDataURL,
                    amount: amount
                }));
                setload(false)
                navigate('/hoa-don')

            }

        } catch (err) {
            setload(false)

            alert(err);
        }
    };
    return (
        <>
            < input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter amount</span>
                        </label>
                        <label className="input-group">
                            <span>Price</span>
                            <input
                                value={amount}
                                onChange={handleAmountChange}
                                type="number" placeholder="20000" className="input input-bordered" />
                            <span>VND</span>
                            {!load
                                ?
                                <Link >
                                    <button onClick={createBill} className="btn btn-active btn-accent">Tạo </button>
                                </Link>
                                :

                                <button disabled type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                                    <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                    </svg>
                                    Loading...
                                </button>
                            }
                        </label>
                    </div>
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </div>
            </div>
            <div className=' min-h-[100vh] h-[3500px]  transition-width relative   w-[100%]'>
                <div className='sticky top-0 right-0 left-0 z-30'>
                    <Navbar />
                </div>


                <button type="button" class="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                    Check out with PayPal
                </button>

                <button type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2">
                    Pay with Visa
                </button>
                <label htmlFor="my-modal-3" className="btn bg-[#0066CC]">
                    Pay with mbbank
                    <img src="https://uploads-ssl.webflow.com/5fb85f26f126ce08d792d2d9/607fb3f4411becf785a0d614_After_MBBAnk-p-500.png" width={20} alt="" />

                </label>
                <div className=' bottom-0 right-0 left-0 '>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Nganhang
