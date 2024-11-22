import React from 'react';
import comingsoonbg from './comigsoonbg.svg'; // Ensure this path is correct.
import wedlogo from './assests/image11.png'; // Ensure this path is correct.
import wedlogo1 from '../assets/WEDMONKEY_LOGO-removebg-preview.png'; // Ensure this path is correct.
import Rectangle from './assests/Rectangle 453.png'
import comingsoondesc from './assests/comingsoondesc.png'
import circle from '../assets/Ellipse 79.png'
import group1 from '../assets/Group 1.png'
import group2 from '../assets/Group 2.png'
import flower1 from '../assets/Flower 1.png'
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';

const ComingSoonPage = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center hidden md:flex flex-col items-center  "
        style={{ backgroundImage: `url(${comingsoonbg})` }}
      >
        <div >
          <div className='flex justify-center items-center'>
            <img className='w-[200px]' src="https://s3-alpha-sig.figma.com/img/876c/f664/72d86b7984598da280ff368cc5ae4784?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j8E3Yqimi~AE~1BzFw1oxBHEIYoeHZbYlu1tqHDkHv6xIyT1bCudSCLLfL3IDrUgP2OXu5MTj9i8Cme-d2ekWxX-cG~mGBwdhp1lJ8V-28ke3kzQbjPgQhcK0QyLyVfMezltclhck53zuNFNAHNtUVYEN6Q0z-lMw0RoGUL3zLcY~Kq4XfqAjW6Ilnxq5o4rcoEoVIAObNTZiUmUr~LyvFYEzGSze~G7hxvMOUfckqlD9tagDrogj4iB2l-KhUwfOxoUOMFGhlAuD3HdVv5~6NIO1yaZYG2pANIGuSpl~ahl2CGvKJU3yMZagmRaEMRQUGM8rL2N5a2-DWRuH11QuQ__" alt="" />
          </div>

          <div className="relative flex mt-12 flex-col items-center">
            {/* Rectangle image positioned above the logo */}
            <img
              src={Rectangle}
              alt="Rectangle"
              className="absolute top-[-12px] mr-[600px] w-[363px] z-10 h-[419px]"
            />
            {/* flower  Logo */}
            <div className="absolute z-[40] top-[13vw] left-[61%]  mx-auto">
              <img
                className="w-[100px]   z-[50]"
                src="https://s3-alpha-sig.figma.com/img/507d/e56b/c66ad11c74400dac98d96725338d9d5b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhaXE0ynxTfGTfoA0h-s-YxGDDP5mqJAF2s~BmIaudR3QdipcHNXVBtjehmUFfOkteswqo~IBiT7c3YNdXmsGTRUHTwW45bBcCom5gJo8x4eGnCY-dWSzUl2gz0DFSomCbL5WxoKb7Yh3TWld2kbFPh8y32EirqRd-OZBi3A~A6yeCV14nHSv0ReYFED4iKsml-KFANnqzXdMbgAulKy8MD6PAa~fsMPtW-mlCm9li2W5gYHxIqlOs1-YeBZHmyqSZbVIRJXMBRDW5WDrbhZplIH0uqnR2OcR6I9-0QSQYP5EbehK0AFuAXNXXZPsdJju7TmI7GAKWBClEtcvvWZWg__"
                alt=""
              />
            </div>

            <img src={wedlogo} alt="Logo" className="w-[1438px] h-full relative" />

            <img src={comingsoondesc} className='mt-[-13%] h-[15vw] relative ml-[2vw] z-30' alt='description' />


            {/* circle */}

            <a href="https://wa.me/+919509171789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[225px] h-[225px] rounded-full flex flex-col items-center justify-center text-center bg-cover bg-center mt-[-10%] relative ml-[38vw] z-30 "
              style={{ backgroundImage: `url(${circle})` }}
            >
              <p className="text-sm text-[#B16046] font-medium mb-2">
                Your Perfect Card is <br /> Just a Message Away
              </p>
              <FaWhatsapp className="text-green-500 text-4xl mb-2" />
              <p className="text-sm text-[#B16046] font-medium">
                Reach Us on WhatsApp!
              </p>

            </a>
          </div>
        </div>
        <div className=' flex space-x-4 mb-[1vw]' >
          <p className="text-lg font-medium text-[#B16046]">
            Follow Us for Updates
          </p>
          <div className="flex space-x-3">
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/wedmonkey_?igsh=NXJxYndmZnV2MGJm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl text-pink-500 hover:scale-110 transition transform duration-200 cursor-pointer" />
            </a>
            {/* Facebook Icon */}
            <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-3xl text-blue-600 hover:scale-110 transition transform duration-200 cursor-pointer" />
          </a>
            {/* Twitter Icon */}
            <a
            href="https://www.twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-3xl text-blue-400 hover:scale-110 transition transform duration-200 cursor-pointer" />
          </a>

          </div>

        </div>


      </div>
      <div className="flex md:hidden overflow-hidden bg-[#EDE3D9] flex-col w-full h-screen relative items-center justify-center text-center p-4">
        {/* <img className="w-[150px] mb-4" src={wedlogo} alt="Logo" /> */}
        <div className="w-[16rem] top-[11rem] overflow-hidden object-contain absolute h-[12rem]">
          <img className='object-contain scale-[.7]' src={Rectangle} alt="" />
        </div>
        <div className="absolute w-full flex justify-center items-center h-full">
          <img src={wedlogo1} className='w-full absolute z-0 opacity-20 scale-[1.4]' alt="" />
          <img className='w-full absolute ml-[2rem] z-10 scale-[0.7]' src={comingsoondesc} alt="" />
          <img src={flower1} className='scale-[.4] absolute z-30 ml-[15rem] top-[17rem]' alt="" />
        </div>
        <a href="https://wa.me/+919509171789"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[140px] h-[140px] scale-[1] rounded-full flex flex-col items-center justify-center text-center bg-cover bg-center mt-[18.5rem] relative ml-[] backdrop:blur-lg z-30 "
          style={{ backgroundImage: `url(${circle})`, }}
        >
          <p className="text-[10px] text-[#B16046] font-medium mb-2">
            Your Perfect Card is <br /> Just a Message Away
          </p>
          <FaWhatsapp className="text-green-500 text-[15px] mb-2" />
          <p className="text-[8px] text-[#B16046] font-medium">
            Reach Us on WhatsApp!
          </p>

        </a>
        <div className=' flex gap-2 flex-col justify-center items-center mt-[3vw]' >
          <p className="text-[10px] font-medium text-[#B16046]">
            Follow Us for Updates
          </p>
          <div className="flex space-x-1">
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/wedmonkey_?igsh=NXJxYndmZnV2MGJm"
              target="_blank"
              rel="noopener noreferrer"
              className='scale-[.8]'
            >
              <FaInstagram className="text-3xl text-pink-500 hover:scale-110 transition transform duration-200 cursor-pointer" />
            </a>
            {/* Facebook Icon */}
            {/* <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className='scale-[.8]'

          >
            <FaFacebook className="text-3xl text-blue-600 hover:scale-110 transition transform duration-200 cursor-pointer" />
          </a> */}
            {/* Twitter Icon */}
            {/* <a
            href="https://www.twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className='scale-[.8]'

          >
            <FaTwitter className="text-3xl text-blue-400 hover:scale-110 transition transform duration-200 cursor-pointer" />
          </a> */}

          </div>

        </div>
        <img className='w-full top-0 absolute' src={group1} alt="" />
        <img className='w-full left-0 -bottom-0 absolute' src={group2} alt="" />
      </div>
    </>
  );
};

export default ComingSoonPage;
