import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AppRoutes from './routes'
import { SnackBarProvider } from './contexts/useSnackbar'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import StyleVariables from './styles/global.module.scss';

import './styles/common.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: StyleVariables.themeColorPrimary,
    },
    secondary: {
      main: StyleVariables.themeColorSecondary,
    },
  },
});

const App = () => {
  const [reactQueryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
          },
        },
      }),
  );

  return (
    <div className='app'>
      <QueryClientProvider client={reactQueryClient}>
        <SnackBarProvider>
          <ThemeProvider theme={theme}>
            <AppRoutes />
          </ThemeProvider>
        </SnackBarProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App;
