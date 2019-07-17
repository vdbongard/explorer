import React, { FC, ReactElement } from 'react';
import './App.scss';
import Explorer from './components/Explorer/Explorer';

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <header className="App-header">
        <Explorer />
      </header>
    </div>
  );
};

export default App;
