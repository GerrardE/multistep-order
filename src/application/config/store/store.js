import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import index from "../../../domain/redux";

const logger = createLogger({
  /* https://github.com/evgenyrodionov/redux-logger */
  collapsed: true,
  diff: true,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  index,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware, logger)),
);

export default store;
