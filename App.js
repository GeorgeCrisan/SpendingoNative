import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

//Redux local config 

import { store, persistor } from './reduxstore/reduxstore';

//Views
import IndexView from './Views/IndexView';

const App = () => {
  return (
    <>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <IndexView />
          </NavigationContainer>
        </PersistGate>
      </Provider>

    </>
  );
};


export default App;
