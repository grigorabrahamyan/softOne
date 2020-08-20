import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { reducer } from './redux/reducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    < Provider store={store} >
        <Suspense fallback={<h1>Loading...</h1>} >
            <App />
        </Suspense>
    </Provider >, document.getElementById('root'));
serviceWorker.unregister();