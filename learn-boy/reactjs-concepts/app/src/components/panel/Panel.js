import React, { useState, useEffect, useRef } from 'react';
import './Panel.scss';

const Panel = ({updatePrimaryDisplay}) => {
  return (
    <div className="Panel">
      <input type="text" onChange={(e) => { updatePrimaryDisplay(e.target.value) }} />
      <button type="button">Update Top Display</button>
    </div>
  );
}

export default Panel;