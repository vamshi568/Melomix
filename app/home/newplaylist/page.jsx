"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from "next/navigation";
import { BsArrowLeftShort } from "react-icons/bs";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activesong, increment } from "@/app/globalredux/slices/slice";
import Loading from "@/components/Loading";

const Playlistmoods = () => {
  const songid=useSelector(state=>state.playlistid.value)
  const [details, setdetails] = useState({
    "album_type" : "single",
    "artists" : [ 
        {
            "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/7gXy60xRcwYujBFoYHnR2O"
            },
            "href" : "https://api.spotify.com/v1/artists/7gXy60xRcwYujBFoYHnR2O",
            "id" : "7gXy60xRcwYujBFoYHnR2O",
            "name" : "Big Red Machine",
            "type" : "artist",
            "uri" : "spotify:artist:7gXy60xRcwYujBFoYHnR2O"
        },
        
    ],
    "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
    "copyrights" : [ {
        "text" : "2021 Jagjaguwar / 37d03d",
        "type" : "C"
    }, {
        "text" : "2021 Jagjaguwar / 37d03d",
        "type" : "P"
    } ],
    "external_ids" : {
        "upc" : "617308011296"
    },
    "external_urls" : {
        "spotify" : "https://open.spotify.com/album/4kD0pFwhEjEiF9pwUwkpNo"
    },
    "genres" : [ ],
    "href" : "https://api.spotify.com/v1/albums/4kD0pFwhEjEiF9pwUwkpNo",
    "id" : "4kD0pFwhEjEiF9pwUwkpNo",
    "images" : [ {
        "height" : 640,
        "url" : "https://i.scdn.co/image/ab67616d0000b273b8abc4de41be8b3158a4ef40",
        "width" : 640
    }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/ab67616d00001e02b8abc4de41be8b3158a4ef40",
        "width" : 300
    }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/ab67616d00004851b8abc4de41be8b3158a4ef40",
        "width" : 64
    } ],
    "label" : "Jagjaguwar",
    "name" : "Renegade (feat. Taylor Swift)",
    "popularity" : 0,
    "release_date" : "2021-07-02",
    "release_date_precision" : "day",
    "total_tracks" : 3,
    "tracks" : {
        "href" : "https://api.spotify.com/v1/albums/4kD0pFwhEjEiF9pwUwkpNo/tracks?offset=0&limit=50",
        "items" : [ 
            {
                "artists" : [ {
                    "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/7gXy60xRcwYujBFoYHnR2O"
                    },
                    "href" : "https://api.spotify.com/v1/artists/7gXy60xRcwYujBFoYHnR2O",
                    "id" : "7gXy60xRcwYujBFoYHnR2O",
                    "name" : "Big Red Machine",
                    "type" : "artist",
                    "uri" : "spotify:artist:7gXy60xRcwYujBFoYHnR2O"
                }, {
                    "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
                    },
                    "href" : "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
                    "id" : "06HL4z0CvFAxyc27GXpf02",
                    "name" : "Taylor Swift",
                    "type" : "artist",
                    "uri" : "spotify:artist:06HL4z0CvFAxyc27GXpf02"
                } ],
                "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
                "disc_number" : 1,
                "duration_ms" : 254466,
                "explicit" : false,
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/track/1aU1wpYBSpP0M6IiihY5Ue"
                },
                "href" : "https://api.spotify.com/v1/tracks/1aU1wpYBSpP0M6IiihY5Ue",
                "id" : "1aU1wpYBSpP0M6IiihY5Ue",
                "is_local" : false,
                "name" : "Renegade (feat. Taylor Swift)",
                "preview_url" : "https://p.scdn.co/mp3-preview/e3b1851865f3ee5f213dfd8d950e344e6b14ec8c?cid=f25d283eae8046588034aee0a42c0f31",
                "track_number" : 1,
                "type" : "track",
                "uri" : "spotify:track:1aU1wpYBSpP0M6IiihY5Ue"
            },
            
        ],
        "limit" : 50,
        "next" : null,
        "offset" : 0,
        "previous" : null,
        "total" : 3
    },
    "type" : "album",
    "uri" : "spotify:album:4kD0pFwhEjEiF9pwUwkpNo"
});
const router=useRouter()
const [isloading,setrender] = useState(true)
const songid1=useSelector(state=>state.counter.value)
const songindex=useSelector(state=>state.navigation.value)
const dispatch=useDispatch()
  const renderalbums = async () => {
    setrender(true)
    const token = Cookies.get("clientCode");
    const url = `https://api.spotify.com/v1/albums/${songid}`;
    // const url = `https://api.spotify.com/v1/albums/7jCaWezpvGA2Ktjsq4GNwX`;
    const reseditors = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const dataeditors = await reseditors.json();
    setdetails({ ...dataeditors });
    setrender(false)
  };
 
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000); // Divide by 60,000 to get minutes
    const seconds = Math.floor((ms % 60000) / 1000); // Take the remainder after dividing by 60,000 and divide by 1000 to get seconds
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // Add leading zero to seconds if necessary
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return formatDistanceToNow(date, { addSuffix: true });
  };

  const handelsong=(playlistid,indexi)=>{
    
    dispatch(increment(playlistid))
    dispatch(activesong(indexi))

  }
 

  useEffect(() => {
    renderalbums()
  }, [setdetails]);

   if (isloading){
    return <Loading/>
  }
  


  return (
    <div className="w-screen overflow-hidden max-[600px]:p-6 text-white sm:ml-36">
      
        <h1 onClick={()=>router.back()}  className="cursor-pointer items-center flex sm:mt-6 mb-6 font-semibold">

        < BsArrowLeftShort className='text-3xl'/> Back
        </h1>
       
      <div className="flex gap-6">
        <img
          className="rounded-lg h-[150px] w-[150px] sm:h-[295px] sm:w-[295px]"
          src={details.images[0].url}
          alt={details.name}
        />
        <div className="self-end gap-6">
          <p className="max-[600px]:hidden">#</p>
          <h1 className="text-3xl sm:text-7xl font-bold">{details.name}</h1>
          <p className="text-[#94A3B8] mt-2">{details.description}</p>
        </div>
      </div>
      <div className=" grid-cols-6 mb-8 mt-8 sm:grid hidden">
        <div className="col-span-2 flex ">
          <p className="w-10"></p>
          <p>Track</p>
        </div>
        <div className="col-span-2 grid grid-cols-2">
          <p>Time</p>
          <p>Popularity</p>
        </div>
      </div>
      <hr className="w-11/12 max-[600px]:hidden" />
      <div className="flex flex-col gap-4 mb-20 sm:mb-32 mt-8">
        {details.tracks.items.map((item, indexi) => (
            <>
          <div onClick={()=>handelsong(details.id,indexi)} key={item.id} className={`${details.id===songid1 && indexi===songindex ? 'bg-[#303030]':null} cursor-pointer max-[600px]:hidden grid items-center grid-cols-6 h-20`}>
            <div className="col-span-2 flex">
              <p className="ml-4 w-10">{indexi + 1}</p>
              <p >{item.name}</p>
            </div>
            <div className="col-span-2 grid grid-cols-2">
              <p>{formatTime(item.duration_ms)}</p>
            
              <p>{details.popularity}</p>
            </div>
          </div>
          <div onClick={()=>handelsong(details.id,indexi)} key={item.id} className={`${details.id===songid1 && indexi===songindex ? 'bg-[#303030]':null} cursor-pointer sm:hidden flex items-center justify-between  h-14`}>
            <div className="">
              <p >{item.name}</p>
              <p className="text-[#94A3B8] text-xs">{item.artists[0].name}</p>

            </div>
            <div className="">
              <p>{formatTime(item.duration_ms)}</p>
            
            </div>
          </div>
            </>
        ))}
      </div>
      
    </div>
  );
};

export default Playlistmoods;
