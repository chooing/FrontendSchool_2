import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [btnColor, setBtnColor]=useState('red');
  const newColor = btnColor === 'red'? 'blue':'red';
  return (
    <div>
      <button style={{backgroundColor : btnColor}} onClick={()=>setBtnColor(newColor)}>change to {newColor}!</button>
    </div>
  );
}

export default App;
