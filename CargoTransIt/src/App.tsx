import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { div } from 'motion/react-client'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

  function App() {
  

  return (
       <div>
        <Navbar/>
        <Hero/>
        <Footer/>
        </div>
    
  );
}

export default App