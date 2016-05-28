import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import HelloMessage from './components/test'

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('app'));
