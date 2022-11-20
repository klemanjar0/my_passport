import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { colors } from '../../features/theme/colors';
import { doNothing } from '../../features/utils';

interface Props {
  title: string;
  onPress?: () => void;
}

const LinkBase = styled.span`
  color: ${colors.violentViolet};
  padding: 2px 0;

  :hover {
    color: ${colors.lochmara};
    cursor: pointer;
  }
`;

const Link: React.FC<Props> = (props) => {
  const { onPress = doNothing, title } = props;
  return <LinkBase onClick={onPress}>{title}</LinkBase>;
};

export default Link;
