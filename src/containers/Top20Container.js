import React, { useState, useEffect } from "react";
import SongList from "../components/SongList";

function Top20Container() {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        getSongs();
    }, []);

    async function getSongs() {
        const response = await fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json");
        const songs = await response.json();
        setSongs(songs.feed.entry);
    }

    return (
        <div className="top-20-container">
            <p>Top20Container</p>
            <SongList songs={songs} />
        </div>
    )
}
export default Top20Container;