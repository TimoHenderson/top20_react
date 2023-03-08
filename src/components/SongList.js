import React from "react";
import Song from "./Song";

function SongList({ songs }) {
    const songNodes = songs.map((song, index) => {
        return <Song key={index} position={index + 1} song={song} />
    })
    return (
        <div className="song-list">
            <p>SongList</p>
            {songNodes}
        </div>
    )
}
export default SongList;