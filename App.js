import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
//import storage from 'redux-persist/lib/storage';

//Redux local config 

import { store, persistor } from './reduxstore/reduxstore';

//Views
import IndexView from './Views/IndexView';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <IndexView />
        </PersistGate>
      </Provider>
    </>
  );
};


export default App;
