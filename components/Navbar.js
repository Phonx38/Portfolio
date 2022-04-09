import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaHamburger, FaMenu } from "react-icons/fa";

function MobileNav({ open, setOpen }) {
  return (
    <>
      <div
        className={`absolute top-0 left-0 h-screen w-screen bg-gray-400 transform ${
          open ? "-translate-x-0" : "-translate-x-full "
        } transition-transform duration-300 ease-in-out filter drop-shadow-md z-20`}
      >
        <div className="flex flex-col items-center justify-center h-full ml-4 player">
          <Link href="/about">
            <h1
              className="text-xl font-normal my-4"
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              About{" "}
            </h1>
          </Link>
          {/* <Link href="/projects">
            <h1
              className="text-xl font-normal my-4"
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              Projects
            </h1>
          </Link> */}
          <Link href="/posts">
            <h1
              className="text-xl font-normal my-4"
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              Blogs
            </h1>
          </Link>
          {/* <Link href="/posts">
            <h1
              className="text-xl font-normal my-4"
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              Contacts
            </h1>
          </Link> */}
          <Link href="/mintnft">
            <div className="  mx-3 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 px-5 py-3 rounded-lg shadow-lg cursor-pointer hover:scale-110 duration-150">
              <h1 className="text-white font-bold text-sm player ">Mint NFT</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("bg-transparent");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setColor("bg-transparent");
    } else if (window.scrollY > 70) {
      return setColor(
        "bg-black py-2 bg-opacity-90 shadow-md transition ease-in-out"
      );
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div
      className={`fixed flex flex-row items-center justify-between z-30 w-full text-white py-5 pt-8 px-10  ${color}`}
    >
      <MobileNav open={open} setOpen={setOpen} />
      <Link href="/">
        <div className=" cursor-pointer">
          <h1 className="text-xl md:text-2xl player text-transparent bg-clip-text bg-gradient-to-r  from-rose-500 via-red-400 to-red-500">
            blocks
            <br />
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-400 to-red-500">
              by
            </span>
            blocks
          </h1>
        </div>
      </Link>

      <div
        className="z-50 flex relative w-8 h-5 flex-col justify-between items-center md:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {/* hamburger button */}
        <span
          className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
            open ? "rotate-45 translate-y-3.5" : ""
          }`}
        />
        <span
          className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${
            open ? "w-0" : "w-full"
          }`}
        />
        <span
          className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${
            open ? "-rotate-45 -translate-y-3.5" : ""
          }`}
        />
      </div>

      <div className="hidden md:flex justify-evenly items-center">
        <Link href="/about">
          <h1 className="px-3 text-md font-semibold cursor-pointer player hover:text-purple-600 duration-150">
            About
          </h1>
        </Link>
        <Link href="/posts">
          <h1 className="px-3 text-md font-semibold cursor-pointer player hover:text-purple-600 duration-15">
            Blogs
          </h1>
        </Link>
        <Link href="/mintnft">
          <div className="  mx-3 bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 px-5 py-3 rounded-lg shadow-lg cursor-pointer hover:scale-110 duration-150">
            <h1 className="text-white font-bold text-sm player ">Mint NFT</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
