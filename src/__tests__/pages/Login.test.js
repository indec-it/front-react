import {getByTestId, getByPlaceholderText, getByText} from '@testing-library/react';

import Login from '@/pages/Login';

describe('<Login>', () => {
  const getComponent = () => render(Login);

  it('should display `Iniciar sesion`', () => {
    const {container} = getComponent();
    expect(getByText(container, 'Iniciar sesion')).toBeInTheDocument();
  });

  it('should display a message', () => {
    const {container} = getComponent();
    expect(getByText(container, 'Ingrese sus credenciales para acceder al sistema')).toBeInTheDocument();
  });

  it('should render a button with `Ingresar` text', () => {
    const {container} = getComponent();
    const button = getByTestId(container, 'login-button');
    expect(getByText(button, 'Ingresar')).toBeInTheDocument();
  });

  it('should display `mforlenza@indec.gob.ar` as placeholder', () => {
    const {container} = getComponent();
    expect(getByPlaceholderText(container, 'mforlenza@indec.gob.ar')).toBeInTheDocument();
  });

  it('should display `12345678` as placeholder', () => {
    const {container} = getComponent();
    expect(getByPlaceholderText(container, '12345678')).toBeInTheDocument();
  });
});
