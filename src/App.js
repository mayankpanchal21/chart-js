// App.js
import React from 'react';
import './App.css';
import ZoomableChart from './ZoomableChart.js'; // Import the ZoomableChart component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Chart with Zoom and Pan</h1>
        <ZoomableChart /> {/* Render the ZoomableChart component */}
      </header>
    </div>
  );
}

export default App;
