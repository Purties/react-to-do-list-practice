import React, { Component } from 'react'

import Pubsub from 'pubsub-js'

export default class Search extends Component {
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={c => this.input = c} />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }

    search = () => {
        Pubsub.publish('updateList', console.log('search中发布的'));
        /* // 获取用户想请求的内容
        const { value } = this.input;
        if (value.length === 0 || value === undefined || value === '') return console.log('输入为空');
        const { getUser } = this.props;

        // 发送axios请求
        axios.get("https://api.github.com/search/users", {
            params: {
                q: value
            }
        }).then(res => {
            console.log(res);
            const userInfo = res.data.items;
            getUser(userInfo)
        }).catch(reason => {
            console.log(reason);
        })
 */
    }
}
