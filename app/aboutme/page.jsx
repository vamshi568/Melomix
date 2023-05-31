"use client";
import Loading from "@/components/Loading";
import Cookies from "js-cookie";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

const Aboutme = () => {
  const token = Cookies.get("clientCode");
  console.log('hai its me')
  const [profile, setprofile] = useState({});
  const [counter, setcounter] = useState(0)
  const [isloading,setisloading] = useState(false)
  const renderprofile = async () => {
    setisloading(true)
    const urlOfMe = "https://api.spotify.com/v1/me";

    const resofme = await fetch(urlOfMe, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const dataofme = await resofme.json();
    console.log(dataofme);
    setprofile({ ...dataofme });
    const urlOfMeplay = "https://api.spotify.com/v1/me/playlists";

    const resofmeplay = await fetch(urlOfMeplay, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const dataofmeplay = await resofmeplay.json();
    setcounter(dataofmeplay.items.length);
    setisloading(false)
  };

  useEffect(() => {
    renderprofile();
  }, []);


  if (isloading){
    return (
      
        <Loading/>
      
    );
  }

  if (profile.display_name === undefined) {
    return (
      <div className="text-white w-screen  flex flex-col justify-center items-center h-screen">
         <Link href={"./login"} onClick={() => Cookies.remove("clientCode")}>
        <button
          type="button"
          className="font-bold border-2 border-white rounded-full border-solid px-6 py-2"
        >
          Log out
        </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="text-white  flex flex-col justify-center items-center h-screen  w-[100vw]">
      <div className="p-2 w-[80px] h-[80px] sm:h-[150px] mb-6 sm:w-[150px] border-solid border-2 rounded-full flex justify-center items-center">
        {profile.images.length === 0 ? (
          <FaUser className="text-4xl sm:text-7xl " />
        ) : (
          <img src={`${profile.images[0].url}`} alt="userlogo" />
        )}
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold mb-4">{profile.display_name}</h1>
      <div className="flex mb-9 items-center justify-center gap-8">
        <div>
          <p className="text-green-700 text-center mb-2">
            {profile.followers.total}
          </p>
          <p className="text-[#9B9B9B]">FOLLOWERS</p>
        </div>
        <div>
          <p className="text-green-700 text-center mb-2">{counter}</p>
          <p className="text-[#9B9B9B] ">PLAYLISTS</p>
        </div>
      </div>
      <Link href={"./login"} onClick={() => Cookies.remove("clientCode")}>
        <button
          type="button"
          className="font-bold border-2 border-white rounded-full border-solid px-6 py-2"
        >
          Log out
        </button>
      </Link>
    </div>
  );
};

export default Aboutme;
