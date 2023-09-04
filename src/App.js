import React from 'react';
import './App.css';
import CustomNavbar from './componentes/navbar';
import ItemListContainer from './componentes/itemlistconteiner';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <ItemListContainer greeting="¡Bienvenido a JPshoes!" />
      <h1></h1>
    </div>
  );
}

export default App;


