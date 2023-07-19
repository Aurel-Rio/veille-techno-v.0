// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Accueil from './components/Accueil';
import ArticlesSection from './components/ArticlesSection'; // Utilisez le composant ArticlesSection

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/articles" element={<ArticlesSection />} /> {/* Utilisez le composant ArticlesSection */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
