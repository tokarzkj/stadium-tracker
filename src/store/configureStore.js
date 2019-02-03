import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';

export function configureStore(preloadedState = {}) {

    let storeComposer;
    if (process.env.NODE_ENV === 'development') {
        storeComposer = composeWithDevTools;
    } else {
        storeComposer = compose;
    }

    const store = createStore(
        rootReducer,
        preloadedState,
        storeComposer()
    )

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
}