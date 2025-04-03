import {getByAltText} from '@testing-library/react';

import Header from '@/components/Header';

describe('<Header>', () => {
  const getComponent = () => render(Header);

  it('should render an image', () => {
    const {container} = getComponent();
    expect(getByAltText(container, 'INDEC')).toBeInTheDocument();
  });
});
