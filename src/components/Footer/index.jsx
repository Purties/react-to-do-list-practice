import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    state = {
        checked: false
    }

    render() {
        const { todos, num, removeAllChecked } = this.props;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={this.props.allChecked} onChange={this.check} num={num} />
                </label>
                <span>
                    <span>已完成{num}</span> / 全部{todos.length}
                </span>
                <button className="btn btn-danger" onClick={removeAllChecked} >清除已完成任务</button>
            </div>
        )
    }

    check = () => {
        const { allChecked, clearAll, checkAll } = this.props
        if (allChecked) {
            clearAll();
        } else {
            checkAll();
        }
    }


}