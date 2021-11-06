import React, { Component } from 'react'
import Count from './container/Count/countContainer'
import store from './redux/store'

// 容器组件的store都是在容器组件的父组件中 用props传递的  
export default class App extends Component {
    render() {
        return (
            <div>
                <Count store={store}/>
            </div>
        )
    }

}
