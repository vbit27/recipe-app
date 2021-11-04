import React from 'react';
import { getRecipe } from './api/RecipeAPI';
import './App.css';
import FirstStep from './components/FirstStep';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstStep />
    </div>
  );
}

export default App;
