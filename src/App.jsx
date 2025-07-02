import React, { useState } from 'react';
import './App.css';

const ON_BULB_URL = "https://www.w3schools.com/js/pic_bulboff.gif";
  const OFF_BULB_URL = "https://www.w3schools.com/js/pic_bulbon.gif";

const App = () => {
  const [bulbs, setBulbs] = useState([false, false, false, false, false]);

  const toggleBulb = (index) => {
    setBulbs((prev) => {
      const temp = [...prev];
      temp[index] = !temp[index];
      return temp;
    });
  };

  return (
    <div className="main-container">
      <div className="bulbs-container">
        {bulbs.map((isOn, idx) => (
          <div key={idx} id={`bulb-${idx + 1}`} className="bulb-box">
            <img src={isOn ? ON_BULB_URL : OFF_BULB_URL} width="75" alt={`Bulb ${idx + 1}`} />
            <button onClick={() => toggleBulb(idx)}>Toggle</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
