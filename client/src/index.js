import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routes/AppRouter'
import 'normalize.css';
import './styles/styles.css'

const store = configureStore();

ReactDOM.render(
    <Provider store = { store }>
        { AppRouter }
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();
