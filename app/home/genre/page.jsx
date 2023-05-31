"use client";
import { addaonsdid } from "@/app/globalredux/slices/slice";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowLeftShort } from "react-icons/bs";
import Loading from "@/components/Loading";

const Genre = () => {
  const [isloading, setisloading] = useState(true);
  const playlistid = useSelector((state) => state.moodid.value);
  const [details, setdetails] = useState({
    href: "https://api.spotify.com/v1/browse/categories/toplists/playlists?country=IN&offset=0&limit=20",
    items: [
      {
        collaborative: false,
        description: "Doja Cat & The Weeknd are on top of the Hottest 50!",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
        },
        href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M",
        id: "37i9dQZF1DXcBWIGoYBM5M",
        images: [
          {
            height: null,
            url: "https://i.scdn.co/image/ab67706f0000000324cee63f23e9ec905dbcb3b0",
            width: null,
          },
        ],
        name: "Today's Top Hits",
        owner: {
          display_name: "Spotify",
          external_urls: {
            spotify: "https://open.spotify.com/user/spotify",
          },
          href: "https://api.spotify.com/v1/users/spotify",
          id: "spotify",
          type: "user",
          uri: "spotify:user:spotify",
        },
        primary_color: null,
        public: null,
        snapshot_id:
          "MTYyNTE5ODQwMCwwMDAwMDRjMTAwMDAwMTdhNjU1ZjkyY2YwMDAwMDE3YTY0OWRhYmYw",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks",
          total: 50,
        },
        type: "playlist",
        uri: "spotify:playlist:37i9dQZF1DXcBWIGoYBM5M",
      },
    ],
    limit: 20,
    next: null,
    offset: 0,
    previous: null,
    total: 13,
  });
  const dispact = useDispatch();
  const router = useRouter();

  const render = async () => {
    setisloading(true);
    const token = Cookies.get("clientCode");
    const url = `https://api.spotify.com/v1/browse/categories/${playlistid}/playlists?country=IN`;
    const reseditors = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const dataeditors = await reseditors.json();
    setdetails({ ...dataeditors.playlists });

    setisloading(false);
    console.log(dataeditors);
  };

  useEffect(() => {
    render();
  }, []);
  const handleonclick = (id) => {
    dispact(addaonsdid(id));
    router.push("/home/playlist");
  };

  if (isloading) {
    return <Loading />;
  }

  return (
    <div className="text-white p-5 sm:ml-36">
      <p
        className="sm:mt-6 font-semibold flex items-center cursor-pointer"
        onClick={() => router.back()}
      >
        <BsArrowLeftShort className="text-3xl" /> Back
      </p>
      <h1 className="mt-12 text-2xl font-bold mb-8">Podcast</h1>
      <div className="flex sm:flex-row flex-col  sm:flex-wrap gap-4 sm:gap-12">
        {details.items.map((item) => (
          <div
            onClick={() => handleonclick(item.id)}
            className="flex sm:flex-col  cursor-pointer items-center gap-2 sm:w-[166px]"
            key={item.id+Math.random()}
          >
            <img
              className="rounded w-[80px] h-[80px] sm:w-[166px] sm:h-[166px]"
              src={item.images[0].url}
              alt={item.id}
            />
            <div >
            <h1 className="font-bold sm:mt-4 text-base sm:text-[20px] text-center">
              {item.name}
            </h1>
            <p className="text-[#64748B] mb-1 text-sm sm:text-[18px] ">
              {item.tracks.total} Tracks
            </p>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genre;
