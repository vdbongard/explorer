import React, { FC, ReactElement } from 'react';
import './Explorer.scss';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import TitleBar from '../TitleBar/TitleBar';

const Explorer: FC = (): ReactElement => {
  return (
    <div className="Explorer">
      <TitleBar />
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default Explorer;
