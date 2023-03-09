import React, { useRef, useEffect } from "react";
import './AudioPlayer.css';
import noSong from '../img/no-song.png'

function AudioPlayer({ selectedSong }) {
    let audioNode = useRef()
    useEffect(() => {
        audioNode.current.play()
    }, [selectedSong])
    return (
        <div className="audio-player">
            <img id="playerImage" src={selectedSong ? selectedSong["im:image"][2].label : noSong} alt="selectedSong" />
            <div className="details">
                <p>{selectedSong ? selectedSong["im:name"].label : "No Song"}</p>
                <p>by {selectedSong ? selectedSong["im:artist"].label : "No Artist"}</p>
                <audio id="audioControls" ref={audioNode} src={selectedSong ? selectedSong.link[1].attributes.href : ""} controls></audio>
            </div>
        </div>
    )
}
export default AudioPlayer;