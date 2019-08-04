import React, { FC, ReactElement, ReactNode, useState } from 'react';
import './Sidebar.scss';
import SidebarElement from '../SidebarElement/SidebarElement';
import { favoritesFolder, thisPCFolder } from '../../dummy-data';

const Sidebar: FC = (): ReactElement => {
  const [selectedElementIndex, setSelectedElementIndex] = useState();
  const [selectedPCElementIndex, setSelectedPCElementIndex] = useState();

  const quickAccessList = favoritesFolder.map(
    ({ name, icon }, index): ReactNode => (
      <SidebarElement
        name={name}
        icon={icon}
        key={index}
        index={index}
        selected={index === selectedElementIndex}
        onClick={(i): void => {
          setSelectedElementIndex(i);
          setSelectedPCElementIndex(null);
        }}
        header={index === 0}
      />
    )
  );

  const thisPCList = thisPCFolder.map(
    ({ name, icon }, index): ReactNode => (
      <SidebarElement
        name={name}
        icon={icon}
        key={index}
        index={index}
        selected={index === selectedPCElementIndex}
        onClick={(i): void => {
          setSelectedPCElementIndex(i);
          setSelectedElementIndex(null);
        }}
        header={index === 0}
      />
    )
  );

  return (
    <div className="Sidebar">
      <div className="group">{quickAccessList}</div>
      <div className="group">{thisPCList}</div>
    </div>
  );
};

export default Sidebar;
