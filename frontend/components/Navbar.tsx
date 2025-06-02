"use client";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Icon from "../public/Icon.webp"
import Image from 'next/image'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { useState } from "react";
import "../styles/globals.css"

const Navbar = () => {

    const [sideBar, setSideBar] = useState(false);

  return (
    <div className=" nav h-[6vh] md:h-[8vh] flex items-center justify-between px-4 md:px-16 relative bg-[#232323] rounded-full m-4 lg:mx-10 lg:my-6">

      {/* logo? */}
      <div>
            <Image 
              src={Icon}
              alt="icon_img"
              height={50}
            />
      </div>

      {/* SideBar three line div  */}
      <div className="mr-2 md:hidden cursor-pointer text-orange-300" onClick={() => setSideBar(!sideBar)} >
        {sideBar ? (
          <RxCross2 size={30} />
        ) : (
          <IoReorderThreeOutline size={35} />
        )}
      </div>

      {/* Conditional rendering of sidebar */}
      {sideBar ? (
        <div className="h-[88vh] bg-[#232323] w-[60vw] sm:w-[45vw] z-30 flex flex-col gap-10 md:hidden absolute top-[8vh] right-0 pt-10 px-2 sm:pt-12 sm:px-6 rounded-lg">

        {/* Home Link  */}
        <Link
          href="/"
          className="hover:bg-orange-300 text-orange-300 hover:text-black rounded-md py-1 px-3"
          onClick={() => setSideBar(false)}
        >
          Home
        </Link>

        {/* DashBoard link  */}
        <Link
          href="/dashboard"
          className="hover:bg-orange-300 text-orange-300 hover:text-black rounded-md py-1 px-3"
          onClick={() => setSideBar(false)}
        >
          Dashboard
        </Link>

        {/* SignUp/Login link  */}
        <Link
          href="/signup"
          className="hover:bg-orange-300 text-orange-300 hover:text-black rounded-md py-1 px-3"
          onClick={() => setSideBar(false)}
        >
          SignUp
        </Link>
        
      </div>
      ) : (
        <></>
      )}

      {/* Icons for Navbar */}
      <div className="py-4 md:flex justiy-between md:gap-16 hidden">

        {/* Home Link  */}
        <Link
          href="/"
          className="hover:bg-orange-300 text-orange-300 hover:text-black rounded-md py-1 px-3"
        >
          Home
        </Link>

        {/* DashBoard link  */}
        <Link
          href="/dashboard"
          className="hover:bg-orange-300 text-orange-300 hover:text-black rounded-md py-1 px-3"
        >
          Dashboard
        </Link>

        {/* SignUp/Login link  */}
        <Link
          href="/signup"
          className="hover:bg-orange-300 text-orange-300 hover:text-black rounded-md py-1 px-3"
        >
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Navbar;