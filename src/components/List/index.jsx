import { getByTestId } from '@testing-library/dom';
import React, { Component } from 'react'

import Item from '../Item';

import './index.css'

export default class List extends Component {
    render() {
        //拿到父组件传递的任务列表 todos
        const { todos } = this.props;
        const { changeDone } = this.props;
        const { deleteEle } = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map((todo, index) => {
                        return <Item key={todo.id} {...todo} changeDone={changeDone} deleteEle={deleteEle} />
                    })
                }
            </ul>
        )
    }
}
