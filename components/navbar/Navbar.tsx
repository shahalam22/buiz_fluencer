'use client';
import Image from "next/image";
import React, { useState } from "react";
import Button from "../button/Button";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleMenuIcon = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <div className=" bg-black text-white py-4 px-2">
        <div className="navbar">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">
                <Image src={'/logo.png'} alt="logo" width={"100"} height={"100"}/>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[15px]">
                <li className="px-6 hover:text-[#ccf281]"><a>HOME</a></li>
                <li className="px-6 hover:text-[#ccf281]"><a>SERVICES</a></li>
                <li className="px-6 hover:text-[#ccf281]"><a>ABOUT</a></li>
                <li className="px-6 hover:text-[#ccf281]"><a>CONTACT</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="hidden md:inline-flex pr-4">
                <Button text="Get Started"/>
            </div>
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden swap swap-rotate" onClick={handleMenuIcon}>
                <input type="button"/>
                
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512">
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512">
                  <polygon
                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </div>    
        
            </div>
          </div>
          </div>
          {
            openMenu && (
                <ul
                  className="flex flex-col justify-center items-center text-[15px] bg-black rounded-box z-[1] my-5 w-full">
                  <li className="hover:text-[#ccf281] m-2"><a>HOME</a></li>
                  <li className="hover:text-[#ccf281] m-2"><a>SERVICES</a></li>
                  <li className="hover:text-[#ccf281] m-2"><a>ABOUT</a></li>
                  <li className="hover:text-[#ccf281] m-2"><a>CONTACT</a></li>
                </ul>
            )
          }
        </div>
    )
}

export default Navbar;