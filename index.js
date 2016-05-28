import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Markdown from './containers/markdown'
import MdResult from './containers/mdResult'
import mdContent from './reducers/mdContent'

var store = createStore(mdContent);

ReactDOM.render(
  <Provider store={store}>
  <div>
    <Markdown/>
    <MdResult/>
  </div>
  </Provider>,
  document.getElementById('app')
);
