import React, { useState } from 'react'
import axios from 'axios'
const Table = ({ img, keyss, name, price }) => {
    const formattedAmount = (amount) => {
        return amount.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    };
    const formattedAmoun = (amount) => {
        return amount.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    };
    console.log(keyss)
    const [inputValue, setInputValue] = useState(1);
    const [formData, setFormData] = useState({
        username: localStorage.getItem('user'),
        nameproduct: name,
        quantity: 1,
        price: price
    });

    const handleInputChange = (event) => {
        // console.log(inputValue)
        setInputValue(event.target.value);
        console.log(event.target.value)

        setFormData((prev) => ({
            ...prev,
            quantity: inputValue
        }))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputValue);
    
        const newFormData = {
            username: localStorage.getItem('user'),
            nameproduct: name,
            quantity: inputValue,
            price: price,
        };
    
        try {
            const newMoneyAmount = localStorage.getItem('money') - inputValue * price
            await axios.put('http://localhost:5000/api/user', { username: localStorage.getItem('user'), newMoneyAmount: newMoneyAmount });
            console.log('User update successfully');
            localStorage.setItem('money', newMoneyAmount)
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    
        fetch('http://localhost:5000/api/bill', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFormData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // do something with the response data
            })
            .catch(error => console.error(error));
    };
    return (
        <>
            < input type="checkbox" id={`my-modal-${name}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">{name} giá  : {
                                formattedAmount(price)
                            }/acc</span>
                        </label>
                        <label className="input-group">
                            <span>Số lượng</span>
                            <input
                                value={
                                    formattedAmoun(inputValue)
                                }
                                onChange={handleInputChange}
                                type="number" placeholder="1" className="input input-bordered" />
                            <span>Acc</span>
                            <button className=' bg-[#0066CC] p-4' onClick={handleSubmit} >Mua</button>
                        </label>
                    </div>
                    <label htmlFor={`my-modal-${name}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </div>
            </div>


            <div className="overflow-x-auto w-full ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th className='z-10'>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>{name}</td>
                            <td>{
                                formattedAmount(price)
                            }</td>
                            <th>
                                <label htmlFor={`my-modal-${name}`} className="btn bg-[#0066CC]">
                                    Mua
                                </label>
                            </th>
                        </tr>
                        {/* row 2 */}

                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </>
    )
}

export default Table
