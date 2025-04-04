import {useEffect} from 'react';

import {useCurrentUser} from './useUser';
import useQueryParams from './useQueryParams';
import useToken from './useToken';

const useSession = () => {
  const query = useQueryParams();
  const token = query.get('token');
  const {setToken} = useToken();
  const {user} = useCurrentUser();

  useEffect(() => {
    if (token) {
      setToken(token);
    }
  }, [token]);

  return [user];
};

export default useSession;
