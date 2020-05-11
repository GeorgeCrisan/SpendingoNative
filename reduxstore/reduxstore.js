//Basic Redux 
import {applyMiddleware, createStore} from "redux";

//Thunk Midleware
import thunkMiddleware from "redux-thunk";

// Persist Stuff
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

// Redux Logger

import {createLogger} from 'redux-logger';


//Spendingo Reducers
import rootReducer from "./reducers";

//Define persist config

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(
  persistedReducer,
  {
    loading: false,
    user: false
   },
  applyMiddleware(thunkMiddleware, createLogger())
);

const persistor = persistStore(store); 

export {
  store,
  persistor
};