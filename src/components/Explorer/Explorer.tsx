import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import './Explorer.scss';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import TitleBar from '../TitleBar/TitleBar';

interface Props {
  id: string;
  onFocus: (id: string) => void;
  onClose: (id: string) => void;
}

const Explorer: FC<Props> = ({ id, onFocus, onClose }): ReactElement => {
  const [pos, setPos] = useState([0, 0]);
  const [initializing, setInitializing] = useState(true);
  const explorerRef = useRef<HTMLDivElement>(null);

  // centering
  useEffect((): void => {
    if (!explorerRef.current) return;

    const { offsetWidth, offsetHeight } = explorerRef.current;

    const x = (window.innerWidth - offsetWidth) / 2;
    const y = (window.innerHeight - offsetHeight) / 2;

    setPos([x, y]);
    setInitializing(false);
  }, [setPos]);

  const handleFocus = (): void => onFocus(id);

  const handleClose = (): void => onClose(id);

  let className = 'Explorer';

  if (initializing) {
    className += ' initializing';
  }

  return (
    <div
      className={className}
      style={{ left: pos[0], top: pos[1] }}
      ref={explorerRef}
      tabIndex={0}
      onFocus={handleFocus}
    >
      <TitleBar setPos={setPos} explorerRef={explorerRef} onClose={handleClose} />
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default Explorer;
