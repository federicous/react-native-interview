import React, {Component} from 'react';
import App, { navReducer } from './src';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import getStore from './src/config/store';



const { store, persistor } = getStore(navReducer);

export default Index = () => { //eslint-disable-line no-undef
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};
