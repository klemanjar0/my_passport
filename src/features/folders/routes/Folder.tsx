import React, { useEffect } from 'react';
import { selectFolder } from '../store/events';
import { useList, useStore } from 'effector-react/compat';
import { defaultFolder, folders } from '../store';
import { useParams } from 'react-router-dom';
import find from 'lodash/find';
import { Box, Button, Divider, Heading } from '@chakra-ui/react';
import { IoAddOutline } from 'react-icons/io5';

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
      <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row'} alignItems={'center'}>
        <Heading size={'xl'}>{folder.name}</Heading>
        <Button p={0} m={0} variant={'ghost'}>
          <IoAddOutline size={28} />
        </Button>
      </Box>
      <Divider />
    </Box>
  );
};

export default Folder;
