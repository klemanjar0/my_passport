import React from 'react';
import { INote } from '../../store/types';
import { Card, CardBody, Editable, EditableInput, EditablePreview, EditableTextarea } from '@chakra-ui/react';
import { updateNote } from '../../store/events';

interface Props {
  item: INote;
  isLast?: boolean;
  folderId: string;
}

const NoteListItem: React.FC<Props> = (props) => {
  const { item, isLast, folderId } = props;

  const onUpdateNote = (fieldName: string) => (value: string) => {
    const note = { ...item, [fieldName]: value };
    updateNote({ folderId, note });
  };

  return (
    <Card mt={4} px={2}>
      <CardBody>
        <Editable onSubmit={onUpdateNote('name')} defaultValue={item.name || 'Enter Title'}>
          <EditablePreview fontSize={22} style={{ fontWeight: 800 }} />
          <EditableInput fontSize={22} style={{ fontWeight: 800 }} />
        </Editable>
        <Editable onSubmit={onUpdateNote('body')} defaultValue={item.body || 'Enter Body'}>
          <EditablePreview />
          <EditableTextarea />
        </Editable>
      </CardBody>
    </Card>
  );
};

export default NoteListItem;
