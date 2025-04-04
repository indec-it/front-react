import {useContext} from 'react';

import {TokenContext} from '@/context/token';

const useToken = () => useContext(TokenContext);

export default useToken;
