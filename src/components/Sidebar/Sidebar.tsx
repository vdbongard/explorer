import React, { FC, ReactElement, ReactNode, useState } from 'react';
import './Sidebar.scss';
import SidebarElement from '../SidebarElement/SidebarElement';
import { quickAccessFolder, thisPCFolder } from '../../dummy-data';

const Sidebar: FC = (): ReactElement => {
  const [selectedElementIndex, setSelectedElementIndex] = useState();
  const [selectedPCElementIndex, setSelectedPCElementIndex] = useState();

  const quickAccessList = quickAccessFolder.map(
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
      />
    )
  );

  return (
    <div className="Sidebar">
      <div className="group">
        <div className="group-heading">Quick access</div>
        {quickAccessList}
      </div>
      <div className="group">
        <div className="group-heading">This PC</div>
        {thisPCList}
      </div>
    </div>
  );
};

export default Sidebar;
