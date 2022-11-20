import React from 'react';
import styled from 'styled-components';
import { Box, Heading } from '@chakra-ui/react';
import { colors } from '../../features/theme/colors';
import Link from '../Link/Link';
import { useNavigate } from 'react-router-dom';

const NavbarBase = styled(Box)`
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;

  background-color: ${colors.snow};
  height: 72px;

  padding: 0 2%;
  gap: 2%;

  @media (max-width: 768px) {
    height: 96px;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();

  const goToFolders = () => {
    navigate('/folders');
  };

  const goToSettings = () => {
    navigate('/settings');
  };

  const onGoHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <NavbarBase>
      <Heading color={colors.violentViolet}>My Passport</Heading>
      <Link title={'Home'} onPress={onGoHome} />
      <Link title={'Folders'} onPress={goToFolders} />
      <Link title={'Settings'} onPress={goToSettings} />
    </NavbarBase>
  );
};

export default Navbar;
