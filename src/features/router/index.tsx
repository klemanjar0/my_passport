import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './Root';
import Settings from '../settings/routes/Settings';
import Folders from '../folders/routes/Folders';
import Folder from '../folders/routes/Folder';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<div>404 Not Found</div>}>
      <Route index element={<div />} />
      <Route path="folders/" element={<Folders />}>
        <Route path=":id/" element={<Folder />} />
      </Route>
      <Route path="settings/" element={<Settings />} />
    </Route>
  )
);

export default router;
