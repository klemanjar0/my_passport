import React from 'react';
import { IFolder } from '../../store/types';
import { Box, Button, color, Divider, Text } from '@chakra-ui/react';
import { IoChevronForwardOutline, IoFolderOutline } from 'react-icons/io5';
import { colors } from '../../../theme/colors';
import { useStore } from 'effector-react/compat';
import { folderState } from '../../store';
import { useNavigate } from 'react-router-dom';
import once from 'lodash/once';

interface Props {
  item: IFolder;
  isLast?: boolean;
}

const FolderListItem: React.FC<Props> = (props) => {
  const { item, isLast = false } = props;
  const store = useStore(folderState);
  const navigate = useNavigate();

  const onSelect = once(() => {
    navigate(item.id);
  });

  return (
    <>
      <Button
        variant={'unstyled'}
        display={'flex'}
        w={'100%'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        backgroundColor={colors.transparent}
        onClick={onSelect}
      >
        <Box
          display={'flex'}
          flex={1}
          flexDirection={'row'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          gap={'10px'}
          backgroundColor={colors.transparent}
          mr={1}
          w={'100%'}
          p={2}
        >
          <IoFolderOutline color={colors.violentViolet} size={22} />
          <Text color={store.selectedFolderId === item.id ? colors.ghost : colors.violentViolet}>{item.name}</Text>
        </Box>
        <Text mr={2} color={colors.ghost}>
          {item.notes.length}
        </Text>
        <IoChevronForwardOutline
          color={store.selectedFolderId === item.id ? colors.ghost : colors.violentViolet}
          size={22}
        />
      </Button>
      {!isLast && <Divider />}
    </>
  );
};

export default FolderListItem;
