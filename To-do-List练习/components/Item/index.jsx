import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    state = {
        showEle: false
    }

    render() {
        //拿到List组件传递的当前信息
        const { content, done, deleteEle } = this.props
        return (
            // <li onMouseEnter={this.show} onMouseLeave={this.noShow} style={{ background: this.state.showEle ? '#ccc' : '#fff' }}>
            // 高阶函数
            <li onMouseEnter={this.mouseHandler(true)} onMouseLeave={this.mouseHandler(false)} style={{ background: this.state.showEle ? '#ccc' : '#fff' }}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.click} />
                    <span>{content}</span>
                </label>
                <button className="btn btn-danger" style={{ display: this.state.showEle ? 'block' : 'none' }} onClick={this.deleteCur}>删除</button>
            </li>
        )
    }

    click = () => {
        const { id, done, changeDone } = this.props;
        changeDone(id, done);
    }

    // show = () => {
    //     this.setState({ showEle: true })
    // }

    // noShow = () => {
    //     this.setState({ showEle: false })
    // }

    // 鼠标移入+移出
    mouseHandler = (bool) => {
        return () => {
            this.setState({ showEle: bool })
        }
    }

    deleteCur = () => {
        const { id, deleteEle } = this.props;
        deleteEle(id);
    }


}
