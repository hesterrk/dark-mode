import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';



const Navbar = () => {

  //'dark' is the key (stored in local storage)
  
  const [darkMode, setDarkMode] = useDarkMode('dark', false)


  const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };


  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
