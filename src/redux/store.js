import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers';

let middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, logger];
}

const persistConfig = {
    key: 'root',
    storage,
    whitelis: ['persist'], // select reducer to persist or permanent
    blacklist: ['home'], // something temporary
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware));
const persistor = persistStore(store)

export {store, persistor};