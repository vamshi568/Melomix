"use client";
import React, { useEffect, useRef, useState } from "react";

import { FaPlay, FaPause } from "react-icons/fa";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { activesong } from "@/app/globalredux/slices/slice";
import Cookies from "js-cookie";
import "../app/globals.css";
import {Playerload,Playerloadsm} from "./Playerload";

const AudioPlayer = () => {
  const token = Cookies.get("clientCode");
  const songid = useSelector((state) => state.counter.value);
  const songindex = useSelector((state) => state.navigation.value);
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [newplaylist,setnewplaylist] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [details, setDetails] = useState({
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
            {'track':{'name':'bla'}},
            {'track':{'name':'bla'}},
            {'track':{'name':'bla'}},
            {'track':{'name':'bla'}},
            {'track':{'name':'bla'}},
            {'track':{'name':'bla'}},
            {'track':{'name':'bla'}},
            {'track':{'name':'bla'}},
            {'track':{'name':'bla'}},
            {'track':{'name':'bla'}},
            {'track':{'name':'bla'}},
            
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
  const [url, seturl] = useState("");
  const [isloading,setisloading]=useState(true);
  const [seacrchres,setseacrchres]=useState(false);
  const onprevious = () => {
    if (songindex>0){
      setIsPlaying(true);
      dispatch(activesong(songindex - 1));
      if (newplaylist){
        seturl(details.tracks.items[songindex-1].preview_url
        )  }else{

          seturl(details.tracks.items[songindex - 1].track.preview_url);
        }    }
  };
  const onnext = () => {
    if (songindex<details.tracks.total-1){
      setIsPlaying(true);
      dispatch(activesong(songindex + 1));
      if (newplaylist){
        seturl(details.tracks.items[songindex+1].preview_url
        )  }else{

          seturl(details.tracks.items[songindex + 1].track.preview_url);
        }    }
  };

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const handleSongEnded = () => {
    setIsPlaying(false);
    if (seacrchres){
      setIsPlaying(false);


    }else{

      setTimeout(() => {
        onnext();
        if (newplaylist && songindex<details.tracks.total-1){
          setIsPlaying(true);
          seturl(details.tracks.items[songindex+1].preview_url
            )  }else{
          if (songindex<details.tracks.total-1){
            setIsPlaying(true);
            
            seturl(details.tracks.items[songindex + 1].track.preview_url);
          }
        }
      }, 2000);
    };
  }
  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current;
    const progressPercentage = (currentTime / duration) * 100;
    setProgress(progressPercentage);
  };

  const handleSeek = (e) => {
    const { value } = e.target;
    const seekTime = (value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(value);
  };

  useEffect(() => {
    async function renderalbums() {
      setisloading(true)
      const url = `https://api.spotify.com/v1/users/spotify/playlists/${songid}`;
      const reseditors = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (reseditors.status ===404){
        setnewplaylist(true)
        const urli = `https://api.spotify.com/v1/albums/${songid}`;
        const reseditorsi = await fetch(urli, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (reseditorsi.status ===404){
        
        const urlit = `https://api.spotify.com/v1/tracks/${songid}`;
        const reseditorsit = await fetch(urlit, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const dataeditorsit = await reseditorsit.json();
      setDetails({ ...dataeditorsit });
      setseacrchres(true);
      console.log(dataeditorsit)
      seturl(dataeditorsit.preview_url);
      setisloading(false)
      }
      else{
        const dataeditorsi = await reseditorsi.json();
        setDetails({ ...dataeditorsi });
        console.log(dataeditorsi)
        seturl(dataeditorsi.tracks.items[songindex].preview_url);
        setseacrchres(false)
        setisloading(false)
      }
      }else{
setnewplaylist(false)
        const dataeditors = await reseditors.json();
        setseacrchres(false)
        setDetails({ ...dataeditors });
        
        seturl(dataeditors.tracks.items[songindex].track.preview_url);
        
        console.log(dataeditors)
        setisloading(false)
        
      }
    }
      if (token!==undefined){
    renderalbums()
    

    }
  }, [setDetails, seturl,songid]);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        togglePlayPause();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  
  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!audioRef.current.paused);
  };

  const updateTime = () => {
    const audioPlayer = audioRef.current;
    if (audioPlayer) {
      setCurrentTime(audioPlayer.currentTime);
    }
  };

  

  useEffect(()=>{
    if (token!==undefined  && details!==null && !newplaylist){

      seturl(details.tracks.items[songindex].track.preview_url)
      const audioPlayer = audioRef.current;

      const interval = setInterval(updateTime, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }else{
      seturl(details.tracks.items[songindex].preview_url)
      const audioPlayer = audioRef.current;
      const interval = setInterval(updateTime, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  },[songindex])
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

 if (songid === ''){
  return null
 }
  else if (isloading){
    return <>
    <Playerload className="pt-5 hidden audio-player max-[600px]:flex max-[600px]:flex-col max-[600px]:border-t-[1px] z-30 max-[600px]:border-solid border-[#9B9B9B] h-fit min-h-[100px] sm:min-h-[110px] fixed bottom-0 w-screen bg-black  justify-center left-0"/>
    <Playerloadsm className="pt-5 sm:hidden audio-player max-[600px]:flex max-[600px]:flex-col max-[600px]:border-t-[1px] z-30 max-[600px]:border-solid border-[#9B9B9B] h-fit min-h-[100px] sm:min-h-[110px] fixed bottom-0 w-screen bg-black flex justify-center left-0"/>
    
    </>
    
  }

  return (
    <div className="audio-player max-[600px]:flex max-[600px]:flex-col max-[600px]:border-t-[1px] z-30 max-[600px]:border-solid border-[#9B9B9B] h-fit min-h-[100px] sm:min-h-[110px] fixed bottom-0 w-screen bg-black flex justify-center left-0">
     <div className="flex justify-between">

    
       {!newplaylist ?<div className="text-white w-[250px] gap-4 flex items-center">
      <img
          className="rounded-sm h-[40px] w-[40px] sm:h-[60px] sm:w-[60px]"
          src={details.tracks.items[songindex].track.album.images[0].url}
          alt={details.name}
        />
        <div className="">
      <h1 className="text-white font-bold text-sm sm:text-base">{details.tracks.items[songindex].track.name}</h1>
        <p className="text-[#cbcbcb] max-[600px]:hidden font-semibold text-sm"> {details.tracks.items[songindex].track.album.name}</p>
        <p className="text-[#9B9B9B] text-xs">{details.tracks.items[songindex].track.artists[0].name}</p>
        
          </div>
      </div>: !seacrchres?
      <div className="text-white w-[250px] gap-4 flex items-center">
      <img
          className="rounded-sm h-[60px] w-[60px]"
          src={details.images[0].url}
          alt={details.name}
        />
        <div className="">
      <h1 className="text-white   font-semibold text-base">{details.tracks.items[songindex].name}</h1>
        <p className="text-[#9B9B9B] text-xs">{details.tracks.items[songindex].artists[0].name}</p>
          </div>
      </div>
      :<div className="text-white w-[250px] gap-4 flex items-center">
      <img
          className="rounded-sm h-[60px] w-[60px]"
          src={details.album.images[0].url}
          alt={details.name}
        />
        <div className="">
      <h1 className="text-white   font-semibold text-base">{details.name}</h1>
        <p className="text-[#9B9B9B] text-xs">{details.artists[0].name}</p>
          </div>
      </div>
        }
      <div className="flex gap-5 items-center text-white">
        {!seacrchres && <MdSkipPrevious className="text-2xl sm:text-5xl" onClick={onprevious} />}
        <button onClick={togglePlayPause}>
        
        {isPlaying ? (
          <FaPause className="text-2xl sm:text-5xl "  />
          ) : (
            <FaPlay className="text-2xl sm:text-5xl"  />
            )}
            </button>
        {!seacrchres && <MdSkipNext className="text-2xl sm:text-5xl sm:mr-8" onClick={onnext} />}
      </div>
      </div>
      <div className="audio-player ">
        <audio
          ref={audioRef} 
          src={url}
          controls={false}
          autoPlay={isPlaying}
          onPlay={handlePlay}
          onPause={handlePause}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleSongEnded}
          className=""
        />
        <div className="progress-bar-container max-[600px]:w-screen  h-7 ">
          <input
            type="range"
            className="progress-bar h-4 mr-2"
            value={progress}
            onChange={handleSeek}
            min="0"
            max="100"
            step="0.01"
          />
        </div>

        <div className="elapsed-time ml-4 max-[600px]:hidden text-white">{formatTime(currentTime)}</div>
      </div>
    </div>
  );
};

export default AudioPlayer;
