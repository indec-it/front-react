import {getByText} from '@testing-library/react';

import Home from '@/pages/Home';

describe('<Home>', () => {
  const getComponent = () => render(Home);

  it('should display `Welcome to React Seed`', () => {
    const {container} = getComponent();
    expect(getByText(container, 'Welcome to React Seed')).toBeInTheDocument();
  });
});
