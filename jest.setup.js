import React from 'react';
import {render} from '@testing-library/react';
import {Formik} from 'formik';
import {MemoryRouter} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

global.React = React;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
});

global.render = (Component, props = {}, options = {}) => {
  let component = (
    <QueryClientProvider client={queryClient}>
      <Component {...props} />
    </QueryClientProvider>
  );
  if (options.router) {
    component = <MemoryRouter {...options.router}>{component}</MemoryRouter>;
  }
  if (options.formik) {
    component = (
      <Formik onSubmit={() => ({})} initialValues={options.formik.initialValues}>
        {component}
      </Formik>
    );
  }
  return render(component);
};
