import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

/**
 * Imports for redux-persist
 */
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
/**
 * Imports for redux-thunk
 */
import thunk from "redux-thunk";

/**
 * Saga imports to replace thunks
 */
// import createSagaMiddleware from "redux-saga";
// import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root", // I want you persist the whole thing = start from the root level.
  storage: storage, // Default in any browser is window.localStorage
  // blacklist: ["user"], // I don't want to persist the user state. It is coming from authStateListener anyway, which is persisting the whole thing.
  whitelist: ["cart"], // I only want to persist the cart state.
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // This is what I want to use for my store. I used to use rootReducer but now I have a persistedReducer which is based on rootReducer.

// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [logger];
const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter(Boolean);

// const middlewares = [logger];

// const middlewares = [
//   process.env.NODE_ENV !== "production" && logger,
//   sagaMiddleware,
// ].filter(Boolean);

const comboseEnhacer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
// If we are not in production and there is a window object and these devtools exist, then use this compose otherwise,
// just use the compose that we have from redux.
const combosedEnhancers = comboseEnhacer(applyMiddleware(...middlewares));

// export const store = createStore(rootReducer, undefined, combosedEnhancers);
export const store = createStore(
  persistedReducer,
  undefined,
  combosedEnhancers
);

export const persistor = persistStore(store); // This is will be passed below our store

// sagaMiddleware.run(rootSaga);
