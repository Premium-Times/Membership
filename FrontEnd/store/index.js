import { createStore, applyMiddleware, compose } from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from '../reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

const nextRootReducer = require('../reducers').default;

export default function configureStore () {
    const middleware = [loggerMiddleware, thunk];

    const enhancer = compose(
        applyMiddleware(
            ...middleware
        )
    );

    const store = createStore(rootReducer, enhancer);

    if (module.hot) {
        module.hot.accept(() => {
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}