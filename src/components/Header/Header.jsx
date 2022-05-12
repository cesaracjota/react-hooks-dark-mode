import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode? 'Header-dark' : 'Header-light'}>
      <h1>ReactHooks</h1>
      <button className={darkMode ? 'dark-bottom' : 'light-bottom'} type="button" onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
}

export default Header;