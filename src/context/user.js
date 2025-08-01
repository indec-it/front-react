import {createContext} from 'react';

import {useGetCurrentUser} from '@/hooks/useUser';

export const UserContext = createContext({user: null, isLoading: true});

export default function UserProvider({children}) {
  const {data, isLoading} = useGetCurrentUser();
  return <UserContext.Provider value={{user: data?.user, isLoading}}>{children}</UserContext.Provider>;
}
