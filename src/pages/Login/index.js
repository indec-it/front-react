import {useState} from 'react';

import Button from '@/components/Button';
import Field from '@/components/Field';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="flex justify-center items-center mt-7 p-8">
      <div className="w-full max-w-xl">
        <form className="shadow-md p-3 bg-[#F7F3E2] gap-4 flex flex-col">
          <h1 className="text-center text-3xl" data-testid="title">
            Iniciar sesion
          </h1>
          <h2 className="text-center text-xl">Ingrese sus credenciales para acceder al sistema</h2>
          <Field
            placeholder="mforlenza@indec.gob.ar"
            onChange={e => setUsername(e.target.value)}
            value={username}
            data-testid="username"
          />
          <Field
            type="password"
            placeholder="12345678"
            onChange={e => setPassword(e.target.value)}
            value={password}
            data-testid="password"
          />
          <Button type="submit" data-testid="login-button" label="Ingresar" />
        </form>
      </div>
    </div>
  );
}
