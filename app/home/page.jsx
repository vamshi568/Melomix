"use client";
import React, { useEffect, useState } from "react";
import Editorspick from "@/components/Editorspick";
import Categories from "@/components/Categories";
import Newresealse from "@/components/Newrelease";
import Cookies from "js-cookie";
import Search from "@/components/Search";
import { BiSearchAlt } from "react-icons/bi";
import WhatsAppButton from "@/components/Whatsapp";
import Loading from "@/components/Loading";

const Home = ({ searchParams }) => {
  const clientId = "ec4e043c5b454f50b248c49f1cda2189";
  const clientSecret = "c1a28d43140c4080b4a87f211d7ead8a";
  const [editorspick, seteditorspick] = useState({});
  const [categories, setcategories] = useState({});
  const [newresealse, setnewresealse] = useState({});
  const [search, setsearch] = useState("");
  const [token, settoken] = useState("");
  const [renderseacrh, setrenderseacrh] = useState(false);
  const [searchresults, setsearchresults] = useState({});
  const [contacts, setcontacts] = useState(false)
  const [isloading, setisloading] = useState(false);

  const renderalbums = async (token) => {
    settoken(token);
    setisloading(true)
    const urleditors = `https://api.spotify.com/v1/browse/featured-playlists?country=IN`;
    const urlcategory = "https://api.spotify.com/v1/browse/categories";
    const urlnewrelease =
      "https://api.spotify.com/v1/browse/new-releases?country=IN";
    //editors choise
    const reseditors = await fetch(urleditors, {
      headers: { Authorization: `Bearer ${token}` },
    });
    

    //catergory
    const resmood = await fetch(urlcategory, {
      headers: { Authorization: `Bearer ${token}` },
    });

    //new realese
    const resnew = await fetch(urlnewrelease, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (reseditors.status!==200 || resmood.status!==200 || resnew.status!==200) {
      setisloading(false)
      setcontacts(true)
    }else{
      const dataeditors = await reseditors.json();
    seteditorspick({ ...dataeditors.playlists });
    const datamood = await resmood.json();
    setcategories({ ...datamood.categories });
    const datanew = await resnew.json();
    setnewresealse({ ...datanew.albums });
    setisloading(false);

    }
  };

  const rendertoken = async () => {
    const clitecode = Cookies.get("clientCode");
    if (clitecode === undefined) {
      setisloading(true)
      
      const searchParams = new URLSearchParams(window.location.search);
    
    // Get the value of a specific parameter
    const paramValue = searchParams.get("code");

    console.log(paramValue); 
      const url = "https://accounts.spotify.com/api/token";
      const data = new URLSearchParams();
      data.append("grant_type", "authorization_code");
      data.append("client_id", clientId);
      data.append("client_secret", clientSecret);
      data.append("code", paramValue);
      data.append("redirect_uri", "https://melomix.vercel.app/home");

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            new Buffer.from(clientId + ":" + clientSecret).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      });
      const data1 = await response.json();
      // console.log(data1);
      const expires = new Date();
      expires.setTime(expires.getTime() + 1 * 60 * 60 * 1000);
      Cookies.set("clientCode", data1.access_token, { expires });
      setisloading(false);
      renderalbums(data1.access_token);
    } else {
      renderalbums(clitecode);
    }
  };
  useEffect(() => {
    
    rendertoken();
    setisloading(false)

    // renderalbums()
  }, []);

  useEffect(()=>{
    if (search.length === 0) {
      setrenderseacrh(false);
    }
  },[search])

  const rendersearch = async () => {
    const searchurl = `https://api.spotify.com/v1/search?type=track,playlist&q=${search}&market=from_token`;
    const reseditors = await fetch(searchurl, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await reseditors.json();
    setsearchresults({ ...data });
    setrenderseacrh(true);
    
  };
  const handleSearchKeyUp = (e) => {
    if (e.key === "Enter") {
      rendersearch();
    }
    
  };
  if (isloading){
    return <Loading/>
  }

else if (contacts){
return <>
<div className="ml-32 flex flex-col justify-center items-center h-screen ">
<h1 className="text-white text-4xl text-center">You are not a registered user for this website for registaration click the below button and send me your email and name.</h1>

<WhatsAppButton className="text-white border-2 border-solid border-white rounded-full "/>
</div>
</> }

  return (
    <div className="relative">
      <div className="absolute mr-4 sm:flex hidden right-0 top-0  items-center rounded-full">
        <input
          className="ml-36 z-10 outline-none p-4 rounded-l-full h-[35px]"
          type="search"
          placeholder="search here"
          onKeyUp={handleSearchKeyUp}
          onChange={(e) => setsearch(e.target.value)}
          value={search}
        />
        <button
          className="pr-4 bg-white rounded-r-full h-[35px]"
          onClick={rendersearch}
        >
          <BiSearchAlt className="text-2xl" />
        </button>
      </div>
      {renderseacrh ? (
        <Search search={searchresults} />
      ) : (
        <>
          <Editorspick editorspick={editorspick} />
          <Categories categories={categories} />
          <Newresealse newresealse={newresealse} />
        </>
      )}
    </div>
  );
};

export default Home;
