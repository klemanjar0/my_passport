import { CreateNotePayload, FolderStore, IFolder, UpdateNotePayload } from './types';
import find from 'lodash/find';
import cloneDeep from 'lodash/cloneDeep';

export const onCreateFolderMutation = (state: FolderStore, payload: IFolder) =>
  cloneDeep({
    ...state,
    folders: [...state.folders, payload],
  });

export const onRemoveFolderMutation = (state: FolderStore, payload: string) =>
  cloneDeep({
    ...state,
    folders: state.folders.filter((it) => it.id !== payload),
  });

export const onCreateNoteMutation = (state: FolderStore, payload: CreateNotePayload) => {
  const notes = [...(find(state.folders, (it) => it.id === payload.folderId)?.notes ?? []), payload.note];

  return cloneDeep({
    ...state,
    folders: state.folders.map((it) => (it.id === payload.folderId ? { ...it, notes } : it)),
  });
};

export const onUpdateNoteMutation = (state: FolderStore, payload: UpdateNotePayload) => {
  const notes = find(state.folders, (it) => it.id === payload.folderId)?.notes ?? [];
  const mapped = notes.map((it) => (it.id === payload.note.id ? cloneDeep(payload.note) : it));

  return cloneDeep({
    ...state,
    folders: state.folders.map((it) => (it.id === payload.folderId ? { ...it, notes: mapped } : it)),
  });
};
