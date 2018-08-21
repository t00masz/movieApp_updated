import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureStore from './store/configureStore'
import ContactForm from './components/ContactForm'
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';
import './styles/styles.css'

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState());
  });

ReactDOM.render(
    <Provider store = { store }>
        <ContactForm />
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();
