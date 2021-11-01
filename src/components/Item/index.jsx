import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    state = {
        showEle: 'none'
    }

    render() {
        //拿到List组件传递的当前信息
        const { content, done, deleteEle } = this.props
        return (
            <li onMouseMove={this.show} onMouseOut={this.noShow}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.click} />
                    <span>{content}</span>
                </label>
                <button className="btn btn-danger" style={{ display: this.state.showEle }} onClick={this.delete}>删除</button>
            </li>
        )
    }

    click = () => {
        const { id, done, changeDone } = this.props;
        changeDone(id, done);
    }

    show = () => {
        this.setState({ showEle: 'block' })
    }

    noShow = () => {
        this.setState({ showEle: 'none' })
    }

    delete = () => {
        const { id, deleteEle } = this.props;
        deleteEle(id);
    }


}
