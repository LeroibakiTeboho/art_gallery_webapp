"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// https://coolors.co/ff8811-f4d06f-fff8f0-9dd9d2-392f5a
// https://youtu.be/4gcy-qT9kGw
// https://lokeshdhakar.com/projects/lightbox2/#getting-started
// https://dianerosenstein.com/exhibitions/


const Navbar = () => {
  const [nav, setNav] = useState(false);


  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect(() => {
  //   const changeColor = () => {
  //     if(window.scrollY >= 90) {
  //       setColor('#FFF8F0')
  //       setTextColor('#000')
  //     }
  //     else
  //     {
  //       setColor('transparent');
  //       setTextColor("#000")
  //     }
  //   }

  //   window.addEventListener('scroll',changeColor);
  // })

  return (
    <div className=" sticky left-0 top-0 w-full z-10 ease-in duration-300 ">
      <div className="max-w-[1360px] m-auto flex justify-between items-center py-5 px-8 text-[#392F5A] border-b-[1px] border-gray-400 bg-[#FFF8F0]">
        <Link href="/">
          <h1 className="font-bold text-[1.8rem]">Artistry Haven.</h1>
        </Link>

        <ul className="hidden md:flex gap-5 text-[1.1rem] items-center ">
          <li className="hover:text-[#9DD9D2] ease-in duration-200">
            <Link href="/">Home</Link>
          </li>
          <span>-</span>
          <li className="hover:text-[#9DD9D2] ease-in duration-200">
            <Link href="/#">Galley</Link>
          </li>
          <span>-</span>
          <li className="hover:text-[#9DD9D2] ease-in duration-200">
            <Link href="/#">Exhibitions</Link>
          </li>
          <span>-</span>
          <li className="hover:text-[#9DD9D2] ease-in duration-200">
            <Link href="/artist">Artists</Link>
          </li>
          <span>-</span>
          <li className="hover:hover:text-[#9DD9D2] ease-in duration-200">
            <Link href="/events">Art Fairs</Link>
          </li>
        </ul>

        {/* || mobile button */}
        <div
          onClick={handleNav}
          className="block md:hidden z-10 cursor-pointer"
        >
          {nav ? (
            <AiOutlineClose className="text-white" size={25} />
          ) : (
            <AiOutlineMenu className="text-black" size={25} />
          )}
        </div>
        {/* || mobile menu */}
        <div
          className={
            nav
              ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/95 text-center ease-in duration-300"
              : "md:hidden absolute  right-[-100vw]  top-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/95 text-center ease-in duration-300"
          }
        >
          <ul className="text-white">
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#">Exhibitions</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/artist">Artists</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/events">Art Fairs</Link>
            </li>

            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
