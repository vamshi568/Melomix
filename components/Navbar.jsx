"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { HiMusicalNote } from "react-icons/hi2";
import { MdQueueMusic } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import "../app/globals.css";
import Cookies from "js-cookie";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [bgcolor, setcolor] = useState("home");
  const [menu, setmenu] = useState(true);
  const activeStyle = {
    color: "#fff",
    backgroundColor: "#181818",
  };
  const activeStylem = {
    color: "#fff",
  };

  const inactiveStyle = {
    color: "#9B9B9B",
    backgroundColor: "#000",
  };

  const getLinkStyle = (linkColor) => {
    return bgcolor === linkColor ? activeStyle : inactiveStyle;
  };
  const getLinkStylem = (linkColor) => {
    return bgcolor === linkColor ? activeStylem : inactiveStyle;
  };

  return (
    <>
      <div className="relative max-[600px]:hidden">
        <nav className="fixed  bg-[#040306] z-20 flex h-screen flex-col justify-center items-center w-[98px]">
          <img className="absolute top-6 px-2" src="/logo.svg" alt="logo" />

          <Link
            href={"/aboutme"}
            onClick={() => setcolor("aboutme")}
            className={`${
              bgcolor === "aboutme" ? "iconactive" : null
            } relative  w-full flex flex-col items-center h-[80px] justify-center gap-1`}
            style={{ ...getLinkStyle("aboutme") }}
          >
            <FaUserAlt className="text-2xl mt-[7px]" />
            <p className="font-semibold mb-[19px]">Profile</p>
          </Link>
          <Link
            href={"/home"}
            onClick={() => setcolor("home")}
            className={`${
              bgcolor === "home" ? "iconactive" : null
            } relative w-full flex flex-col items-center h-[80px] justify-center gap-1`}
            style={{ ...getLinkStyle("home") }}
          >
            <AiFillHome className="text-2xl mt-[7px]" />
            <p className="font-semibold mb-[19px]">Home</p>
          </Link>
          <Link
            href={"/yourmusic"}
            onClick={() => setcolor("yourmusic")}
            className={`${
              bgcolor === "yourmusic" ? "iconactive" : null
            } relative w-full flex flex-col items-center h-[80px] justify-center gap-1`}
            style={{ ...getLinkStyle("yourmusic") }}
          >
            <HiMusicalNote className="text-2xl mt-[7px]" />
            <p className="font-semibold mb-[19px]">Your Music</p>
          </Link>
          <Link
            href={"/playlists"}
            onClick={() => setcolor("playlists")}
            className={`${
              bgcolor === "playlists" ? "iconactive" : null
            } relative w-full flex flex-col items-center h-[80px] justify-center gap-1`}
            style={{ ...getLinkStyle("playlists") }}
          >
            <MdQueueMusic className="text-3xl mt-[7px]" />
            <p className="font-semibold mb-[19px]">Playlists</p>
          </Link>
        </nav>
      </div>
      <div className="flex justify-between w-screen max-[600px]:h-[66px] sm:hidden items-center p-5 bg-[#040306]">
        {menu && (
          <>
            <img className="h-[20px] w-[60px] " src="/logo.svg" alt="logo" />
            <div>
              <CgMenuRight
                onClick={() => setmenu(false)}
                className="text-white text-2xl"
              />
            </div>
          </>
        )}
        {!menu && (
          <>
            <div className="w-full  max-[600px]:h-[66px] flex items-center">
              <nav className=" bg-[#040306] z-20 flex w-full justify-around  items-center ">
                <Link
                  href={"/aboutme"}
                  onClick={() => setcolor("aboutme")}
                  className={` w-full h-full flex flex-col items-center  justify-center gap-1`}
                  style={{ ...getLinkStylem("aboutme") }}
                >
                  <FaUserAlt onClick={()=>setmenu(true)} className="text-xl mt-[7px]" />
                </Link>
                <Link
                  href={"/home"}
                  onClick={() => setcolor("home")}
                  className={`  flex w-full flex-col h-full items-center  justify-center gap-1`}
                  style={{ ...getLinkStylem("home") }}
                >
                  <AiFillHome onClick={()=>setmenu(true)} className="text-2xl mt-[7px]" />
                </Link>
                <Link
                  href={"/yourmusic"}
                  onClick={() => setcolor("yourmusic")}
                  className={`  w-full h-full flex flex-col items-center  justify-center gap-1`}
                  style={{ ...getLinkStylem("yourmusic") }}
                >
                  <HiMusicalNote onClick={()=>setmenu(true)} className="text-2xl mt-[7px]" />
                </Link>
                <Link
                  href={"/playlists"}
                  onClick={() => setcolor("playlists")}
                  className={`  w-full h-full flex flex-col items-center  justify-center gap-1`}
                  style={{ ...getLinkStylem("playlists") }}
                >
                  <MdQueueMusic onClick={()=>setmenu(true)} className="text-3xl mt-[7px]" />
                </Link>
                <IoCloseSharp
                  onClick={() => setmenu(true)}
                  className="text-white  w-full text-2xl"
                />
              </nav>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
