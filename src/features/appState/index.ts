import { createStore } from 'effector/compat';
import { useEffect } from 'react';
import { appMount, appUnmount } from './store/events';
import { AppState } from './store/types';
import { useStore } from 'effector-react/compat';
import merge from 'lodash/merge';

const appState = createStore<AppState>({
  isActive: false,
})
  .on(appMount, (state) => merge(state, { isActive: true }))
  .on(appUnmount, (state) => merge(state, { isActive: false }));

export const useAppState = () => {
  const state = useStore(appState);

  useEffect(() => {
    appMount();
    return appUnmount;
  }, []);

  return state;
};
