import React from 'react'; // Ensure this path is correct.
import wedlogo1 from '../assets/WEDMONKEY_LOGO-removebg-preview.png'; // Ensure this path is correct.
import Rectangle from './assests/Rectangle 453.png'
import comingsoondesc from './assests/comingsoondesc.png'
import circle from '../assets/Ellipse 79.png'
import group1 from '../assets/Group 1.png'
import groupD1 from '../assets/Group D.png'
import groupD2 from '../assets/Group D2.png'
import group2 from '../assets/Group 2.png'
import flower1 from '../assets/Flower 1.png'
import { FaInstagram, FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';

const ComingSoonPage = () => {
  return (
    <>
      <div
        className="h-screen w-full relative overflow-hidden bg-[#EDE3D9] bg-center hidden md:flex flex-col items-center  "
      // style={{ backgroundImage: `url(${comingsoonbg})` }}
      >
        {/* Responsive left image */}
        <img
          className="absolute top-0 left-0 md:w-[38vw] 2xl:w-[35vw] h-auto object-contain"
          src={groupD1}
          alt=""
        />

        {/* Responsive right image */}
        <img
          className="absolute top-0 right-0 md:w-[33vw] 2xl:w-[30vw] h-auto object-contain"
          src={groupD2}
          alt=""
        />
        <div >
          <div className='flex 2xl:scale-[.9] md:scale-[.8] justify-center items-center'>
            <img className='w-[200px]' src="https://s3-alpha-sig.figma.com/img/876c/f664/72d86b7984598da280ff368cc5ae4784?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j8E3Yqimi~AE~1BzFw1oxBHEIYoeHZbYlu1tqHDkHv6xIyT1bCudSCLLfL3IDrUgP2OXu5MTj9i8Cme-d2ekWxX-cG~mGBwdhp1lJ8V-28ke3kzQbjPgQhcK0QyLyVfMezltclhck53zuNFNAHNtUVYEN6Q0z-lMw0RoGUL3zLcY~Kq4XfqAjW6Ilnxq5o4rcoEoVIAObNTZiUmUr~LyvFYEzGSze~G7hxvMOUfckqlD9tagDrogj4iB2l-KhUwfOxoUOMFGhlAuD3HdVv5~6NIO1yaZYG2pANIGuSpl~ahl2CGvKJU3yMZagmRaEMRQUGM8rL2N5a2-DWRuH11QuQ__" alt="" />
          </div>

          <div className="relative 2xl:scale-[.9] xl:scale-[.8] lg:scale-[.8] md:scale-[.7] flex md:mt-10 xl:mt-[vw] 2xl:mt-10 flex-col items-center">
            {/* Rectangle image positioned above the logo */}
            <img
              src={Rectangle}
              alt="Rectangle"
              className="absolute  mr-[20vw] 2xl:mr-[600px] md:mr-[40vw] md:w-[35%] 2xl:w-[35%] z-10 h-auto"
            />
            {/* flower  Logo */}
            <div className="absolute z-[40] top-[13vw] md:left-[70%] 2xl:left-[70%]  mx-auto">
              <img
                className="w-[100px]   z-[50]"
                src="https://s3-alpha-sig.figma.com/img/507d/e56b/c66ad11c74400dac98d96725338d9d5b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhaXE0ynxTfGTfoA0h-s-YxGDDP5mqJAF2s~BmIaudR3QdipcHNXVBtjehmUFfOkteswqo~IBiT7c3YNdXmsGTRUHTwW45bBcCom5gJo8x4eGnCY-dWSzUl2gz0DFSomCbL5WxoKb7Yh3TWld2kbFPh8y32EirqRd-OZBi3A~A6yeCV14nHSv0ReYFED4iKsml-KFANnqzXdMbgAulKy8MD6PAa~fsMPtW-mlCm9li2W5gYHxIqlOs1-YeBZHmyqSZbVIRJXMBRDW5WDrbhZplIH0uqnR2OcR6I9-0QSQYP5EbehK0AFuAXNXXZPsdJju7TmI7GAKWBClEtcvvWZWg__"
                alt=""
              />
            </div>

            <img src={wedlogo1} alt="Logo" className="2xl:scale-[1.5] md:scale-[1.4] w-full h-full opacity-20 absolute" />

            <img src={comingsoondesc} className='mt-[35%] md:h-[12vw] 2xl:h-[15vw] relative ml-[2vw] z-30' alt='description' />


            {/* circle */}

            <a href="https://wa.me/+919509171789"
              target="_blank"
              rel="noopener noreferrer"
              className="2xl:w-[225px] md:w-[200px] md:h-[200px] 2xl:scale-[.9] xl:scale-[.8] lg:scale-[.8] md:scale-[.7]  2xl:h-[225px] rounded-full flex flex-col items-center justify-center text-center bg-cover bg-center mt-[-10%] relative ml-[38vw] z-30 "
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
        <div className="w-[60%] top-[20%] overflow-hidden object-contain absolute h-auto">
          <img className="object-contain scale-[.7]" src={Rectangle} alt="" />
        </div>
        <div className="absolute w-full flex justify-center items-center h-full">
          <img
            src={wedlogo1}
            className="w-full absolute z-0 opacity-20 scale-[1.4]"
            alt=""
          />
          <img
            className="w-full absolute ml-[2rem] z-10 scale-[0.7]"
            src={comingsoondesc}
            alt=""
          />
          <img
            src={flower1}
            className="scale-[.4] absolute z-30 ml-[15rem] top-[70%]"
            alt=""
          />
        </div>
        <a
          href="https://wa.me/+919509171789"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[35vw] h-[35vw] rounded-full flex flex-col items-center justify-center text-center bg-cover bg-center mt-[85%] relative backdrop:blur-lg z-30"
          style={{ backgroundImage: `url(${circle})` }}
        >
          <p className="text-[2vw] text-[#B16046] font-medium mb-2 text-center">
            Your Perfect Card is <br /> Just a Message Away
          </p>
          <FaWhatsapp className="text-green-500 text-[5vw] mb-2" />
          <p className="text-[2vw] text-[#B16046] font-medium text-center">
            Reach Us on WhatsApp!
          </p>
        </a>
        <div className="flex gap-2 flex-col justify-center items-center mt-[8%]">
          <p className="text-[2.5vw] font-medium text-[#B16046]">
            Follow Us for Updates
          </p>
          <div className="flex space-x-2">
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/wedmonkey_?igsh=NXJxYndmZnV2MGJm"
              target="_blank"
              rel="noopener noreferrer"
              className="scale-[.8]"
            >
              <FaInstagram className="text-[6vw] text-pink-500 hover:scale-110 transition transform duration-200 cursor-pointer" />
            </a>
          </div>
        </div>
        <img className="w-full object-contain top-0 absolute" src={group1} alt="" />
        <img className="w-full object-contain left-0 -bottom-0 absolute" src={group2} alt="" />
      </div>

    </>
  );
};

export default ComingSoonPage;
