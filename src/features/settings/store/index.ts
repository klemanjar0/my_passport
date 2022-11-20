import { createStore } from 'effector/compat';
import { Settings } from './types';

const settings = createStore<Settings>({ isAuthed: false });
