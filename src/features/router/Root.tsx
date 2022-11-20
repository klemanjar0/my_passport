import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppState } from '../appState';
import Navbar from '../../components/Navbar/Navbar';
import { useObservableRouter } from './store';

const Root = () => {
  useAppState();
  useObservableRouter();

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
