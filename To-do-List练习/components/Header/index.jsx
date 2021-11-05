import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
    render() {
        return (
            <div className="todo-header" onKeyUp={this.add}>
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }

    add = (e) => {
        const ipt = e.target.value.trim();
        if (e.key !== 'Enter' || ipt === '' || ipt.length === 0) return;
        const { addEle } = this.props;
        addEle(ipt);
        e.target.value = '';
    }
}
