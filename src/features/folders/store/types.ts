export interface INote {
  id: string;
  name: string;
  url?: string;
  body: string;
}

export interface IFolder {
  id: string;
  name: string;
  notes: INote[];
}

export interface FolderStore {
  folders: IFolder[];
}

export interface FolderState {
  selectedFolderId: string | null;
}

export interface CreateNotePayload {
  folderId: string;
  note: INote;
}

export interface UpdateNotePayload {
  folderId: string;
  note: INote;
}
