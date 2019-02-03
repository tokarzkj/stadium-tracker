import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';

export function configureStore(preloadedState = {}) {
    debugger;
    const store = createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools()
    )

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
}