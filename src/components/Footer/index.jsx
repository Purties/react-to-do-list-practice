import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    state = {
        checked: false
    }

    render() {
        const { todos } = this.props;
        let num = todos.reduce((p, c) => c.done ? p + 1 : p, 0);
        return (
            <div className="todo-footer" >
                <label>
                    <input type="checkbox" checked={num === todos.length && num !== 0} onChange={this.check} />
                </label>
                <span>
                    <span>已完成{num}</span> / 全部{todos.length}
                </span>
                <button className="btn btn-danger" onClick={this.deleteAll} >清除已完成任务</button>
            </div>
        )
    }

    check = (e) => {
        const { changeAll } = this.props
        // console.log('触发了check');
        changeAll(e.target.checked);
    }

    deleteAll = () => {
        const { removeAllChecked } = this.props;
        removeAllChecked();
    }


}