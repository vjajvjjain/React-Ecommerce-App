import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import NewRootReducer from "./root-reducer";
const middlewares = [logger];
const store = createStore(NewRootReducer, applyMiddleware(...middlewares));
const persestor = persistStore(store);
export { store, persestor };
