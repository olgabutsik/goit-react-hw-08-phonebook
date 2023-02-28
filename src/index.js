import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { store, persistor } from './redux/store';
import { Global } from '@emotion/react';
import { GlobalStyles } from './components/Styles/GlobalStyles';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Global styles={GlobalStyles} />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
