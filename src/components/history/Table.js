import React, { useEffect, useState } from 'react'

const Table = () => {
    const [bills, setBills] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/bill')
            .then(response => response.json())
            .then(data => {
                const filteredData = data.message
                const hehe = filteredData.filter(item => item.username === localStorage.getItem('user'));
                setBills(hehe);
            })
            .catch(error => console.error(error));
    }, []);
    const formattedAmount = (amount) => {
        return amount.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    };
    return (
        < div class="relative overflow-x-auto shadow-md sm:rounded-lg" >
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3 dark:text-white">
                            STT
                        </th>
                        <th scope="col" class="px-6 py-3 dark:text-white">
                            Product name
                        </th>
                        <th scope="col" class="px-6 py-3 dark:text-white">
                            <div class="flex items-center">
                                User
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3 dark:text-white">
                            <div class="flex items-center">
                                Số lượng
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3 dark:text-white">
                            <div class="flex items-center">
                                Giá
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3 dark:text-white">
                            <div class="flex items-center">
                                Tổng cộng
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3 dark:text-white">
                            <div class="flex items-center">
                                THời gian
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                            </div>
                        </th>
                        <th scope="col" class="px-6 py-3 dark:text-white">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bills
                            ? bills.map((bill, ix) => (
                                <tr key={bill._id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {ix}
                                    </th>
                                    <td class="px-6 py-4 ">
                                        {bill.nameproduct}

                                    </td>
                                    <td class="px-6 py-4">
                                        {bill.username}

                                    </td>
                                    <td class="px-6 py-4">
                                        {bill.quantity}
                                    </td>
                                    <td class="px-6 py-4">
                                        {
                                            formattedAmount(bill.price)
                                        }
                                    </td>
                                    <td class="px-6 py-4">
                                        {formattedAmount(bill.price * bill.quantity)}
                                    </td>
                                    <td class="px-6 py-4">
                                        {
                                            new Date(bill.time).toLocaleString('en-US', {
                                                timeZone: 'Asia/Ho_Chi_Minh',
                                            })

                                        }
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>

                            ))
                            : <div></div>
                    }


                </tbody>
            </table>
        </div >

    )
}

export default Table








