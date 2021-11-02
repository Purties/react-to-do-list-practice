import React, { Component } from 'react';

//引入组件
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

import './App.css'

class App extends Component {
    //初始化一个保存todo列表的状态
    state = {
        todos: [
            { id: Date.now(), content: "抽烟", done: true },
            { id: Date.now() + 1, content: "喝酒", done: true },
            { id: Date.now() + 2, content: "烫头", done: true }
        ],
        num: 0,
        allChecked: false
    }

    render() {
        const { todos, allChecked } = this.state;
        console.log(this.state);
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header todos={todos} addEle={this.addEle} />
                    <List todos={todos} changeDone={this.changeDone} deleteEle={this.deleteEle} />
                    <Footer todos={todos} allChecked={allChecked} changeAll={this.changeAll} removeAllChecked={this.removeAllChecked} />
                </div>
            </div>
        )
    }


    // 修改App的状态
    changeDone = (id, done) => {
        const { todos } = this.state;
        const newTodos = [...todos];

        newTodos.forEach(item => {
            if (item.id === id) {
                item.done = !done;
            }
        })
        this.setState({ todos: newTodos });
    }

    deleteEle = (id) => {
        const { todos } = this.state;
        // console.log('删除前', todos);
        // console.log('id是', id);
        /* newTodos.forEach((item, index) => {
            if (item.id === id) {
                newTodos.splice(index, 1);
            }
        }); */
        // 判断当前item.id和被删除的不一样，return true 放入新的数组中
        const newTodos = todos.filter(item => {
            return item.id !== id
        })
        // console.log('删除后', newTodos);
        this.setState({ todos: newTodos });
    }

    addEle = (ipt) => {
        const { todos } = this.state;
        const newTodos = [...todos];
        newTodos.unshift({ id: Date.now(), content: ipt, done: false });
        this.setState({ todos: newTodos, allChecked: false });
    }

    changeAll = (flag) => {
        console.log('flag', flag);
        const { todos } = this.state;
        const newTodos = todos.map(item => {
            return { ...item, done: flag };
        })
        this.setState({ todos: newTodos })
    }

    removeAllChecked = () => {
        const { todos } = this.state;
        if (todos.length === 0) return;
        console.log('删除全部');
        const newTodos = todos.filter(item => !item.done);
        this.setState({ todos: newTodos });
    }
}

export default App;