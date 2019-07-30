import React, { Dispatch, FC, ReactElement, useReducer } from 'react';
import './styles/_reboot.scss';
import './App.scss';
import Explorer from './components/Explorer/Explorer';

export interface State {
  path: string;
}

export interface Action {
  type: 'changePath';
  path: string;
}

const initialState = {
  path: 'This PC\\Desktop',
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'changePath':
      return {
        ...state,
        path: action.path,
      };

    default:
      return state;
  }
};

export const FileSystemContext = React.createContext<[State, Dispatch<Action>]>([
  initialState,
  (action: Action): void => {},
]);

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <FileSystemContext.Provider value={useReducer(reducer, initialState)}>
        <Explorer />
      </FileSystemContext.Provider>
    </div>
  );
};

export default App;
