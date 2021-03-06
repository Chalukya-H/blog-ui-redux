import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import {Provider} from 'react-redux'
import configureStore from './store/configuresStore'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const store = configureStore() 
store.subscribe(() => {
  console.log(store.getState())
})

const ele = (
  <Provider store = {store}>
      <App/>
  </Provider>
)

ReactDOM.render(ele, document.getElementById('root') )