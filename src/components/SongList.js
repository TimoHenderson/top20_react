import React from "react";
import "./SongList.css"
import Song from "./Song";

function SongList({ songs, selectSong }) {
    const songNodes = songs.map((song, index) => {
        return <Song key={index} position={index + 1} song={song} selectSong={selectSong} />
    })
    return (
        <div className="song-list">

            {songNodes}
        </div>
    )
}
export default SongList;