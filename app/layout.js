"use client"
import Navbar from '@/components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './globalredux/provider';
import AudioPlayer from '@/components/Playersmall';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Melomix',
  description: 'A Spotify clone developed with Next.js and powered by the Spotify Web API. Discover and stream your favorite music, create playlists, and explore a vast library of songs.',

};

export default function RootLayout({ children }) {
  
const url=usePathname()
  return (
    <html lang="en">
      <head>
      <title>Melomix</title>
      <link rel="icon" href="/Frame.svg" type="image/svg+xml" sizes="any"/>
      </head>
      <body className={inter.className}>
        <div className="flex">
          <Providers>
             {url!=='/login' && url!=='/' ? <Navbar />:null}
            {children}
            {url!=='/login' && url!=='/' ? <AudioPlayer />:null}
          </Providers>
        </div>
      </body>
    </html>
  );
}
