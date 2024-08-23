import React, { useState } from 'react';
import Menu from './Menu';
import Content from './Content';
import Settings from './Setting';
import './App.css';

const translations = {
  en: { home: 'Home', movies: 'Movies', tvShows: 'TV Shows', sports: 'Sports', live: 'Live', settings: 'Settings' },
  fr: { home: 'Accueil', movies: 'Films', tvShows: 'Séries', sports: 'Sports', live: 'En Direct', settings: 'Paramètres' },
  de: { home: 'Startseite', movies: 'Filme', tvShows: 'TV-Sendungen', sports: 'Sport', live: 'Live', settings: 'Einstellungen' },
  ru: { home: 'Главная', movies: 'Фильмы', tvShows: 'Сериалы', sports: 'Спорт', live: 'Прямой эфир', settings: 'Настройки' },
  es: { home: 'Inicio', movies: 'Películas', tvShows: 'Programas de TV', sports: 'Deportes', live: 'En Vivo', settings: 'Configuración' },
  zh: { home: '主页', movies: '电影', tvShows: '电视节目', sports: '体育', live: '直播', settings: '设置' }
};

function App() {
  const [language, setLanguage] = useState('en');
  const [selectedMenu, setSelectedMenu] = useState('home');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="App">
      <Menu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} translations={translations[language]} />
      {selectedMenu === 'settings' ? (
        <Settings onLanguageChange={handleLanguageChange} />
      ) : (
        <Content selectedMenu={selectedMenu} />
      )}
    </div>
  );
}

export default App;
