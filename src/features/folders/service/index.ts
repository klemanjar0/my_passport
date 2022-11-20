import { IFolder, INote } from '../store/types';
import { uniqueId } from 'lodash';

export const initFolder = (name: string, initialNotes: INote[] = []): IFolder => {
  return {
    id: uniqueId('folder_'),
    name,
    notes: [...initialNotes] ?? [],
  };
};
