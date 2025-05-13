import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { div } from 'motion/react-client'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignIn from './components/SignIn';

  function App() {
  

  return (
       <div>
        <SignIn/>
        </div>
    
  );
}

export default App