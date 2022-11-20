import { createEvent, createStore } from 'effector/compat';
import cloneDeep from 'lodash/cloneDeep';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore } from 'effector-react/compat';

interface RouterStore {
  key: string | null;
  currentPath: string | null;
  backScene: string | null;
}

const initialState: RouterStore = {
  key: null,
  currentPath: null,
  backScene: null,
};

const currentPathChange = createEvent<{ key: string; path: string }>();
export const backSceneChange = createEvent<{ path: string | null }>();

const routerStore = createStore<RouterStore>(initialState)
  .on(currentPathChange, (state, payload) =>
    cloneDeep({
      ...state,
      currentPath: payload.path,
      key: payload.key,
    })
  )
  .on(backSceneChange, (state, payload) =>
    cloneDeep({
      ...state,
      backScene: payload.path,
    })
  );

export const useObservableRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = useStore(routerStore);

  useEffect(() => {
    currentPathChange({ key: location.key, path: location.pathname });
  }, [location]);

  useEffect(() => {
    if (state.backScene !== null) {
      navigate(state.backScene, { relative: 'path', replace: true });
    }

    backSceneChange({ path: null });
  }, [state.backScene]);

  return routerStore;
};
