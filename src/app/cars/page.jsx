import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import Navbar from '@/app/components/Navbar'
import SelectCar from '@/app/components/SelectCar'
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