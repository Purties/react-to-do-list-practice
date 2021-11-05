import React, { Component } from 'react'
//在组件中一定要引入store，store是redux的核心，只有引入了，才能执行store，开启redux
import store from '../../redux/store'
//引入action
// import { createIncrementAction, createDecrementAction,createWaitDecrementAction } from '../../redux/actions/count_action'


export default class Count extends Component {
    render() {
        return (
            <div>
                <h2>当前的值是{store.getState()}</h2>
                <div>
                    <select ref={c => this.selectEle = c}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.incrementOdd}>如果奇数再加</button>
                    <button onClick={this.incrementWait}>延迟1s再加</button>
                </div >
            </div >
        )
    }
    increment = () => {
        const { value } = this.selectEle;
        //向store发送要做的事情和数据
        store.dispatch({ type: 'increment', data: +value })
        // store.dispatch(createIncrementAction(+value))
    }
    decrement = () => {
        const { value } = this.selectEle;
        //向store发送要做的事情和数据
        store.dispatch({ type: 'decrement', data: +value })
        // store.dispatch(createDecrementAction(+value))
    }
    incrementOdd = () => {
        const { value } = this.selectEle;
        if (store.getState() % 2 === 0) return alert("对不起 偶数不加");
        store.dispatch({ type: 'increment', data: +value })
        //向store发送要做的事情和数据
        // store.dispatch(createIncrementAction(+value))

    }
    incrementWait = () => {
        const { value } = this.selectEle;
        /* setTimeout(() => {
            //向store发送要做的事情和数据
            store.dispatch(createIncrementAction(+value))
        }, 1000) */
        //向store发送要做的事情和数据
        // store.dispatch(createWaitDecrementAction(+value))

    }
}
