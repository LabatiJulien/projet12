import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Profil from './components/profil/Profil';
import Projets from './components/projets/Projets';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Profil />
        <Projets />
      </main>
      <Footer />
    </div>
  );
}

export default App;
