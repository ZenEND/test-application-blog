import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';
import { Actions } from '../constants/action-types';
import rootReducer, { AppState } from './reducers/rootReducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<AppState, Actions>)),
    );

export default store;
