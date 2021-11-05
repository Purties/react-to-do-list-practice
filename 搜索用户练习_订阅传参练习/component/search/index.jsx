import React, { Component } from 'react'
import axios from 'axios'
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
        // 获取用户想请求的内容
        const { value } = this.input;
        axios.get("https://api.github.com/search/users", {
            params: {
                q: value
            }
        }).then(res => {
            // 获取到数据后用publish传给subsribe
            const userInfo = res.data.items;
            Pubsub.publish('updateList', { user: userInfo })
        }).catch(reason => {
            // 没有获取到数据
            Pubsub.publish('updateList', { user: [] })
        })
    }
}
