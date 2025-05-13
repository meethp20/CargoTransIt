import React from 'react'

function Navbar() {
  return (
    <>
        <nav className="fixed top-0 left-0 w-full bg-white shadow   z-50 p-4 flex justify-center gap-6">
  <a href="#home" className="hover:text-blue-500">Home</a>
  <a href="#about" className="hover:text-blue-500">About</a>
  <a href="#services" className="hover:text-blue-500">Services</a>
  <a href="#contact" className="hover:text-blue-500">Contact</a>
         </nav>

    </>
  )
}

export default Navbar