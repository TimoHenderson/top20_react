import React from "react";
function Song({ position, song }) {

    return (
        <div className="song-card">
            <img src={song["im:image"][2].label} alt="song" />
            <h2>{position}</h2>
            <p>{song["im:artist"].label}</p>
            <p>{song.title.label}</p>
            <audio src={song.link[1].attributes.href} controls></audio>

        </div>
    )
}
export default Song;