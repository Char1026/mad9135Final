import React from 'react';
import Main from './components/main';
import {Provider} from "react-redux";
import {
  createStore,
  applyMiddleware,
  compose
} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

let initialState = {};
const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store} >
        <Main />
      </Provider>
    );
  }
}
