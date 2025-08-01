import {useNavigate} from 'react-router-dom';
import {Header as IndecHeader} from '@indec/react-commons/components';

import {useCurrentUser} from '@/hooks/useUser';
import useToken from '@/hooks/useToken';

const items = [{path: 'home', name: 'Home'}];

export default function Header() {
  const navigate = useNavigate();
  const {token, setToken} = useToken();
  const {user} = useCurrentUser();

  const handleSetButton = selectedModule => {
    navigate(selectedModule);
  };

  const handleLogout = () => {
    setToken(null);
    window.location.href = '/';
  };

  return <IndecHeader token={token} user={user} items={items} onRedirect={handleSetButton} onLogout={handleLogout} />;
}
