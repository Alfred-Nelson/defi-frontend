import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header'

const NavigationOutlet = () => {
  return (
    <div className="w-full font-poppins h-[100vh] overflow-y-auto bg-base text-white flex flex-col">
      <Header />
      <Outlet />
    </div>
  )
}

export default NavigationOutlet