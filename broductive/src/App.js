import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="quadrant">
        <h2>To-Do List</h2>
        <p>Manage your tasks efficiently.</p>
      </div>
      <div className="quadrant">
        <h2>Notes</h2>
        <p>Keep track of your ideas.</p>
      </div>
      <div className="quadrant">
        <h2>Timer</h2>
        <p>Stay focused with a timer.</p>
      </div>
      <div className="quadrant">
        <h2>Calendar</h2>
        <p>Plan your schedule effectively.</p>
      </div>
    </div>
  );
};

export default App;
