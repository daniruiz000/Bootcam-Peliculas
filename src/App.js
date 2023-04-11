import { Route, HashRouter, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import GamePage from './pages/GamePage/GamePage';
import Header from './components/Header/Header';
import { IntlProvider } from 'react-intl';
import { createContext, useEffect, useState } from 'react';
import English from './lang/en.json';
import Spanish from './lang/es.json';

export const LanguageSelector = createContext();

function App() {
  const [locale, setLocale] = useState(navigator.language);
  const [messages, setMessages] = useState(English);

  useEffect(() => {
    switch (locale) {
      case 'es-ES':
        setMessages(Spanish);
        break;
      default:
        setMessages(English);
    }
  }, [locale]);
  return (
    <LanguageSelector.Provider value={{ language: locale, setLanguage: setLocale }}>
      <IntlProvider messages={messages} locale={locale}>
        <HashRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/items/:id/:type' element={<ItemDetail />}></Route>
            <Route path='/quiz' element={<GamePage />}></Route>
          </Routes>
        </HashRouter>
      </IntlProvider>
    </LanguageSelector.Provider>
  );
}

export default App;
