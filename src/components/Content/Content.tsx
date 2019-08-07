import React, { FC, ReactElement, ReactNode, useContext } from 'react';
import './Content.scss';
import { FileSystemContext } from '../../App';
import { Node } from '../../App';

const Content: FC = (): ReactElement => {
  const [{ path, nodes }, dispatch] = useContext(FileSystemContext);

  const onClick = (node: Node): void => {
    if (node.type === 'folder') {
      dispatch({ type: 'changePath', path: `${path}\\${node.name}` });
    }
  };

  return (
    <div className="Content">
      {nodes &&
        nodes.map(
          (node, index): ReactNode => (
            <button
              className={`node ${node.type}`}
              onClick={(): void => onClick(node)}
              key={index}
              tabIndex={0}
            >
              {node.name}
            </button>
          )
        )}
    </div>
  );
};

export default Content;
