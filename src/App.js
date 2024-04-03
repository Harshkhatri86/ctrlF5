import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import CentralImage from './components/CentralImage/CentralImage';
import VictoryInsurance from './components/VictoryInsurance/VictoryInsurance';
import IconsComp from './components/IconsComp/IconsComp';

function App() {
  return (
    <div className="App">
     <Header/>
      <CentralImage/>
      <VictoryInsurance/>
      <IconsComp/>
    </div>
  );
}

export default App;
