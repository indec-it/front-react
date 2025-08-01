import {useMemo} from 'react';
import {useLocation} from 'react-router';

const useQueryParams = () => {
  const {search, hash} = useLocation();

  return useMemo(() => {
    if (hash && hash.includes('?')) {
      const queryString = hash.split('?')[1];
      return new URLSearchParams(queryString);
    }
    return new URLSearchParams(search);
  }, [search, hash]);
};

export default useQueryParams;
