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
            <div className={`node ${node.type}`} onClick={() => onClick(node)} key={index}>
              {node.name}
            </div>
          )
        )}
    </div>
  );
};

export default Content;
