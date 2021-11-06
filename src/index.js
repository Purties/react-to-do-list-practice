import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import {Provider} from 'react-redux'

// 在渲染app时，套一层provider属性，直接向所有的App组件供应store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

/* store.subscribe(() => {
    ReactDOM.render(<App />).document.getElementById('root');
}) */