import React, { FC, ReactElement } from 'react';
import './Explorer.scss';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';

const Explorer: FC = (): ReactElement => {
  return (
    <div className="Explorer">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default Explorer;
