import React, { FC, ReactElement, useContext } from 'react';
import './SidebarElement.scss';
import { FileSystemContext } from '../../App';

interface Props {
  name: string;
  icon: string;
  selected: boolean;
  index: number;
  onClick: (index: number) => void;
}

const SidebarElement: FC<Props> = ({ icon, name, selected, index, onClick }): ReactElement => {
  const [, dispatch] = useContext(FileSystemContext);
  let className = 'SidebarElement';

  if (selected) className += ' selected';

  const handleClick = (): void => {
    dispatch({ type: 'changePath', path: `This PC\\${name}` });
    onClick(index);
  };

  return (
    <div className={className} onClick={handleClick}>
      <div className="icon">{icon}</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default SidebarElement;
