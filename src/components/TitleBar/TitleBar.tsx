import React, { FC, ReactElement, ReactNode, RefObject, useRef, useState } from 'react';
import './TitleBar.scss';
import Tab from '../Tab/Tab';
import { useDrag } from '../../hooks/useDrag';

const tabs = ['Tab 1', 'Tab 2'];

interface Props {
  setPos: (newPos: [number, number]) => void;
  explorerRef: RefObject<HTMLDivElement>;
}

const TitleBar: FC<Props> = ({ setPos, explorerRef }): ReactElement => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [maximized, setMaximized] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  useDrag(dragRef, explorerRef, setPos);

  const Tabs = tabs.map(
    (name, index): ReactNode => (
      <Tab
        name={name}
        index={index}
        key={index}
        selected={index === selectedTabIndex}
        onClick={(i): void => setSelectedTabIndex(i)}
      />
    )
  );

  const toggleMaximize = (): void => setMaximized(!maximized);

  return (
    <div className="TitleBar">
      <div className="tabs">{Tabs}</div>
      <div className="drag-area" ref={dragRef} />
      <div className="actions">
        <button className="minimize" />
        <button className={maximized ? 'restore' : 'maximize'} onClick={toggleMaximize} />
        <button className="close" />
      </div>
    </div>
  );
};

export default TitleBar;
