import React, { useState } from 'react';
import { prevSlide, nextSlide } from './CaroucelButton';
import credential from "./images/credencial.jpeg";
import rickmorty1 from "./images/rick-morty1.jpg";
import rickmorty2 from "./images/rick-morty2.jpg";
import rickmorty3 from "./images/rick-morty3.jpg";
import Characters from './components/Characters';
import './index.css';
import './App.css';

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
        <div class="slider-container">
          <img
            class="slider-item"
            src={rickmorty1} alt="rickmorty1" />
          <img
            class="slider-item"
            src={rickmorty2} alt="rickmorty2"/>
          <img
            class="slider-item"
            src={rickmorty3} alt="rickmorty3"/>
        </div>

        <div className="character-credential">
          <div>
            <img src={credential} alt="Credential" className="img-credential" />
          </div>
          <div>
            <p>
              <h6 className="text-credential"> Itzel Karina Fernandez Rios</h6>
            </p>
            <p>
              <h6 className="text-credential">zs20006763</h6>
            </p>
            <p>
              <h6 className="text-credential"> Ingenieria de Software</h6>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}



export default App;