import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import signIn from "./login";
import taskReducer from "./tasks";

const reducer = combineReducers({ signIn, taskReducer });

const store = () => {
  return createStore(reducer, composeWithDevTools());
};

export default store();
