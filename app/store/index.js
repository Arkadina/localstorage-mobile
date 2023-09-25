import AsyncStorage from "@react-native-async-storage/async-storage";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import todoReducer from "./slices/todoSlice";

const reducers = combineReducers({
    todo: todoReducer,
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    // whitelist: ["todo"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

const persistor = persistStore(store);

export { store, persistor };
