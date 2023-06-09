"use client"
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'

const Player = ({trackUri}) => {
    const [player, setPlayer] = useState(undefined);
    const [is_paused, setPaused] = useState(false);
const [is_active, setActive] = useState(false);
const [current_track, setTrack] = useState(trackUri);
const token=Cookies.get('clientCode')


useEffect(() => {

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {

        const player = new window.Spotify.Player({
            name: 'Web Playback SDK',
            getOAuthToken: cb => { cb(token); },
            volume: 0.5
        });

        setPlayer(player);

        player.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
        });

        player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });
        player.addListener('player_state_changed', ( state => {

            if (!state) {
                return;
            }
        
            setTrack(state.track_window.current_track);
            setPaused(state.paused);
        
        
            player.getCurrentState().then( state => { 
                (!state)? setActive(false) : setActive(true) 
            });
        
        }));
        

        player.connect();

    };
}, []);

  return (
    <div><button className="btn-spotify" onClick={() => { player.previousTrack() }} >
    &lt;&lt;
</button>

<button className="btn-spotify" onClick={() => { player.togglePlay() }} >
   { is_paused ? "PLAY" : "PAUSE" }
</button>

<button className="btn-spotify" onClick={() => { player.nextTrack() }} >
    &gt;&gt;
</button></div>
  )
}

export default Player