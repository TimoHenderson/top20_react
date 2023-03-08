import React, { useState, useEffect } from "react";
import ChartSelector from "../components/ChartSelector";
import SongList from "../components/SongList";
import "./Top20Container.css"

function Top20Container() {

    const [songs, setSongs] = useState([]);
    const [charts, setCharts] = useState([
        { name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json" },
        { name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json" },
        { name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json" },
        { name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json" }
    ]);
    const [chart, setChart] = useState(charts[0]);


    useEffect(() => {
        getSongs(chart);
    }, [chart]);




    function changeChart(chart) {
        console.log("changeChart", chart)
        setChart(chart);
    }



    async function getSongs(chart) {
        const response = await fetch(chart.url);
        const songs = await response.json();
        console.log(songs.feed.entry)
        setSongs(songs.feed.entry);
    }

    return (
        <div className="top-20-container">
            <h1>Top 20</h1>
            <ChartSelector charts={charts} changeChart={changeChart} />
            <SongList songs={songs} />
        </div>
    )
}
export default Top20Container;