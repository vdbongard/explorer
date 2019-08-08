import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import './Explorer.scss';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import TitleBar from '../TitleBar/TitleBar';

const Explorer: FC = (): ReactElement => {
  const [pos, setPos] = useState([0, 0]);
  const explorerRef = useRef<HTMLDivElement>(null);

  // centering
  useEffect((): void => {
    if (!explorerRef.current) return;

    const { offsetWidth, offsetHeight } = explorerRef.current;

    const x = (window.innerWidth - offsetWidth) / 2;
    const y = (window.innerHeight - offsetHeight) / 2;

    setPos([x, y]);
  }, [setPos]);

  return (
    <div className="Explorer" style={{ left: pos[0], top: pos[1] }} ref={explorerRef} tabIndex={0}>
      <TitleBar setPos={setPos} explorerRef={explorerRef} />
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default Explorer;
