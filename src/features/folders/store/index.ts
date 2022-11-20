import { combine, createStore } from 'effector/compat';
import { FolderState, FolderStore } from './types';
import { createFolder, removeFolder, selectFolder } from './events';
import merge from 'lodash/merge';

export const defaultFolderId = 'folder_all';
export const defaultFolder = { id: defaultFolderId, name: 'All', notes: [] };
export const initialFolderStoreState = [defaultFolder];

export const folderStore = createStore<FolderStore>({
  folders: initialFolderStoreState,
})
  .on(createFolder, (state, payload) => ({
    ...state,
    folders: [...state.folders, payload],
  }))
  .on(removeFolder, (state, payload) => ({
    ...state,
    folders: state.folders.filter((it) => it.id !== payload),
  }));

export const folders = combine(folderStore, (store) => store.folders);

export const folderState = createStore<FolderState>({
  selectedFolderId: null,
}).on(selectFolder, (state, payload) => ({ ...state, selectedFolderId: payload }));
