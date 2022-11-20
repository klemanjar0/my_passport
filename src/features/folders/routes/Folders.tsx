import React from 'react';
import { Box, Button, Card, CardBody, Container, Divider, Heading, Text, VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { useList, useStore } from 'effector-react/compat';
import { folders } from '../store';
import { IFolder } from '../store/types';
import FolderListItem from '../components/FolderListItem/FolderListItem';
import CreateFolderForm from '../components/CreateFolderForm/CreateFolderForm';

const Folders = () => {
  const $folders = useStore(folders);
  const folderList = useList<IFolder>(folders, (item, index) => (
    <FolderListItem item={item} isLast={$folders.length - 1 === index} />
  ));

  return (
    <VStack display={'flex'} flex={1} px={4} flexDirection={'row'} justifyContent={'space-between'} w={'100%'}>
      <Card w={'30%'} h={'100%'}>
        <CardBody display={'flex'} flexDirection={'column'}>
          <CreateFolderForm />
          <Heading display={'flex'} alignItems={'center'} gap={'8px'} flexDirection={'row'} mb={2} size={'md'}>
            My Folders
          </Heading>
          <Divider mb={2} />
          <Box m={0} p={0}>
            {folderList}
          </Box>
        </CardBody>
      </Card>
      <Box w={'69%'} h={'100%'}>
        <Outlet />
      </Box>
    </VStack>
  );
};

export default Folders;
