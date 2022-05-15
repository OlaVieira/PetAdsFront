import React from 'react';
import './App.css'
export const App = () => {
  return (
    <>
      <header>
        <h1>
            <strong>Petsitters</strong> ads <i className="fa-solid fa-paw"></i>
        </h1>

          <button className="main-button">Add an ad</button>
          <div className="search">
              <input type="text"/> <button className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
      </header>
      <div className="map">

      </div>
    </>
  );
}


