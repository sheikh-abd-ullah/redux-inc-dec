import { createStoreHook } from "react-redux";
import { applyMiddleware, createStore } from "redux";

import rootReducer from "./reducers/Index";

const store = createStore(rootReducer,{}, applyMiddleware());

export default store;