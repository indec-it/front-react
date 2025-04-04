import {createContext} from 'react';

import {useGetCurrentUser} from '@/hooks/useUser';

export const UserContext = createContext({user: {}});

export default function UserProvider({children}) {
  const {data} = useGetCurrentUser();
  return <UserContext.Provider value={{user: data?.user}}>{children}</UserContext.Provider>;
}
