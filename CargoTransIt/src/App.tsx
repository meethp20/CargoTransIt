import React from 'react'

function App() {
  return (
<div className="relative w-full h-screen overflow-hidden bg-black">
  {/* Background image - fades in first */}
  <img
    src="/cragoimage/qualitypic1.jpg"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fadeIn delay-[0ms]"
  />

  {/* Blue overlay - fades in after image */}
  <div className="absolute inset-0 bg-blue-900 bg-opacity-30 opacity-0 animate-fadeIn delay-[500ms]"></div>

  {/* Text - slides in after overlay */}
  <div className="relative z-10 text-white text-4xl font-bold px-10 opacity-0 animate-slideInLeft delay-[1000ms] pt-40">
    Welcome to Transit!
  </div>
</div>

  
  
  );
}

export default App