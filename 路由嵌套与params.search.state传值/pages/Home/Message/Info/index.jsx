import React, { Component } from 'react'
import qs from 'qs'

export default class Info extends Component {
    render() {
        console.log("info.props", this.props)

        // 接受params参数
        // params是在props.match.params内传值的
        // const { age, name, say } = this.props.match.params;

        // 接受search参数
        // search是在props.location.search内传递的
        // 但是search得到的是一个字符串，需要自己拆分程一个对象
        // const { search } = this.props.location;
        // console.log('search', search);
        // const {age, name, say} = qs.parse(search.slice(1));

        // 接受state参数
        console.log("info.props", this.props.location);
        const { age, name, say } = this.props.location.state;
        return (
            <ul>
                <li>姓名：{name}</li>
                <li>年龄：{age}</li>
                <li>说：{say}</li>
            </ul>
        )
    }
}
