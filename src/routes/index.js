import {Routes as ReactRouterRoutes, Route} from 'react-router';
import {Loading} from '@indec/react-commons/components';

import {routes} from '@/constants';
import useSession from '@/hooks/useSession';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Maintenance from '@/pages/Maintenance';

export default function Routes() {
  const [user, isLoading] = useSession();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ReactRouterRoutes>
      <Route path={routes.MAINTENANCE} element={<Maintenance />} />
      {user ? <Route path="*" element={<Home />} /> : <Route path="*" element={<Login />} />}
    </ReactRouterRoutes>
  );
}
