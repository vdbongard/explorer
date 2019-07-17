import React, { FC, ReactElement } from 'react';
import './Tab.scss';

interface Props {
  name: string;
  selected?: boolean;
  onClick: (index: number) => void;
  index: number;
}

const Tab: FC<Props> = ({ name, selected, onClick, index }): ReactElement => {
  let className = 'Tab';

  if (selected) className += ' selected';

  const handleClick = (): void => onClick(index);

  return (
    <div className={className} onClick={handleClick}>
      {name}
    </div>
  );
};

export default Tab;
