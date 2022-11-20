import React, { useState } from 'react';
import { Box, Button, Collapse, Input, Text } from '@chakra-ui/react';
import { colors } from '../../../theme/colors';
import { useStore } from 'effector-react/compat';
import { folders } from '../../store';
import find from 'lodash/find';
import { initFolder } from '../../service';
import { createFolder } from '../../store/events';

const CreateFolderForm = () => {
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const $folders = useStore(folders);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onSubmit = () => {
    createFolder(initFolder(name));

    setName('');
    setIsOpen(false);
  };

  const isNameDuplicated = !!find($folders, (it) => it.name === name);
  const disabled = !name || isNameDuplicated;

  return (
    <>
      <Button onClick={toggleOpen} backgroundColor={colors.aliceBlue} mb={4}>
        Create Folder
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box mb={4} mt={4}>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
          {isNameDuplicated && (
            <Text marginY={2} color={colors.sunsetOrange}>
              Folder with provided name already exists.
            </Text>
          )}
        </Box>
        <Button disabled={disabled} variant={'solid'} onClick={onSubmit} mb={4} w={'100%'}>
          <Text color={colors.pigmentGreen}>Submit</Text>
        </Button>
      </Collapse>
    </>
  );
};

export default CreateFolderForm;
