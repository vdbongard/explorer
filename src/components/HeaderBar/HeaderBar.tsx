import React, {
  FC,
  ReactElement,
  useRef,
  useState,
  FocusEvent,
  useContext,
  ReactNode,
  KeyboardEvent,
  MouseEvent,
} from 'react';
import './HeaderBar.scss';
import { FileSystemContext } from '../../App';

const HeaderBar: FC = (): ReactElement => {
  const [{ path }, dispatch] = useContext(FileSystemContext);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const breadcrumbsRef = useRef<HTMLDivElement>(null);

  const onClick = (e: MouseEvent): void => {
    if (e.target === breadcrumbsRef.current) {
      setFocus(true);
    }
  };
  const onClickFolderUp = (): void => {
    const lastIndex = path.lastIndexOf('\\');
    const newPath = lastIndex >= 0 ? path.slice(0, lastIndex) : path;
    dispatch({ type: 'changePath', path: newPath });
  };
  const onClickFolder = (path: string): void => {
    dispatch({ type: 'changePath', path });
  };
  const onBlur = (e: FocusEvent<HTMLInputElement>): void => {
    if (e.target.value) {
      dispatch({ type: 'changePath', path: e.target.value });
    }
    setFocus(false);
  };
  const onFocus = (e: FocusEvent<HTMLInputElement>): void => {
    e.target.select();
  };
  const onKeyUp = (e: KeyboardEvent<HTMLInputElement>): void => {
    // enter key
    if (e.keyCode === 13) {
      inputRef.current && inputRef.current.blur();
    }
  };

  const breadcrumbs = path
    .split('\\')
    .filter((f): boolean => !!f)
    .map(
      (folder, index, array): ReactNode => {
        return (
          <React.Fragment key={index}>
            <div
              className="folder"
              onClick={(): void => onClickFolder(array.slice(0, index + 1).join('\\'))}
            >
              {folder}
            </div>
            {index !== array.length - 1 && <div className="arrow"></div>}
          </React.Fragment>
        );
      }
    );

  return (
    <div className="HeaderBar">
      <div className="actions">
        <button className="back"></button>
        <button className="forward" disabled>
          
        </button>
        <button className="up" onClick={onClickFolderUp}>
          
        </button>
      </div>

      <div className="bar" onClick={onClick}>
        {focus ? (
          <input
            type="text"
            defaultValue={path}
            spellCheck={false}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyUp={onKeyUp}
            ref={inputRef}
            autoFocus={true}
          />
        ) : (
          <div className="breadcrumbs" ref={breadcrumbsRef}>
            {breadcrumbs}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderBar;
