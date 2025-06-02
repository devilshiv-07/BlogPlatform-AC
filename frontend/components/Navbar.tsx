"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { logout } from "@/lib/api"; // import logout function
import { useRouter } from "next/navigation";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import Image from "next/image";
import Icon from "../public/Icon.webp";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // check cookie presence
    if (typeof window !== "undefined") {
      const cookies = document.cookie;
      setIsLoggedIn(cookies.includes("accessToken"));
    }
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsLoggedIn(false);
    router.push("/signup");
  };

  const menuItems = (
    <>
      <Link
        href="/"
        className="hover:bg-orange-300 text-orange-300 hover:text-black rounded-md py-1 px-3"
        onClick={() => setSideBar(false)}
      >
        Home
      </Link>
      <Link
        href="/dashboard"
        className="hover:bg-orange-300 text-orange-300 hover:text-black rounded-md py-1 px-3"
        onClick={() => setSideBar(false)}
      >
        Dashboard
      </Link>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="hover:bg-orange-300 text-orange-300 hover:text-black rounded-md py-1 px-3"
        >
          Logout
        </button>
      ) : (
        <Link
          href="/signup"
          className="hover:bg-orange-300 text-orange-300 hover:text-black rounded-md py-1 px-3"
          onClick={() => setSideBar(false)}
        >
          SignUp
        </Link>
      )}
    </>
  );

  return (
    <div className="nav h-[6vh] md:h-[8vh] flex items-center justify-between px-4 md:px-16 relative bg-[#232323] rounded-full m-4 lg:mx-10 lg:my-6">
      <Image src={Icon} alt="icon_img" height={50} />
      <div
        className="mr-2 md:hidden cursor-pointer text-orange-300"
        onClick={() => setSideBar(!sideBar)}
      >
        {sideBar ? <RxCross2 size={30} /> : <IoReorderThreeOutline size={35} />}
      </div>

      {/* Sidebar menu */}
      {sideBar && (
        <div className="h-[88vh] bg-[#232323] w-[60vw] sm:w-[45vw] z-30 flex flex-col gap-10 md:hidden absolute top-[8vh] right-0 pt-10 px-2 sm:pt-12 sm:px-6 rounded-lg">
          {menuItems}
        </div>
      )}

      {/* Desktop menu */}
      <div className="py-4 md:flex justiy-between md:gap-16 hidden">
        {menuItems}
      </div>
    </div>
  );
};

export default Navbar;
