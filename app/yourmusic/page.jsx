"use client";
import Loading from "@/components/Loading";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

const Yourmusic = () => {
  const [details, setdetails] = useState({
    href: "https://api.spotify.com/v1/me/tracks?offset=0&limit=20",
    items: [
      {
        added_at: "2021-07-02T09:42:53Z",
        track: {
          album: {
            album_type: "single",
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4A2XSc4OJjuPY4l6NjnrDj",
                },
                href: "https://api.spotify.com/v1/artists/4A2XSc4OJjuPY4l6NjnrDj",
                id: "4A2XSc4OJjuPY4l6NjnrDj",
                name: "Ram Miriyala",
                type: "artist",
                uri: "spotify:artist:4A2XSc4OJjuPY4l6NjnrDj",
              },
            ],
            available_markets: [
              "AD",
              "AE",
              "AG",
              "AL",
              "AM",
              "AO",
              "AR",
              "AT",
              "AU",
              "AZ",
              "BA",
              "BB",
              "BD",
              "BE",
              "BF",
              "BG",
              "BH",
              "BI",
              "BJ",
              "BN",
              "BO",
              "BR",
              "BS",
              "BT",
              "BW",
              "BY",
              "BZ",
              "CA",
              "CH",
              "CI",
              "CL",
              "CM",
              "CO",
              "CR",
              "CV",
              "CW",
              "CY",
              "CZ",
              "DE",
              "DJ",
              "DK",
              "DM",
              "DO",
              "DZ",
              "EC",
              "EE",
              "EG",
              "ES",
              "FI",
              "FJ",
              "FM",
              "FR",
              "GA",
              "GB",
              "GD",
              "GE",
              "GH",
              "GM",
              "GN",
              "GQ",
              "GR",
              "GT",
              "GW",
              "GY",
              "HK",
              "HN",
              "HR",
              "HT",
              "HU",
              "ID",
              "IE",
              "IL",
              "IN",
              "IS",
              "IT",
              "JM",
              "JO",
              "JP",
              "KE",
              "KG",
              "KH",
              "KI",
              "KM",
              "KN",
              "KR",
              "KW",
              "KZ",
              "LA",
              "LB",
              "LC",
              "LI",
              "LK",
              "LR",
              "LS",
              "LT",
              "LU",
              "LV",
              "MA",
              "MC",
              "MD",
              "ME",
              "MG",
              "MH",
              "MK",
              "ML",
              "MN",
              "MO",
              "MR",
              "MT",
              "MU",
              "MV",
              "MW",
              "MX",
              "MY",
              "MZ",
              "NA",
              "NE",
              "NG",
              "NI",
              "NL",
              "NO",
              "NP",
              "NR",
              "NZ",
              "OM",
              "PA",
              "PE",
              "PG",
              "PH",
              "PK",
              "PL",
              "PS",
              "PT",
              "PW",
              "PY",
              "QA",
              "RO",
              "RS",
              "RU",
              "RW",
              "SA",
              "SB",
              "SC",
              "SE",
              "SG",
              "SI",
              "SK",
              "SL",
              "SM",
              "SN",
              "SR",
              "ST",
              "SV",
              "SZ",
              "TD",
              "TG",
              "TH",
              "TL",
              "TN",
              "TO",
              "TR",
              "TT",
              "TV",
              "TW",
              "TZ",
              "UA",
              "UG",
              "US",
              "UY",
              "UZ",
              "VC",
              "VN",
              "VU",
              "WS",
              "XK",
              "ZA",
              "ZM",
              "ZW",
            ],
            external_urls: {
              spotify: "https://open.spotify.com/album/16FbjE4zTKmqoa9DOt4lrs",
            },
            href: "https://api.spotify.com/v1/albums/16FbjE4zTKmqoa9DOt4lrs",
            id: "16FbjE4zTKmqoa9DOt4lrs",
            images: [
              {
                height: 640,
                url: "https://i.scdn.co/image/ab67616d0000b27322f35b0b1851208dd08f4a78",
                width: 640,
              },
              {
                height: 300,
                url: "https://i.scdn.co/image/ab67616d00001e0222f35b0b1851208dd08f4a78",
                width: 300,
              },
              {
                height: 64,
                url: "https://i.scdn.co/image/ab67616d0000485122f35b0b1851208dd08f4a78",
                width: 64,
              },
            ],
            name: "Gully Rowdy",
            release_date: "2021-05-07",
            release_date_precision: "day",
            total_tracks: 1,
            type: "album",
            uri: "spotify:album:16FbjE4zTKmqoa9DOt4lrs",
          },
          artists: [
            {
              external_urls: {
                spotify:
                  "https://open.spotify.com/artist/4A2XSc4OJjuPY4l6NjnrDj",
              },
              href: "https://api.spotify.com/v1/artists/4A2XSc4OJjuPY4l6NjnrDj",
              id: "4A2XSc4OJjuPY4l6NjnrDj",
              name: "Ram Miriyala",
              type: "artist",
              uri: "spotify:artist:4A2XSc4OJjuPY4l6NjnrDj",
            },
          ],
          available_markets: [
            "AD",
            "AE",
            "AG",
            "AL",
            "AM",
            "AO",
            "AR",
            "AT",
            "AU",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BN",
            "BO",
            "BR",
            "BS",
            "BT",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CH",
            "CI",
            "CL",
            "CM",
            "CO",
            "CR",
            "CV",
            "CW",
            "CY",
            "CZ",
            "DE",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ES",
            "FI",
            "FJ",
            "FM",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GR",
            "GT",
            "GW",
            "GY",
            "HK",
            "HN",
            "HR",
            "HT",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IS",
            "IT",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KR",
            "KW",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "MA",
            "MC",
            "MD",
            "ME",
            "MG",
            "MH",
            "MK",
            "ML",
            "MN",
            "MO",
            "MR",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NE",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PG",
            "PH",
            "PK",
            "PL",
            "PS",
            "PT",
            "PW",
            "PY",
            "QA",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SE",
            "SG",
            "SI",
            "SK",
            "SL",
            "SM",
            "SN",
            "SR",
            "ST",
            "SV",
            "SZ",
            "TD",
            "TG",
            "TH",
            "TL",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TW",
            "TZ",
            "UA",
            "UG",
            "US",
            "UY",
            "UZ",
            "VC",
            "VN",
            "VU",
            "WS",
            "XK",
            "ZA",
            "ZM",
            "ZW",
          ],
          disc_number: 1,
          duration_ms: 226083,
          explicit: false,
          external_ids: {
            isrc: "INM5B2107760",
          },
          external_urls: {
            spotify: "https://open.spotify.com/track/6qNCPMFrXaeVQuA3QFZ4F1",
          },
          href: "https://api.spotify.com/v1/tracks/6qNCPMFrXaeVQuA3QFZ4F1",
          id: "6qNCPMFrXaeVQuA3QFZ4F1",
          is_local: false,
          name: "Puttene Prema",
          popularity: 47,
          preview_url:
            "https://p.scdn.co/mp3-preview/8857fab350b39595c912e6913d2f0f1c8826a4d1?cid=f25d283eae8046588034aee0a42c0f31",
          track_number: 1,
          type: "track",
          uri: "spotify:track:6qNCPMFrXaeVQuA3QFZ4F1",
        },
      },
    ],
    limit: 20,
    next: "https://api.spotify.com/v1/browse/categories?offset=20&limit=20",
    offset: 0,
    previous: null,
    total: 58,
  });
  const [isloading, setisloading] = useState(true);

  useEffect(() => {
    const rendermysongs = async () => {
      setisloading(true);
      const token = Cookies.get("clientCode");
      const url = "https://api.spotify.com/v1/me/tracks";
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      console.log("gvhb", data);
      setdetails({ ...data });
      setisloading(false);
    };
    rendermysongs();
  }, []);
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000); // Divide by 60,000 to get minutes
    const seconds = Math.floor((ms % 60000) / 1000); // Take the remainder after dividing by 60,000 and divide by 1000 to get seconds
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // Add leading zero to seconds if necessary
  };

  if (isloading) {
    return (
     <Loading/>
    );
  } else if (details.items.length <= 0) {
    return (
      <div className="w-screen  h-screen flex justify-center items-center text-white text-2xl">
        <h1>There are no songs to display</h1>
      </div>
    );
  }

  return (
    <div className="sm:pl-36 p-4 text-white flex sm:mt-[96px] flex-col w-screen overflow-hidden gap-4">
      <h1 className="mt-6 mb-6 font-bold text-xl">Your Music</h1>
      {details.items.map((item) => (
        <div
          className="text-white flex sm:w-10/12 justify-between items-center gap-4"
          key={item.track.id}
        >
          <div className="flex items-center gap-5">
            <img
              className=" h-[60px] w-[60px] "
              src={
                item.track.album.images[0] !== undefined
                  ? item.track.album.images[0].url
                  : null
              }
              alt={item.track.name}
            />
            <div>
              <p className="text-[16px] font-bold">{item.track.name}</p>
              <div className="flex text-[#9B9B9B] font-semibold text-[12px]">
                <p>{item.track.artists[0].name} - </p>
                <p>{item.track.album.name}</p>
              </div>
            </div>
          </div>
          <p className="text-right">{formatTime(item.track.duration_ms)}</p>
        </div>
      ))}
    </div>
  );
};

export default Yourmusic;
