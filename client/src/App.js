import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import NewApp from './components/NewApp';

function App() {
  return (
    <div className="App">
      <Nav/>
      <NewApp/>
    </div>
  );
}

export default App;
