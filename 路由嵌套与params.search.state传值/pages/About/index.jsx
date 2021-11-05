import React, { Component } from 'react'

export default class About extends Component {
    render() {
        console.log('我是about路由内的',this.props);
        return (
            <h3>我是About的内容</h3>
        )
    }
}
