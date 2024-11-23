import React, { useEffect, useRef } from "react";
import udoshiImage from "./Asset/alshaj.png"; // Import the background image
import giteshSound from "./Asset/alshaj.mp3"; // Import the audio file

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Failed to play audio:", err);
      });
    }
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${udoshiImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <audio ref={audioRef} loop>
        <source src={giteshSound} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default App;
