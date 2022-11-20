import { createEvent } from 'effector/compat';
import { CreateNotePayload, IFolder } from './types';

export const createFolder = createEvent<IFolder>();
export const removeFolder = createEvent<string>();
export const selectFolder = createEvent<string | null>();
export const createNote = createEvent<CreateNotePayload>();
