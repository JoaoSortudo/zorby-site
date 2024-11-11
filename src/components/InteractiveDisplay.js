import React from 'react';
import './InteractiveDisplay.css';

function InteractiveDisplay() {
  return (
    <section className="interactive-display">
      <div className="mockup">
        <img src="path/to/app-screen1.png" alt="App Screen" />
      </div>
      <div className="store-buttons">
        <img src="path/to/app-store-badge.png" alt="App Store" />
        <img src="path/to/google-play-badge.png" alt="Google Play" />
      </div>
    </section>
  );
}

export default InteractiveDisplay;
