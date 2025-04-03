import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router';

import App from './src/app';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
