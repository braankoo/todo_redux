import {configureStore} from '@reduxjs/toolkit';
import {TodoReducer} from "./reducers/ToDo/reducer";
import {
    Persistor, persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, TodoReducer);

const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    }
);
export const persistor: Persistor = persistStore(store);
export default store;

