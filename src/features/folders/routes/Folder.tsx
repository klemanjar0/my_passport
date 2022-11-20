import React, { useEffect } from 'react';
import { createNote, selectFolder } from '../store/events';
import { useList, useStore, useStoreMap } from 'effector-react/compat';
import { defaultFolder, folders, notes } from '../store';
import { useParams } from 'react-router-dom';
import find from 'lodash/find';
import { Box, Button, Divider, Heading } from '@chakra-ui/react';
import { IoAddOutline } from 'react-icons/io5';
import NoteListItem from '../components/NoteListItem/NoteListItem';
import { initNote } from '../service';

const Folder = () => {
  const params = useParams<{ id: string }>();
  const items = useStore(folders);
  const folder = find(items, (it) => it.id === params.id) || defaultFolder;

  useEffect(() => {
    selectFolder(folder.id);

    return () => {
      selectFolder(null);
    };
  });

  const $notes = useStore(notes);
  const notesList = useList(notes, (item, index) => {
    return <NoteListItem item={item} isLast={$notes.length - 1 === index} folderId={folder.id} />;
  });

  const onAddNote = () => {
    createNote({ folderId: folder.id, note: initNote({ name: '', body: '' }) });
  };

  return (
    <Box w={'100%'}>
      <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row'} alignItems={'center'}>
        <Heading size={'xl'}>{folder.name}</Heading>
        <Button onClick={onAddNote} p={0} m={0} variant={'ghost'}>
          <IoAddOutline size={28} />
        </Button>
      </Box>
      <Divider />
      <Box>{notesList}</Box>
    </Box>
  );
};

export default Folder;
