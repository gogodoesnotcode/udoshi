import React, { useRef } from 'react';
import './App.css';
import eeshaImage from './Asset/esha.jpg';
import disgustingAudio from './Asset/disgusting.mp3';

function App() {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${eeshaImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '2rem',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
      }}
    >
      <p>Love you cutiee</p>
      <button
        onClick={playAudio}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '1rem',
          cursor: 'pointer',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#ff7f7f',
          color: '#fff',
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
        }}
      >
        Disgusting🤮
      </button>
      <audio ref={audioRef} src={disgustingAudio} loop />
    </div>
  );
}

export default App;
