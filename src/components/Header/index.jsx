import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {
    render() {
        return (
            <div className="todo-header" onKeyDown={this.add}>
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" ref={c => this.val = c} />
            </div>
        )
    }

    add = (e) => {
        const ipt = this.val.value;
        if (e.key !== 'Enter' || ipt === '' || ipt.length === 0) return;
        const { addEle } = this.props;

        addEle(ipt);
        this.val.value = '';
    }
}
