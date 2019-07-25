import React, { FC, ReactElement, useRef, useState, FocusEvent, MouseEvent } from 'react';
import './HeaderBar.scss';

const HeaderBar: FC = (): ReactElement => {
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = (): void => setFocus(true);
  const onClickChild = (e: MouseEvent): void => e.stopPropagation();
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
          <div className="breadcrumbs">
            <div className="folder" onClick={onClickChild}>
              This PC
            </div>
            <div className="arrow" onClick={onClickChild}>
              
            </div>
            <div className="folder" onClick={onClickChild}>
              Desktop
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderBar;
