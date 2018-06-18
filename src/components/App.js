import React, { Component } from 'react';
import Todo from './Todo'
import {createStore} from "redux";
import { Provider } from 'react-redux';
import reducer from '../reducers/index'

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Todo />
        </Provider>
    );
  }
}

export default App;