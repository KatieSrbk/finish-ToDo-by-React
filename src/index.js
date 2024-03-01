import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  ChakraBaseProvider,
  ChakraProvider,
  extendBaseTheme,
} from '@chakra-ui/react';

const theme = extendBaseTheme({});

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
