import React from 'react';
import comingsoonbg from './comigsoonbg.svg'; // Ensure this path is correct.
import wedlogo from './assests/image11.png'; // Ensure this path is correct.
import Rectangle from './assests/Rectangle 453.png'
import comingsoondesc from './assests/comingsoondesc.png'

const ComingSoonPage = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${comingsoonbg})` }}
    >
       <div className="relative flex flex-col items-center">
        {/* Rectangle image positioned above the logo */}
        <img
          src={Rectangle}
          alt="Rectangle"
          className="absolute top-[-12px] mr-[600px] w-[363px] z-10 h-[419px]"
        />
        {/* Logo */}
        <img src={wedlogo} alt="Logo" className="w-[1438px] h-full relative" />
        <img src={comingsoondesc} className='mt-[-13%] relative ml-[217px] z-30' alt='description'/>
      </div>
    </div>
  );
};

export default ComingSoonPage;
