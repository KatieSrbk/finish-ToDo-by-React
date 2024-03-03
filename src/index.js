import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  ChakraBaseProvider,
  ChakraProvider,
  extendTheme,
} from '@chakra-ui/react';

const theme = extendTheme({});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ChakraBaseProvider theme={theme}>
        <App />
      </ChakraBaseProvider>
    </ChakraProvider>
  </React.StrictMode>
);
