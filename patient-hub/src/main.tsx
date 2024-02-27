import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import GlobalStyles from 'lib/GlobalStyles';
import RecoilProvider from 'components/providers/RecoilProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilProvider>
        <GlobalStyles />
        <App />
      </RecoilProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
