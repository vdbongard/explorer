import React, { FC, ReactElement, useRef, useState, FocusEvent, MouseEvent } from 'react';
import './HeaderBar.scss';

const HeaderBar: FC = (): ReactElement => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const breadcrumbsRef = useRef<HTMLDivElement>(null);

  const onClick = (e: React.MouseEvent): void => {
    if (e.target === breadcrumbsRef.current) {
      setFocus(true);
    }
  };
  const onBlur = (): void => setFocus(false);
  const onFocus = (e: FocusEvent<HTMLInputElement>): void => {
    e.target.select();
  };

  return (
    <div className="HeaderBar">
      <div className="actions">
        <button className="back"></button>
        <button className="forward" disabled>
          
        </button>
        <button className="up"></button>
      </div>

      <div className="bar" onClick={onClick}>
        {focus ? (
          <input
            type="text"
            defaultValue="C:\Users\Daniel\Desktop"
            spellCheck={false}
            onBlur={onBlur}
            onFocus={onFocus}
            ref={inputRef}
            autoFocus={true}
          />
        ) : (
          <div className="breadcrumbs" ref={breadcrumbsRef}>
            <div className="folder">This PC</div>
            <div className="arrow"></div>
            <div className="folder">Desktop</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderBar;
