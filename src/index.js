import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers/reducers";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  )
  , document.getElementById('root'));
