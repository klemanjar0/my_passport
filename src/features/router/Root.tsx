import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAppState } from '../appState';
import Navbar from '../../components/Navbar/Navbar';

const Root = () => {
  const appState = useAppState();

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
