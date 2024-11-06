import React from 'react';
import './App.css'; // Import the custom CSS file for additional styling

const App = () => {
  return (
    <div className="app-container">
      {/* Flexbox Layout */}
      <div className="flex-container">
        <div className="flex-item">Flex Item 1</div>
        <div className="flex-item">Flex Item 2</div>
        <div className="flex-item">Flex Item 3</div>
      </div>

      {/* Grid Layout */}
      <div className="grid-container">
        <div className="grid-item">Grid Item 1</div>
        <div className="grid-item">Grid Item 2</div>
        <div className="grid-item">Grid Item 3</div>
        <div className="grid-item">Grid Item 4</div>
        <div className="grid-item">Grid Item 5</div>
        <div className="grid-item">Grid Item 6</div>
      </div>
    </div>
  );
};

export default App;
