import react from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import storeTs from './redux/store.ts';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);
