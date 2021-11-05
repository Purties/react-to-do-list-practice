import React, { Component } from 'react'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import { Link, Route } from 'react-router-dom'
import MyLink from './components/MyLink'

export default class App extends Component {
    state = {
        user: []
    }
    render() {
        return (
            <div>
                <Header a={1}/>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 在React中，是Link组件（路由链接）完成路径切换，to属性是用来切换路径的 */}
                            <MyLink to="/about">About</MyLink>
                            <MyLink to="/home">Home</MyLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">

                                {/* route标签是路由的切换实现，path属性是用来监听路径，然后路径匹配成功则加载对应的组件,component属性后跟当前要加载的组件 */}
                                <Route path="/about" component={About} />
                                <Route path="/home" component={Home} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
