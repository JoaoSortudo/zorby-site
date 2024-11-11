import React from 'react';
import './InteractiveDisplay.css';
//import appScreenMockup from '../images/iphonemockup.png'; ACERTAR O TAMANHO DO MOCKUP
import appStoreBadge from '../images/appstore.svg';
import googlePlayBadge from '../images/googleplay.png';

function InteractiveDisplay() {
  return (
    <section className="interactive-display">
      <div className="mockup">
        <img src="{appScreenMockup}" alt="App Screen" />
      </div>
      <div className="store-buttons">
        <img src={appStoreBadge} alt="App Store" />
        <img src={googlePlayBadge} alt="Google Play" />
      </div>
    </section>
  );
}

export default InteractiveDisplay;
