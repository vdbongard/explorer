import React, { FC, ReactElement, useCallback, useRef } from 'react';
import './Tab.scss';
import { useMiddleClick } from '../../hooks/useMiddleClick';

interface Props {
  name: string;
  selected?: boolean;
  onClick: () => void;
  closeTab: (name: string) => void;
}

const Tab: FC<Props> = ({ name, selected, onClick, closeTab }): ReactElement => {
  const tabRef = useRef<HTMLDivElement>(null);
  const close = useCallback((): void => closeTab(name), [closeTab, name]);
  useMiddleClick(tabRef, close);

  let className = 'Tab';

  if (selected) className += ' selected';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    closeTab(name);
  };

  return (
    <div className={className} onClick={onClick} ref={tabRef}>
      <span className="tab-name">{name}</span>
      <span className="close-area">
        <button className="btn-close" onClick={handleClick}>
          
        </button>
      </span>
    </div>
  );
};

export default Tab;
