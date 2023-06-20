import React from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='header-container'>
        <h1>Header</h1>
      </div>
      <div className='router-container'>
        <Outlet/>
      </div>
    </>
  )
}

export default Header
