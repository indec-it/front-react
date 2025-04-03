import {getByText} from '@testing-library/react';

import Footer from '@/components/Footer';

describe('<Footer>', () => {
  const getComponent = () => render(Footer);

  it('should render a footer', () => {
    const {container} = getComponent();
    expect(getByText(container, 'FOOTER')).toBeInTheDocument();
  });
});
