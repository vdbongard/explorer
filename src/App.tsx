import React, { Dispatch, FC, ReactElement, ReactNode, useReducer, useRef, useState } from 'react';
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
  const [explorerWindows, setExplorerWindows] = useState(['exp0']);
  const appRef = useRef<HTMLDivElement>(null);

  const openExplorer = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.button === 1 && e.target === appRef.current) {
      setExplorerWindows([...explorerWindows, `exp${explorerWindows.length}`]);
    }
  };

  // stop middle mouse scrolling preventing the middle mouse click to open an explorer window
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.button === 1) {
      e.preventDefault();
    }
  };

  const closeExplorer = (id: string): void => {
    const filteredExplorerWindows = explorerWindows.filter(
      (explorerWindow): boolean => explorerWindow !== id
    );
    setExplorerWindows([...filteredExplorerWindows]);
  };

  // move the focused window to the end of the array so that the correct z-index order is kept after blur
  const onFocusExplorer = (id: string): void => {
    const focusedExplorerWindowIndex = explorerWindows.findIndex(
      (explorerWindow): boolean => explorerWindow === id
    );

    // already the last element
    if (focusedExplorerWindowIndex === explorerWindows.length - 1) {
      return;
    }

    const newExplorerWindows = [...explorerWindows];

    const focusedExplorerWindow = newExplorerWindows.splice(focusedExplorerWindowIndex, 1);
    newExplorerWindows.push(...focusedExplorerWindow);

    setExplorerWindows(newExplorerWindows);
  };

  const explorerList = explorerWindows.map(
    (explorerWindow): ReactNode => (
      <Explorer
        id={explorerWindow}
        key={explorerWindow}
        onFocus={onFocusExplorer}
        onClose={closeExplorer}
      />
    )
  );

  return (
    <div className="App" onAuxClick={openExplorer} ref={appRef} onMouseDown={onMouseDown}>
      <FileSystemContext.Provider value={useReducer(reducer, initialState)}>
        {explorerList}
      </FileSystemContext.Provider>
    </div>
  );
};

export default App;
