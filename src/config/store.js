import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import getRootReducer from '../reducers';
import { persistReducer, persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';


const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'MyApp', actionsBlacklist: [ 'REDUX_STORAGE_SAVE' ]
		}) : compose;
		

const getStore = (navReducer, navMiddleware) => {

	const persistConfig = {
		key: 'root',
		storage: AsyncStorage,
	}
	
	const persistedReducer = persistReducer(persistConfig, getRootReducer(navReducer));
	const store = createStore(persistedReducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware)));
	const persistor = persistStore(store);
	
  return { store, persistor }
}

export default getStore;