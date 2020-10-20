import React from 'react';
import Liste from "./components/Liste";

export default function App(){
  return (
    <div className="container">
      <div className="text-center">
        <h1>fiche de présence</h1>
        <input type="text" className="w-50"/>
        <button className="w-25">Ajouter</button>
      </div>
    </div>
  );
}