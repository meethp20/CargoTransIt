import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4 flex items-center justify-between">
      {/* Centered Nav Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6">
        <a href="#home" className="hover:text-blue-500">Home</a>
        
        <a href="#services" className="hover:text-blue-500">Services</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>

      {/* Right-aligned Sign In Button */}
      <div className="ml-auto">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300">
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
