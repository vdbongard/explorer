import React, { FC, ReactElement } from 'react';
import './Header.scss';
import HeaderBar from '../HeaderBar/HeaderBar';

const Header: FC = (): ReactElement => {
  return (
    <div className="Header">
      <HeaderBar />
    </div>
  );
};

export default Header;
