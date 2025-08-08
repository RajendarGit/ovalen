'use client'
import React, { useEffect, useState } from 'react'
import Logo from './logo'
import NavBar from './nav-bar'
import FunctionButtons from './function-buttons'
import Container from './container'
import { cn } from '@/lib/utils'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={cn("bg-transparent p-6 fixed w-full top-0 z-50", scrolled && "fixed bg-black/30 backdrop-blur-md")}>
      <Container className='flex justify-between items-center space-x-4'>
        <Logo />
        <NavBar />
        <FunctionButtons />
        </Container>
    </header>
  )
}

export default Header