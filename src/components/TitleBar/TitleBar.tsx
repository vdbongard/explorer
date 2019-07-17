import React, { FC, ReactElement, ReactNode, useState } from 'react';
import './TitleBar.scss';
import Tab from '../Tab/Tab';

const tabs = ['Tab 1', 'Tab 2'];

const TopBar: FC = (): ReactElement => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [maximized, setMaximized] = useState(false);

  const Tabs = tabs.map(
    (name, index): ReactNode => (
      <Tab
        name={name}
        index={index}
        key={index}
        selected={index === selectedTab}
        onClick={(i): void => setSelectedTab(i)}
      />
    )
  );

  const toggleMaximize = (): void => setMaximized(!maximized);

  return (
    <div className="TopBar">
      <div className="tabs">{Tabs}</div>
      <div className="actions">
        <button className="minimize" />
        <button className={maximized ? 'restore' : 'maximize'} onClick={toggleMaximize} />
        <button className="close" />
      </div>
    </div>
  );
};

export default TopBar;
