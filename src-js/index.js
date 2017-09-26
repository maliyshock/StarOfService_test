import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import '../src-scss/scss/index.scss'
import configureStore from './store/cofigureStore'

const store = configureStore();

render (
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)