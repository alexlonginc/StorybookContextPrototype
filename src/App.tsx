import React from 'react';
import './App.css';
import { CreateScreen } from './CreateScreen';
import { NetworkProvider } from './NetworkProvider';

function App() {
  return (
    <NetworkProvider>
      <div className="App">
        <CreateScreen />
      </div>
    </NetworkProvider>
  );
}

export default App;
