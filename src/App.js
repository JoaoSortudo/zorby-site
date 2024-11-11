import React from 'react';
import Header from './components/Header';
import InteractiveDisplay from './components/InteractiveDisplay';
import Benefits from './components/Benefits';
import Feedbacks from './components/Feedbacks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <InteractiveDisplay />
      <Benefits />
      <Feedbacks />
      <Footer />
    </div>
  );
}

export default App;