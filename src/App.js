import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Navbar/Footer';
import { useEffect, useState } from 'react';
function App() {
  useEffect(() => {
    var themeMode = document.documentElement.getAttribute('data-mode');
    if (!themeMode) {
      var theme = localStorage.getItem('theme');
      document.documentElement.setAttribute('data-mode', theme || 'light');
    }
  }, []);

  return (
    <div className='dark:bg-zinc-800'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/about'
          element={<AboutPage />}
        />
        <Route
          path='/contact'
          element={<ContactPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
