import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import img from '../img/img.png';
import Child from './Child';

const Baiviet = () => {
    return (
        <>
            <div className=' min-h-[100vh] h-[5500px]  transition-width relative   w-[100%]'>
                <div className='sticky top-0 right-0 left-0 z-30'>
                    <Navbar />

                </div>
                <div className='flex flex-wrap p-5 w-full  '>
                    <Child />
                    <Child />
                    <Child />
                    <Child />
                    <Child />
                </div>
                <div className=' bottom-0 right-0 left-0 '>
                    <Footer />
                </div>
            </div>
        </>


    )
}

export default Baiviet