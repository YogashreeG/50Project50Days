import React from "react";
import "./SoundBoard.css";


export const SoundBoard=()=> {
  // const [songs, setSongs] = useState(Song)
  // const [isplaying, setisplaying] = useState(false);
  // const [currentSong, setCurrentSong] = useState(song[0];)
  

  return (
    <>
    
      <div id="container">
        <div className="navbar">
        <audio  src="./Sound"></audio>
        {/* <audio src="./audio2.mp3"></audio>
        <audio  src="./audio3.mp3"></audio> */}
       </div>
      </div>
    </>
  );
}