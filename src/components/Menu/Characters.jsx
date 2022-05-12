import React, { useState, useEffect } from 'react';
import './Character.css';
import Header from '../Header/Header';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const darkMode = Header();

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div className={darkMode? 'container-light' : 'container-dark'}>
      {characters.map(character => (
      <div className="card">
        <div className="card-header">
          <img src={character.image} alt={character.name} />
          <div className="card-body">
            <h2>{character.name}</h2>
            <div className='tag-content'>
              <span className='tag tag-purple'>{character.species}</span>
              <span className='tag tag-pink'>{character.status}</span>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}

// {characters.map(character => (
//   <div>
//     <h2>{character.name}</h2>
//   </div>
// ))}

export default Characters;