import React from 'react';
import './App.css';
import Nav from './Components/Nav';



function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        Searching Dashboard
      </header>

      <Nav /> {/*Navbar component import*/}

    </div>
  );
}

export default App;
