import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import Footer from './components/Footer';
import Header from './components/Header';
import TokenProvider from './context/token';
import UserProvider from './context/user';
import Routes from './routes';
import './styles.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TokenProvider>
        <UserProvider>
          <Header />
          <main>
            <Routes />
          </main>
          <Footer />
        </UserProvider>
      </TokenProvider>
    </QueryClientProvider>
  );
}

export default App;
