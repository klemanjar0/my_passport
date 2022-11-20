import { CreateNotePayload, FolderStore, IFolder } from './types';
import find from 'lodash/find';

export const onCreateFolderMutation = (state: FolderStore, payload: IFolder) => ({
  ...state,
  folders: [...state.folders, payload],
});

export const onRemoveFolderMutation = (state: FolderStore, payload: string) => ({
  ...state,
  folders: state.folders.filter((it) => it.id !== payload),
});

export const onCreateNoteMutation = (state: FolderStore, payload: CreateNotePayload) => {
  const notes = [...(find(state.folders, (it) => it.id === payload.folderId)?.notes ?? []), payload.note];

  return {
    ...state,
    folders: state.folders.map((it) => (it.id === payload.folderId ? { ...it, notes } : it)),
  };
};
