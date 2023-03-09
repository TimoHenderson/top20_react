import React from "react";
import './Song.css'
function Song({ position, song, selectSong }) {

    return (
        <div className="song-card">
            <img src={song["im:image"][2].label} alt="song" />
            <h2>{position}</h2>
            <p>{song["im:name"].label}</p>
            <p>by {song["im:artist"].label}</p>

            <button onClick={() => selectSong(song)}>Play</button>
        </div>
    )
}
export default Song;