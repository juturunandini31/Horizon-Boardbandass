import React from 'react';
import './App.css';

function Settings({ onLanguageChange }) {
  const handleLanguageChange = (event) => {
    onLanguageChange(event.target.value);
  };

  return (
    <div className="settings">
      <label htmlFor="language">Select Language: </label>
      <select id="language" onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="ru">Russian</option>
        <option value="es">Spanish</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
}

export default Settings;
