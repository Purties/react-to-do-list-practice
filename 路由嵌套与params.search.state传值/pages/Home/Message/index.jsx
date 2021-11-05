import React, { Component } from 'react'
import Info from './Info'
import { Link, Route } from 'react-router-dom'
import qs from 'qs'

export default class Message extends Component {
    //模拟加载message组件时请求的数据
    state = {
        message: [
            { id: "001", name: "laowang", age: 18, say: "我爱你中国" },
            { id: "002", name: "laoyang", age: 28, say: "我爱你武汉" },
            { id: "003", name: "xiaocong", age: 38, say: "我爱你何磊" },
            { id: "004", name: "xiaofei", age: 48, say: "我爱你小飞" },
        ]
    }

    render() {
        const { message } = this.state;
        return (
            <div>
                <ul>
                    {
                        message.map(item => {
                            return (
                                <li key={item.id}>
                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/info/${item.name}/${item.age}/${item.say}`}>message{item.id}</Link> */}

                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/home/message/info?name=${item.name}&age=${item.age}&say=${item.say}`}>message{item.id}</Link> */}

                                    {/* Link组件to属性的新写法 */}
                                    {/* <Link to={{
                                        pathname: "/home/message/info",
                                        search: "?" + qs.stringify(item)
                                    }}>message{item.id}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    <Link to={{
                                        pathname: "/home/message/info",
                                        state: item
                                    }} >message{item.id}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

                {/* params传值方式 */}
                {/* <Route path="/home/message/info/:name/:age/:say" component={Info} /> */}

                {/* search传值方式 */}
                <Route path="/home/message/info" component={Info} />
            </div >

        )
    }
}
