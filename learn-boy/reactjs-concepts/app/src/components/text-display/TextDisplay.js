import React, { useState, useEffect, useRef } from 'react';
import './TextDisplay.scss';

const TextDisplay = ({ props }) => {
	const { text } = props;

	console.log(props);
	console.log(text);

	return (
		<div className="TextDisplay">
			<input type="text" readOnly value={ text ? text : "Starting text" }/>
		</div>
	);
}

export default TextDisplay;