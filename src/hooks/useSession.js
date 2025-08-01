import {useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

import {useCurrentUser} from './useUser';
import useQueryParams from './useQueryParams';
import useToken from './useToken';

const useSession = () => {
  const query = useQueryParams();
  const token = query.get('accessToken');
  const {setToken} = useToken();
  const {user, isLoading} = useCurrentUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (token) {
      setToken(token);

      const newQuery = new URLSearchParams(query);
      newQuery.delete('accessToken');

      const newQueryString = newQuery.toString();
      const newPath = location.pathname + (newQueryString ? `?${newQueryString}` : '');

      navigate(newPath, {replace: true});
    }
  }, [token]);

  return [user, isLoading];
};

export default useSession;
