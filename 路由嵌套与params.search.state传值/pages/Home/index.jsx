import React, { Component } from 'react'
import News from './News';
import Message from './Message';
import MyLink from '../../components/MyLink';
import { Switch, Route } from 'react-router-dom'

export default class Home extends Component {

    render() {
        console.log('我是home');
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyLink to="/home/news">news</MyLink>

                        </li>
                        <li>
                            <MyLink to="/home/message">message</MyLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path="/home/news" component={News} />
                        <Route path="/home/message" component={Message} />
                    </Switch>
                </div>
            </div>
        )
    }

}
