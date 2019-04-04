import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";

const env = process.env.NODE_ENV || "development";

let middleware = compose(
  applyMiddleware(thunk, reduxImmutableStateInvariant()),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

if (env === "production") {
  middleware = applyMiddleware(thunk);
}

const store = createStore(rootReducer, middleware);

if (module.hot) {
  // Webpack HMR for reducers
  module.hot.accept("./reducers", () => {
    const nextReducer = require("./reducers").default;
    store.replaceReducer(nextReducer);
  });
}

export default store;
