import React, { useRef } from "react";
import udoshiImage from "./Asset/udoshi.jpg"; // Import the background image
import giteshSound from "./Asset/gitesh.mp3"; // Import the audio file

const App = () => {
  const audioRef = useRef(null);

  const handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${udoshiImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={handleButtonClick}
        style={{
          padding: "10px 20px",
          fontSize: "20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#333",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Bruh
      </button>
      <audio ref={audioRef}>
        <source src={giteshSound} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default App;
