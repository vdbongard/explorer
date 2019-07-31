import React, { Dispatch, FC, ReactElement, useReducer } from 'react';
import './styles/_reboot.scss';
import './App.scss';
import Explorer from './components/Explorer/Explorer';
import { fileSystem } from './dummy-data';

export interface State {
  path: string;
  nodes?: Node[];
}

export interface Action {
  type: 'changePath';
  path: string;
}

export interface Node {
  type: 'folder' | 'file';
  name: string;
  nodes?: Node[];
}

const initialState = {
  path: 'This PC',
  nodes: fileSystem[0].nodes,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'changePath':
      const folder = action.path.split('\\').filter((f): boolean => !!f);

      let currentNodes: Node[] | undefined = fileSystem;

      for (let i = 0; i < folder.length; i++) {
        const foundNode: Node | undefined = currentNodes.find(
          (node: Node): boolean => node.name === folder[i]
        );

        if (!foundNode) {
          return { ...state };
        }

        currentNodes = foundNode.nodes || [];
      }

      return {
        ...state,
        path: folder.join('\\'),
        nodes: currentNodes,
      };

    default:
      return state;
  }
};

export const FileSystemContext = React.createContext<[State, Dispatch<Action>]>([
  initialState,
  (): void => {},
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
