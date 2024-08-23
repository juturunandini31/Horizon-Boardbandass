import React from 'react';
import './App.css';

function Menu({ selectedMenu, setSelectedMenu, translations }) {
  return (
    <div className="menu">
      <div className="menu-item" onClick={() => setSelectedMenu('home')}>{translations.home}</div>
      <div className="menu-item" onClick={() => setSelectedMenu('movies')}>{translations.movies}</div>
      <div className="menu-item" onClick={() => setSelectedMenu('tvShows')}>{translations.tvShows}</div>
      <div className="menu-item" onClick={() => setSelectedMenu('sports')}>{translations.sports}</div>
      <div className="menu-item" onClick={() => setSelectedMenu('live')}>{translations.live}</div>
      <div className="menu-item" onClick={() => setSelectedMenu('settings')}>{translations.settings}</div>
    </div>
  );
}

export default Menu;
