import React, { FC, ReactElement, useState } from 'react';
import './TitleBar.scss';
import Tab from '../Tab/Tab';

const tabs = ['Tab 1', 'Tab 2'];

const TopBar: FC = (): ReactElement => {
  const [selectedTab, setSelectedTab] = useState(0);

  const Tabs = tabs.map((name, index) => (
    <Tab
      name={name}
      index={index}
      key={index}
      selected={index === selectedTab}
      onClick={(i): void => setSelectedTab(i)}
    />
  ));

  return (
    <div className="TopBar">
      <div className="tabs">{Tabs}</div>
      <div className="actions" />
    </div>
  );
};

export default TopBar;
