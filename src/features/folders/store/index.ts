import { combine, createStore, restore, sample } from 'effector/compat';
import { FolderState, FolderStore, IFolder, INote } from './types';
import { createFolder, createNote, removeFolder, selectFolder } from './events';
import merge from 'lodash/merge';
import { onCreateFolderMutation, onCreateNoteMutation, onRemoveFolderMutation } from './mutations';
import find from 'lodash/find';

export const defaultFolderId = 'folder_all';
export const defaultFolder = { id: defaultFolderId, name: 'All', notes: [] };
export const initialFolderStoreState = [defaultFolder];

export const folderStore = createStore<FolderStore>({
  folders: initialFolderStoreState,
})
  .on(createFolder, onCreateFolderMutation)
  .on(removeFolder, onRemoveFolderMutation)
  .on(createNote, onCreateNoteMutation);

export const folders = combine(folderStore, (store) => store.folders);

export const folderState = createStore<FolderState>({
  selectedFolderId: null,
}).on(selectFolder, (state, payload) => ({ ...state, selectedFolderId: payload }));
