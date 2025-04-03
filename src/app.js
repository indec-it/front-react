import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes';
import './styles.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
