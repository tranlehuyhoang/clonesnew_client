import React from 'react'
import Navbar from '../Navbar'
import Table from '../Transfers/Table'
import Footer from '../Footer'

const Tranfer = () => {
    return (
        <div className=' min-h-[100vh] h-[3500px]  transition-width relative   w-[100%]'>
            <div className='sticky top-0 right-0 left-0 z-30'>
                <Navbar />
            </div>
            <Table />

            <div className=' bottom-0 right-0 left-0 '>
                <Footer />
            </div>
        </div>
    )
}

export default Tranfer