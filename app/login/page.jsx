"use client"
import Cookies from 'js-cookie'
import './index.css'
import { useEffect } from 'react';

export default function Login() {
  const clientId = 'ec4e043c5b454f50b248c49f1cda2189';
  // const redirectUri = 'http://localhost:3000/home';
  const redirectUri = 'https://melomix.vercel.app/home';
const scope=[
    "user-read-email","user-read-private", "playlist-read-private","user-read-playback-state","user-read-currently-playing","streaming","user-library-modify"
    ,"user-library-read","user-read-playback-position",
"user-top-read","user-read-recently-played","user-follow-modify","user-follow-read","user-read-playback-state","user-modify-playback-state","user-read-currently-playing","app-remote-control",
"streaming"
].join(',')
  const redirectToAuthCodeFlow = (clientId) => {
      const params = new URLSearchParams();
      params.append("client_id", clientId);
      params.append("response_type", "code");
      params.append("redirect_uri", redirectUri);
      params.append("scope", scope);    
      window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
    };

  const renderAuth = (e) => {
    e.preventDefault();
    Cookies.set('jwt_token','ec4e043c5b454f50b248c49f1cda21',{expires: 7})
    redirectToAuthCodeFlow(clientId)
  }
  useEffect(()=>{
    Cookies.remove('clientCode')

  },[])
    
  

  return (
    <>
    <div className="backgeound overflow-x-hidden h-screen w-screen flex justify-center items-center">

      <form onSubmit={renderAuth} className='sm:w-[456px] w-[295px] h-[295px] sm:h-[430px] bg-[#181818e6] flex justify-center items-center flex-col rounded-xl'>
        <img className='max-[600px]:w-[100px] max-[600px]:h-[40px]' src='/logo.svg' alt='logo'/>
        <h1 className='text-white font-[Assistant] text-2xl sm:text-4xl font-bold mt-4 mb-8'>
            Spotify Remix
        </h1>
        <button type='submit' className='bg-[#1DB954] text-white px-4 sm:px-8 py-3 rounded-3xl'>LOG IN WITH SPOTIFY</button>
      </form>
    </div>
    </>
  );
}
