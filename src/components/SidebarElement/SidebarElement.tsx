import React, { FC, ReactElement, useContext } from 'react';
import './SidebarElement.scss';
import { FileSystemContext } from '../../App';

interface Props {
  name: string;
  icon?: string;
  selected: boolean;
  index: number;
  onClick: (index: number) => void;
  header?: boolean;
}

const SidebarElement: FC<Props> = ({
  icon,
  name,
  selected,
  index,
  onClick,
  header = false,
}): ReactElement => {
  const [, dispatch] = useContext(FileSystemContext);
  let className = 'SidebarElement';

  if (selected) className += ' selected';

  const handleClick = (): void => {
    dispatch({ type: 'changePath', path: index === 0 ? 'This PC' : `This PC\\${name}` });
    onClick(index);
  };

  let nameClass = 'name';
  if (header) nameClass += ' header';

  return (
    <div className={className} onClick={handleClick}>
      {icon && <div className="icon">{icon}</div>}
      <div className={nameClass}>{name}</div>
    </div>
  );
};

export default SidebarElement;
