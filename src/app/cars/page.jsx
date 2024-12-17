import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import SelectCar from '@/components/SelectCar'
import React from 'react'

function page() {
  return (
    <div>
        <Header />
        <Navbar />
        <SelectCar />
        <Footer />
    </div>
  )
}

export default page