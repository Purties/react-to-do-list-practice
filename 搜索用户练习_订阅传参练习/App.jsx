import React, { Component } from 'react'

import Search from './component/search'
import List from './component/list'

export default class App extends Component {
    state = {
        user: []
    }
    render() {
        return (
            <div id="app">
                <div className="container">
                    <Search />
                    <List />
                </div>
            </div>
        )
    }

    // 把Search组件发送的用户信息放在自己的state中
    getUser = (info) => {
        console.log(info);
        this.setState({ user: info });
    }
}
