import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import TextDisplay from './components/text-display/TextDisplay.js';
import ToggleButtons from './components/toggle-buttons/ToggleButtons.js';
import Panel from './components/panel/Panel.js';

const App = () => {
  const [topText, setTopText] = useState({ "text": "Starting text" });
  
  const updatePrimaryDisplay = (newText) => {
    setTopText({text: newText});
  };

  console.log('render', topText);

  return (
    <div className="App">
      <TextDisplay props={ topText } />
      <ToggleButtons />
      <div className="panels">
        <Panel updatePrimaryDisplay={ updatePrimaryDisplay } />
        <Panel updatePrimaryDisplay={ updatePrimaryDisplay } />
      </div>
    </div>
  );
}

export default App;
