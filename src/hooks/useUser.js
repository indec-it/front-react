import {useContext} from 'react';
import {useQuery} from '@tanstack/react-query';

import {apiRoutes} from '@/constants';
import {UserContext} from '@/context/user';
import {http} from '@/services';

import useToken from './useToken';

export const useCurrentUser = () => useContext(UserContext);

export const useGetCurrentUser = () => {
  const {token} = useToken();
  return useQuery({
    queryKey: ['user', token],
    queryFn: () => http.get(apiRoutes.CURRENT_USER),
    enabled: !!token
  });
};
