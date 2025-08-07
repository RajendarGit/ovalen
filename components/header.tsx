import React from 'react'
import Logo from './logo'
import NavBar from './nav-bar'
import FunctionButtons from './function-buttons'

const Header = () => {
  return (
    <header className='bg-transparent p-6 flex justify-between items-center space-x-4 fixed w-full top-0 z-50'>
        <Logo />
        <NavBar />
        <FunctionButtons />
    </header>
  )
}

export default Header