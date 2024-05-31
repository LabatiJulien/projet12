import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Profil from './components/Profil';
import Projets from './components/Projets';

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
