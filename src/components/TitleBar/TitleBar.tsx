import React, {
  FC,
  ReactElement,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import './TitleBar.scss';
import Tab from '../Tab/Tab';
import { useDrag } from '../../hooks/useDrag';

interface Props {
  setPos: (newPos: [number, number]) => void;
  explorerRef: RefObject<HTMLDivElement>;
  onClose?: () => void;
}

const TitleBar: FC<Props> = ({ setPos, explorerRef, onClose }): ReactElement => {
  const [tabs, setTabs] = useState(['Tab 1']);
  const [selectedTab, setSelectedTab] = useState('Tab 1');
  const [maximized, setMaximized] = useState(false);
  const [addedTab, setAddedTab] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);
  const tabsWrapperRef = useRef<HTMLDivElement>(null);
  useDrag(dragRef, explorerRef, setPos);

  const closeTab = useCallback(
    (name: string): void => {
      if (selectedTab === name) {
        const index = tabs.findIndex((tab): boolean => tab === selectedTab);
        if (tabs[index + 1]) {
          setSelectedTab(tabs[index + 1]);
        } else if (tabs[index - 1]) {
          setSelectedTab(tabs[index - 1]);
        } else {
          setSelectedTab('');
        }
      }
      setTabs([...tabs.filter((tab): boolean => tab !== name)]);
    },
    [selectedTab, tabs]
  );

  const Tabs = tabs.map(
    (name, index): ReactNode => (
      <Tab
        name={name}
        key={index}
        selected={name === selectedTab}
        onClick={(): void => setSelectedTab(name)}
        closeTab={closeTab}
      />
    )
  );

  const toggleMaximize = (): void => setMaximized(!maximized);

  const addTab = (): void => {
    const newTabIndex = tabs.length;
    const newTabName = `Tab ${newTabIndex + 1}`;
    setTabs([...tabs, newTabName]);
    setSelectedTab(newTabName);
    setAddedTab(true);
    if (tabsWrapperRef.current) {
      tabsWrapperRef.current.scrollLeft = tabsWrapperRef.current.scrollWidth;
    }
  };

  // scroll to the end of the tab list if a tab is added
  useEffect((): void => {
    if (addedTab && tabsWrapperRef.current) {
      tabsWrapperRef.current.scrollLeft = tabsWrapperRef.current.scrollWidth;
      setAddedTab(false);
    }
  }, [addedTab]);

  let tabWrapperClass = 'tabs-wrapper';
  if (selectedTab === tabs[tabs.length - 1]) tabWrapperClass += ' with-shadow';

  return (
    <div className="TitleBar">
      <div className="tabs">
        <div className={tabWrapperClass} ref={tabsWrapperRef}>
          {Tabs}
        </div>
        <button className="add-tab" onClick={addTab}>
          
        </button>
      </div>
      <div className="drag-area" ref={dragRef} />
      <div className="actions">
        <button className="minimize" />
        <button className={maximized ? 'restore' : 'maximize'} onClick={toggleMaximize} />
        <button className="close" onClick={onClose} />
      </div>
    </div>
  );
};

export default TitleBar;
