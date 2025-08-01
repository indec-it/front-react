import {useNavigate} from 'react-router-dom';
import {Header as IndecHeader} from '@indec/react-commons/components';

const items = [{path: 'home', name: 'Home'}];

export default function Header() {
  const navigate = useNavigate();
  const token = null;
  const user = null;

  const handleSetButton = selectedModule => {
    navigate(selectedModule);
  };

  const handleLogout = () => {
    window.location.href = '/';
  };

  return <IndecHeader token={token} user={user} items={items} onRedirect={handleSetButton} onLogout={handleLogout} />;
}
