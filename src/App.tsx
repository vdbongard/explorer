import React, { FC, ReactElement } from 'react';
import './App.scss';
import './styles/_reboot.scss';
import Explorer from './components/Explorer/Explorer';

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <Explorer />
    </div>
  );
};

export default App;
