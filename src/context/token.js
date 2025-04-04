import {createContext, useState, useEffect, useMemo} from 'react';

import {tokenService} from '@/services';

export const TokenContext = createContext({token: null, setToken: () => {}});

export default function TokenProvider({children}) {
  const [token, setToken] = useState(tokenService.getToken());

  useEffect(() => {
    const previousToken = tokenService.getToken();
    if (token && token !== previousToken) {
      tokenService.setToken(token);
    }
    if (!token) {
      tokenService.removeToken();
    }
  }, [token]);

  const tokenProviderValue = useMemo(() => ({token, setToken}), [token, setToken]);

  return <TokenContext.Provider value={tokenProviderValue}>{children}</TokenContext.Provider>;
}
