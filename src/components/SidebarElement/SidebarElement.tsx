import React, { FC, ReactElement } from 'react';
import './SidebarElement.scss';

interface Props {
  name: string;
  icon: string;
  selected: boolean;
  index: number;
  onClick: (index: number) => void;
}

const SidebarElement: FC<Props> = ({ icon, name, selected, index, onClick }): ReactElement => {
  let className = 'SidebarElement';

  if (selected) className += ' selected';

  return (
    <div className={className} onClick={(): void => onClick(index)}>
      <div className="icon">{icon}</div>
      <div className="name">{name}</div>
    </div>
  );
};

export default SidebarElement;
