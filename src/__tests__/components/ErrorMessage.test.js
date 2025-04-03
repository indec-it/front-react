import {getByText} from '@testing-library/react';

import ErrorMessage from '@/components/ErrorMessage';

describe('<ErrorMessage>', () => {
  let props;
  const getComponent = () => render(ErrorMessage, props);
  beforeEach(() => {
    props = {error: 'This is an error'};
  });

  it('should display `props.error`', () => {
    const {container} = getComponent();
    expect(getByText(container, props.error)).toBeInTheDocument();
  });
});
