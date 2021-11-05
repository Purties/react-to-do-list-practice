import React, { Component } from 'react';
import Pubsub from 'pubsub-js';
import './index.css';

export default class List extends Component {
    state = {
        user: [],
        isFirst: true, //是否是第一次请求
        isLoading: false, //是否在加载中
        errMsg: ''
    }
    render() {
        const { user } = this.props;

        return (
            <div className="row">
                {
                    /* user.map(item => {
                        const { avatar_url, id, html_url, login } = user
                        return (
                            <div key={id} className="card" >
                                <a rel="noreferrer" href={html_url} target="_blank">
                                    <img src={avatar_url} style={{ width: "100px" }} alt="avatar" />
                                </a>
                                <p className="card-text">{login}</p>
                            </div>
                        )
                    }) */
                }
            </div>
        )
    }

    componentDidMount() {
        // subsribe回调函数接受两个参数，第一个是订阅的名字
        // 第二个是发布的信息
        Pubsub.subscribe("updateList", (_, data) => {
            // 数据传过来了
            console.log("数据传过来了");
            console.log('订阅', data);
            this.setState(data);
        })
    }
}
