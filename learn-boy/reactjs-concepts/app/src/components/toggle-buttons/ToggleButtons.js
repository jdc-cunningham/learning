import React, { useState, useEffect, useRef } from 'react';
import './ToggleButtons.scss';

const ToggleButtons = () => {
  return (
    <div className="ToggleButtons">
      <button type="button">Mode 1</button>
      <button type="button">Mode 2</button>
    </div>
  );
}

export default ToggleButtons;