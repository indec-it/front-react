import {useCurrentUser} from '@/hooks/useUser';
import useToken from '@/hooks/useToken';

import logo from '../../public/logo.png';

export default function Header() {
  const {setToken} = useToken();
  const {user} = useCurrentUser();

  const handleLogout = () => {
    setToken(null);
    window.location.href = '/';
  };

  return (
    <header className="bg-white shadow-sm h-20 flex items-center gap-2 justify-between p-4">
      <img src={logo} alt="INDEC" className="h-12 w-auto xs:h-14 md:h-16" />
      {user && <button onClick={handleLogout}>Cerrar sesion</button>}
    </header>
  );
}
