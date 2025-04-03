import {Routes as ReactRouterRoutes, Route} from 'react-router';

import {routes} from '@/constants';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Maintenance from '@/pages/Maintenance';

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path={routes.MAINTENANCE} element={<Maintenance />} />
      <Route path={routes.LOGIN} element={<Login />} />
      <Route path="*" element={<Home />} />
    </ReactRouterRoutes>
  );
}
