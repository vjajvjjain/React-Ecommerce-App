import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./UserReducer/user.reducer";
import cartReducer from "./CartReducer/cartReducer.reducer";
import DirectoryReducer from "./DirectoryReducer/Directory.Reducer";
import collectionReducer from "./CollectionReducer/collection.reducer";


const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: DirectoryReducer,
  collection: collectionReducer,
});

const NewRootReducer = persistReducer(persistConfig, rootReducer) 

export default NewRootReducer;
