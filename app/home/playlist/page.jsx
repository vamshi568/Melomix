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
    "collaborative" : false,
    "description": "From India to MENA, these hits will make you dance.",
    "external_urls" : {
        "spotify" : "https://open.spotify.com/playlist/37i9dQZF1DX7cLxqtNO3zl"
    },
    "followers" : {
        "href" : null,
        "total" : 47628
    },
    "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX7cLxqtNO3zl",
    "id" : "37i9dQZF1DX7cLxqtNO3zl",
    "images" : [ {
        "height" : null,
        "url" : "https://i.scdn.co/image/ab67706f0000000384696e0bd9318a598cc9373d",
        "width" : null
    } ],
    "name" : "Bollywood Araby",
    "owner" : {
        "display_name" : "Spotify",
        "external_urls" : {
        "spotify" : "https://open.spotify.com/user/spotify"
        },
        "href" : "https://api.spotify.com/v1/users/spotify",
        "id" : "spotify",
        "type" : "user",
        "uri" : "spotify:user:spotify"
    },
    "primary_color" : "#ffffff",
    "public" : false,
    "snapshot_id" : "MTYyNTI5NDQ3MiwwMDAwMDAwMGJiYzUwMjlhMGNjZWVlYTgxYTUyY2I0MTc1MjBjMmUy",
    "tracks" : {
        "href" : "https://api.spotify.com/v1/playlists/37i9dQZF1DX7cLxqtNO3zl/tracks?offset=0&limit=100",
        "items" : [ 
            {
                "added_at" : "2021-06-03T19:23:39Z",
                "added_by" : {
                    "external_urls" : {
                    "spotify" : "https://open.spotify.com/user/"
                    },
                    "href" : "https://api.spotify.com/v1/users/",
                    "id" : "",
                    "type" : "user",
                    "uri" : "spotify:user:"
                },
                "is_local" : false,
                "primary_color" : null,
                "track" : {
                    "album" : {
                    "album_type" : "single",
                    "artists" : [ {
                        "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                        },
                        "href" : "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                        "id" : "0LyfQWJT6nXafLPZqxe9Of",
                        "name" : "Various Artists",
                        "type" : "artist",
                        "uri" : "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                    } ],
                    "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/album/7IfUPFe5MSwcAp2Vw8ohF5"
                    },
                    "href" : "https://api.spotify.com/v1/albums/7IfUPFe5MSwcAp2Vw8ohF5",
                    "id" : "7IfUPFe5MSwcAp2Vw8ohF5",
                    "images" : [ {
                        "height" : 640,
                        "url" : "https://i.scdn.co/image/ab67616d0000b273bd04f8c4ddaa8586e3f1505d",
                        "width" : 640
                    }, {
                        "height" : 300,
                        "url" : "https://i.scdn.co/image/ab67616d00001e02bd04f8c4ddaa8586e3f1505d",
                        "width" : 300
                    }, {
                        "height" : 64,
                        "url" : "https://i.scdn.co/image/ab67616d00004851bd04f8c4ddaa8586e3f1505d",
                        "width" : 64
                    } ],
                    "name" : "BurjKhalifa (From \"Laxmii\")",
                    "release_date" : "2020-10-18",
                    "release_date_precision" : "day",
                    "total_tracks" : 1,
                    "type" : "album",
                    "uri" : "spotify:album:7IfUPFe5MSwcAp2Vw8ohF5"
                    },
                    "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/5EXIQQjCaCnRPJ68SxYURB"
                    },
                    "href" : "https://api.spotify.com/v1/artists/5EXIQQjCaCnRPJ68SxYURB",
                    "id" : "5EXIQQjCaCnRPJ68SxYURB",
                    "name" : "Shashi",
                    "type" : "artist",
                    "uri" : "spotify:artist:5EXIQQjCaCnRPJ68SxYURB"
                    }, {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/6xElGyunMSlnuJ2vabDUWA"
                    },
                    "href" : "https://api.spotify.com/v1/artists/6xElGyunMSlnuJ2vabDUWA",
                    "id" : "6xElGyunMSlnuJ2vabDUWA",
                    "name" : "DJ Khushi",
                    "type" : "artist",
                    "uri" : "spotify:artist:6xElGyunMSlnuJ2vabDUWA"
                    }, {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/3tPQOjkxO3mrYrrgkTeXgH"
                    },
                    "href" : "https://api.spotify.com/v1/artists/3tPQOjkxO3mrYrrgkTeXgH",
                    "id" : "3tPQOjkxO3mrYrrgkTeXgH",
                    "name" : "Nikhita Gandhi",
                    "type" : "artist",
                    "uri" : "spotify:artist:3tPQOjkxO3mrYrrgkTeXgH"
                    }, {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4x4Q6d60hC0ZuLloMeCLoS"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4x4Q6d60hC0ZuLloMeCLoS",
                    "id" : "4x4Q6d60hC0ZuLloMeCLoS",
                    "name" : "Madhubanti",
                    "type" : "artist",
                    "uri" : "spotify:artist:4x4Q6d60hC0ZuLloMeCLoS"
                    } ],
                    "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
                    "disc_number" : 1,
                    "duration_ms" : 187570,
                    "episode" : false,
                    "explicit" : false,
                    "external_ids" : {
                    "isrc" : "INZ031408360"
                    },
                    "external_urls" : {
                    "spotify" : "https://open.spotify.com/track/3ZVKI8jix6PjEFx2xFBFhz"
                    },
                    "href" : "https://api.spotify.com/v1/tracks/3ZVKI8jix6PjEFx2xFBFhz",
                    "id" : "3ZVKI8jix6PjEFx2xFBFhz",
                    "is_local" : false,
                    "name" : "BurjKhalifa (From \"Laxmii\")",
                    "popularity" : 67,
                    "preview_url" : "https://p.scdn.co/mp3-preview/db40ab496ac6cbfdc8b87e8ecf2032b18073b1e5?cid=f25d283eae8046588034aee0a42c0f31",
                    "track" : true,
                    "track_number" : 1,
                    "type" : "track",
                    "uri" : "spotify:track:3ZVKI8jix6PjEFx2xFBFhz"
                },
                "video_thumbnail" : {
                    "url" : null
                }
            },
            
        ],
        "limit" : 100,
        "next" : null,
        "offset" : 0,
        "previous" : null,
        "total" : 50
        },
    "type" : "playlist",
    "uri" : "spotify:playlist:37i9dQZF1DX7cLxqtNO3zl"
});
const [uris,seturis] = useState('')
const [index, setindex] = useState(0)
const router=useRouter()
const [isloading,setrender] = useState(true)
const songid1=useSelector(state=>state.counter.value)
const songindex=useSelector(state=>state.navigation.value)
const dispatch=useDispatch()
  const renderalbums = async () => {
    setrender(true)
    const token = Cookies.get("clientCode");
    const url = `https://api.spotify.com/v1/users/spotify/playlists/${songid}`;
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
  const onplaying=(uri,index)=>{
    seturis(uri)
    setindex(index)
  }
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
    <div className="text-white max-[600px]:p-6 sm:ml-36">
      
        <h1 onClick={()=>router.back()}  className="items-center cursor-pointer  sm:mt-6 flex mb-6 font-semibold">

        < BsArrowLeftShort className='text-3xl'/>  Back
        </h1>
       
      <div className=" sm:flex-row flex flex-col max-[600px]:items-center gap-6">
        <img
          className="rounded-lg h-[150px] w-[150px] sm:h-[295px] sm:w-[295px]"
          src={details.images[0].url}
          alt={details.name}
        />
        <div className="sm:self-end max-[600px]:text-center gap-6">
          <p className="hidden sm:inline">#</p>
          <h1 className="sm:text-7xl text-3xl font-bold">{details.name}</h1>
          <p className="text-[#94A3B8] mt-2">{details.description}</p>
        </div>
      </div>
      <div className=" grid-cols-6 mb-8 mt-8 sm:grid hidden">
        <div className="col-span-2 flex ">
          <p className="w-10"></p>
          <p>Track</p>
        </div>
        <div className="col-span-4 grid grid-cols-4">
          <p>Album</p>
          <p>Time</p>
          <p>Artist</p>
          <p>Added</p>
        </div>
      </div>
      <hr className="w-11/12 max-[600px]:hidden" />
      <div className="flex flex-col gap-4 mb-20 sm:mb-32 mt-8">
        {details.tracks.items.map((item, indexi) => (
          <>
          <div onClick={()=>handelsong(details.id,indexi)} key={item.id} className={`${details.id===songid1 && indexi===songindex ? 'bg-[#303030]':null} cursor-pointer max-[600px]:hidden grid items-center grid-cols-6 h-20`}>
            <div className="col-span-2 flex">
              <p className="ml-4 w-10">{indexi + 1}</p>
              <p >{item.track.name}</p>
            </div>
            <div className="col-span-4 grid grid-cols-4">
              <p>{item.track.album.name}</p>
              <p>{formatTime(item.track.duration_ms)}</p>
              <p>{item.track.artists[0].name}</p>
              <p>{formatDate(item.added_at)}</p>
            </div>
          </div>
          <div onClick={()=>handelsong(details.id,indexi)} key={item.id} className={`${details.id===songid1 && indexi===songindex ? 'bg-[#303030]':null} cursor-pointer sm:hidden flex items-center justify-between  h-14`}>
            <div className="">
              <p >{item.track.name}</p>
              <p className="text-[#94A3B8] text-xs">{item.track.artists[0].name}</p>
            </div>
            <div className="">
              <p className="text-[#94A3B8]">{formatTime(item.track.duration_ms)}</p>
              
              
            </div>
          </div>
          </>

        ))}
      </div>
      <div>
      {/* <Player  trackUri={uris} /> */}
      </div>
      {/* <AudioPlayer url={uris} onnext={onnext} onprevious={onprevious}/> */}
    </div>
  );
};

export default Playlistmoods;
