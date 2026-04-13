import { useState } from 'react';
import { SEARCH_MODE } from './constants';
import NavigationHeader from './NavigationHeader';
import './App.css';

function App() {
  const [mode, setMode] = useState(SEARCH_MODE);

  return (
    <NavigationHeader setMode={(mode) => {setMode(mode)}} activeMode={mode}/>
  );
}

export default App;
