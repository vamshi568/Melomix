"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addaonsdid } from "../globalredux/slices/slice";
import Loading from "@/components/Loading";

const Playlists = () => {
  const [details, setdetails] = useState({
    href: "https://api.spotify.com/v1/users/m38gubbuwqlgp1b3in06hqn41/playlists?offset=0&limit=20",
    items: [
      {
        collaborative: false,
        description: "",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/6kLDwmKb7ZVQ2jgAj4QGUU",
        },
        href: "https://api.spotify.com/v1/playlists/6kLDwmKb7ZVQ2jgAj4QGUU",
        id: "6kLDwmKb7ZVQ2jgAj4QGUU",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b27370c6aea0acc42664a898be22ab67616d0000b273752df54cdb73daae0a00950eab67616d0000b273d0bad978f2d1c82ad704715eab67616d0000b273f49e0f4136fbbcd0b58e71c3",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b27370c6aea0acc42664a898be22ab67616d0000b273752df54cdb73daae0a00950eab67616d0000b273d0bad978f2d1c82ad704715eab67616d0000b273f49e0f4136fbbcd0b58e71c3",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b27370c6aea0acc42664a898be22ab67616d0000b273752df54cdb73daae0a00950eab67616d0000b273d0bad978f2d1c82ad704715eab67616d0000b273f49e0f4136fbbcd0b58e71c3",
            width: 60,
          },
        ],
        name: "Test",
        owner: {
          display_name: "kris",
          external_urls: {
            spotify: "https://open.spotify.com/user/m38gubbuwqlgp1b3in06hqn41",
          },
          href: "https://api.spotify.com/v1/users/m38gubbuwqlgp1b3in06hqn41",
          id: "m38gubbuwqlgp1b3in06hqn41",
          type: "user",
          uri: "spotify:user:m38gubbuwqlgp1b3in06hqn41",
        },
        primary_color: null,
        public: true,
        snapshot_id: "Niw5YTJiOTIyODM1MTMzNWEwMWYxNWVhZGJlZDQ3MWQyYzBjNTM1YTQw",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/6kLDwmKb7ZVQ2jgAj4QGUU/tracks",
          total: 5,
        },
        type: "playlist",
        uri: "spotify:playlist:6kLDwmKb7ZVQ2jgAj4QGUU",
      },
      {
        collaborative: false,
        description:
          "Playlist created by the tutorial on developer.spotify.com",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/6j2pAkR7NXgYdqlecRkUAZ",
        },
        href: "https://api.spotify.com/v1/playlists/6j2pAkR7NXgYdqlecRkUAZ",
        id: "6j2pAkR7NXgYdqlecRkUAZ",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b27394e951a1eaa11866e7c809a4ab67616d0000b273b29f48c97ee1129be89feb0fab67616d0000b273b67b95e97c6c8f4c7362dcafab67616d0000b273be59ee6ec9407779e9b0aa41",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b27394e951a1eaa11866e7c809a4ab67616d0000b273b29f48c97ee1129be89feb0fab67616d0000b273b67b95e97c6c8f4c7362dcafab67616d0000b273be59ee6ec9407779e9b0aa41",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b27394e951a1eaa11866e7c809a4ab67616d0000b273b29f48c97ee1129be89feb0fab67616d0000b273b67b95e97c6c8f4c7362dcafab67616d0000b273be59ee6ec9407779e9b0aa41",
            width: 60,
          },
        ],
        name: "My recommendation playlist",
        owner: {
          display_name: "kris",
          external_urls: {
            spotify: "https://open.spotify.com/user/m38gubbuwqlgp1b3in06hqn41",
          },
          href: "https://api.spotify.com/v1/users/m38gubbuwqlgp1b3in06hqn41",
          id: "m38gubbuwqlgp1b3in06hqn41",
          type: "user",
          uri: "spotify:user:m38gubbuwqlgp1b3in06hqn41",
        },
        primary_color: null,
        public: false,
        snapshot_id: "MyxlOGFiNTdhMzJjZTkyODgxNDE3NzAyYWY1NTczZWFjZmRhZjM5NGUx",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/6j2pAkR7NXgYdqlecRkUAZ/tracks",
          total: 10,
        },
        type: "playlist",
        uri: "spotify:playlist:6j2pAkR7NXgYdqlecRkUAZ",
      },
      {
        collaborative: false,
        description:
          "Playlist created by the tutorial on developer.spotify.com",
        external_urls: {
          spotify: "https://open.spotify.com/playlist/0QcxBfH7Am3KEvaiy9eD4x",
        },
        href: "https://api.spotify.com/v1/playlists/0QcxBfH7Am3KEvaiy9eD4x",
        id: "0QcxBfH7Am3KEvaiy9eD4x",
        images: [
          {
            height: 640,
            url: "https://mosaic.scdn.co/640/ab67616d0000b2731992dd7b33baf5887ea4a1ecab67616d0000b273b67b95e97c6c8f4c7362dcafab67616d0000b273be59ee6ec9407779e9b0aa41ab67616d0000b273f8ef6c7a66a030647287e25b",
            width: 640,
          },
          {
            height: 300,
            url: "https://mosaic.scdn.co/300/ab67616d0000b2731992dd7b33baf5887ea4a1ecab67616d0000b273b67b95e97c6c8f4c7362dcafab67616d0000b273be59ee6ec9407779e9b0aa41ab67616d0000b273f8ef6c7a66a030647287e25b",
            width: 300,
          },
          {
            height: 60,
            url: "https://mosaic.scdn.co/60/ab67616d0000b2731992dd7b33baf5887ea4a1ecab67616d0000b273b67b95e97c6c8f4c7362dcafab67616d0000b273be59ee6ec9407779e9b0aa41ab67616d0000b273f8ef6c7a66a030647287e25b",
            width: 60,
          },
        ],
        name: "My recommendation playlist",
        owner: {
          display_name: "kris",
          external_urls: {
            spotify: "https://open.spotify.com/user/m38gubbuwqlgp1b3in06hqn41",
          },
          href: "https://api.spotify.com/v1/users/m38gubbuwqlgp1b3in06hqn41",
          id: "m38gubbuwqlgp1b3in06hqn41",
          type: "user",
          uri: "spotify:user:m38gubbuwqlgp1b3in06hqn41",
        },
        primary_color: null,
        public: false,
        snapshot_id: "Myw4OGNlYTFkN2FmODI3YzM1M2FmYjEyOGRlY2NjOTIyNjVlMjNkNGYx",
        tracks: {
          href: "https://api.spotify.com/v1/playlists/0QcxBfH7Am3KEvaiy9eD4x/tracks",
          total: 10,
        },
        type: "playlist",
        uri: "spotify:playlist:0QcxBfH7Am3KEvaiy9eD4x",
      },
    ],
    limit: 20,
    next: null,
    offset: 0,
    previous: null,
    total: 3,
  });
  const [isloading, setisloading] = useState(true);
  const router = useRouter();
  const dispact = useDispatch();
  const handleonclick = (id) => {
    dispact(addaonsdid(id));
    router.push("/home/playlist");
  };

  const renderprofile = async () => {
    setisloading(false);
    const token = Cookies.get("clientCode");
    const urlOfMe = "https://api.spotify.com/v1/me/playlists";

    const resofme = await fetch(urlOfMe, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const dataofme = await resofme.json();
    console.log(dataofme);
    setdetails({ ...dataofme });
    setisloading(false);
  };

  useEffect(() => {
    renderprofile();
  }, []);

  if (isloading) {
    return <Loading />;
  } else if (details.items.length <= 0) {
    return (
      <div className="w-screen  h-screen flex justify-center items-center text-white text-2xl">
        <h1>You do not have any playlist added</h1>
      </div>
    );
  }

  return (
    <div className="text-white max-[600px]:p-4 sm:ml-36">
      <h1 className="sm:mt-[96px] mb-6 font-bold text-[20px]">Your Playlists</h1>
      <div className="sm:flex-row flex-col flex gap-6 mb-32">
        {details.items.map((item) => (
          <div
            className="max-[600px]:flex gap-4 items-center  sm:text-center sm:w-[166px]"
            key={item.id}
            onClick={() => handleonclick(item.id)}
          >
            <img
              className="rounded-md w-[80px] h-[80px] sm:w-[166px] sm:h-[166px]"
              src={item.images[0].url}
              alt="img"
              />
              <div >
            <h1 className="sm:mt-4 mb-1 text-[20px] font-bold">{item.name}</h1>
            <p className="text-[#64748B] text-[18px]">{item.tracks.total} Tracks</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlists;
