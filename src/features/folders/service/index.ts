import { IFolder, INote } from '../store/types';
import { uniqueId } from 'lodash';

export const initFolder = (name: string, initialNotes: INote[] = []): IFolder => {
  return {
    id: uniqueId('folder_'),
    name,
    notes: [...initialNotes] ?? [],
  };
};

export const initNote = (payload: { name: string; body: string; url?: string }): INote => {
  return {
    id: uniqueId('note_'),
    name: payload.name,
    body: payload.body,
    url: payload.url,
  };
};
