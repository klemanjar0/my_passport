import React, { useEffect } from 'react';
import { selectFolder } from '../store/events';
import { useStore } from 'effector-react/compat';
import { defaultFolder, folders } from '../store';
import { useParams } from 'react-router-dom';
import find from 'lodash/find';
import { Box, Divider, Heading } from '@chakra-ui/react';

const Folder = () => {
  const params = useParams();
  const items = useStore(folders);

  const folder = find(items, (it) => it.id === params.id) || defaultFolder;

  useEffect(() => {
    selectFolder(folder.id);

    return () => {
      selectFolder(null);
    };
  });

  return (
    <Box w={'100%'}>
      <Heading size={'lg'}>{folder.name}</Heading>
      <Divider />
    </Box>
  );
};

export default Folder;
