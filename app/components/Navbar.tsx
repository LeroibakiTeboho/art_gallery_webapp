"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={{
        backgroundColor: `${color}`,
      }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="navbar max-w-[1360px] m-auto flex justify-between items-center py-8 px-8 text-white">
        <Link href="/">
          <h1
            style={{
              color: `${textColor}`,
            }}
            className="font-bold text-[2rem]"
          >
            Artistry Haven
          </h1>
        </Link>

        <ul
          style={{
            color: `${textColor}`,
          }}
          className="hidden xl:flex gap-8 text-[1.2rem] items-center "
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/#">Gallary</Link>
          </li>
          <li>
            <Link href="/artist">Artists</Link>
          </li>
          <li>
            <Link href="/exhibition">Exhibitions</Link>
          </li>

          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/support">Donate & Support</Link>
          </li>
          <li>
            <button className="btn rounded-md text-white btn-outline border px-4 cursor-pointer">
              Login
            </button>
          </li>
        </ul>

        {/* || mobile button */}
        <div onClick={handleNav} className="block xl:hidden z-10 cursor-pointer">
          {nav ? (
            <AiOutlineClose size={25} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={25} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* || mobile menu */}
        <div
          className={
            nav
              ? "xl:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "xl:hidden absolute  top-[-100vh] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#">Gallary</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/artist">Artists</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/exhibition">Exhibitions</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/about">About Us</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact Us</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/support">Donate and Support</Link>
            </li>
            <li className="p-4 text-2xl hover:text-gray-500">
              <button className="border py-3 px-5">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
