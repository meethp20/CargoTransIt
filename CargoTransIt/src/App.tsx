import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { div } from 'motion/react-client'

function App() {
  const serveRef = useRef(null);
  const isInView = useInView(serveRef, { once: true, margin: "-100px" });

  return (
     <div>
    <div className="relative w-full  h-screen overflow-hidden flex">
      {/* Left half: Image with fade-in */}
      <motion.div
        className="w-1/2 h-full"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
      >
        <img
          src="/cragoimage/qualitypic1.jpg"
          alt="Background"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </motion.div>

      {/* Right half: Blue overlay with slide-in */}
      <motion.div
        className="w-1/2 h-full  flex items-center justify-center"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
      >
        {/* Text slides in from left */}
        <motion.div
          className="text-white  font-extrabold tracking-wider text-center"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
        >
          <div className=' text-4xl  text-black'>
          Welcome to CargoTranSit!
          </div>
          <p className=' font-extrabold text-2xl text-black tracking-wider text-center'>
            your cargo partner 
          </p>
          
          <button className='bg-green-500  text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-600 transition duration-300'>Get started</button>
        </motion.div>
      </motion.div>

  
            </div>
            {/*second part*/}
               <div className=" py-12 w-full h-[500px] "> 
                        <motion.div
                          ref={serveRef}
                          initial={{ opacity: 0, y: 100 }}
                          animate={isInView ? { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeIn" } } : {}}
                        >
                        <div className="p-8 bg-gray-100">


  <div className="text-2xl font-bold mb-6">What we serve</div>

  <div className="space-y-6">
    {/* Ship transport */}
    <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow">
      <div className="w-1/2">
        <h1 className="text-xl font-semibold mb-2">Ship Transport</h1>
        <p>Transporting all bulk items</p>
      </div>
      <img
        src="/cragoimage/shippic.avif"
        alt="Ship"
        className="w-100 h-100 object-cover rounded"
      />
    </div>

    {/* Truck transport */}
    <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow">
      <div className="w-1/2">
        <h1 className="text-xl font-semibold mb-2">Truck Transport</h1>
        <p>Transporting all bulk items</p>
      </div>
      <img
        src="/cragoimage/cargotruck.jpg"
        alt="Truck"
        className="w-100 h-100 object-cover rounded"
      />
    </div>

    {/* Air transport */}
    <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow">
      <div className="w-1/2">
        <h1 className="text-xl font-semibold mb-2">Air Cargo Just For You</h1>
        <p>Transporting all bulk items</p>
      </div>
      <img
        src="/cragoimage/planepic.jpeg"
        alt="Plane"
        className="w-100 h-100 object-cover rounded"
      />
    </div>
  </div>
</div>

                        </motion.div>
                  </div>
        </div>
    
  );
}

export default App