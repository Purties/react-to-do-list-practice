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

    componentDidMount() {
        this.checkNum();
    }

    render() {
        const { todos, num, allChecked } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header todos={todos} addEle={this.addEle} />
                    <List todos={todos} changeDone={this.changeDone} deleteEle={this.deleteEle} />
                    <Footer todos={todos} allChecked={allChecked} num={num} clearAll={this.clearAll} checkAll={this.checkAll} removeAllChecked={this.removeAllChecked} />
                </div>
            </div>
        )
    }

    checkNum = () => {
        const { todos } = this.state;
        let num = 0;
        todos.forEach(item => {
            if (item.done === true) {
                num++;
            }
        })
        if (num === todos.length && num !== 0) {
            return this.setState({
                allChecked: true,
                num: num
            })
        }
        return this.setState({
            allChecked: false,
            num: num
        })
    }

    // 修改App的状态
    changeDone = (id, done) => {
        const { todos } = this.state;
        todos.forEach(item => {
            if (item.id === id) {
                item.done = !done;
            }
        })
        this.setState({ todos: todos });
        this.checkNum();
    }

    deleteEle = (id) => {
        const { todos } = this.state;
        todos.forEach((item, index) => {
            if (item.id === id) {
                // console.log('我是delete函数内的todos', todos);
                // console.log('正在删除', index, '号');
                todos.splice(index, 1);
                // console.log('我是delete函数内删除后的todos', todos);
            }
        });
        this.setState({ todos: todos });
        this.checkNum();
    }

    addEle = (ipt) => {
        const { todos } = this.state;
        todos.unshift({ id: Date.now(), content: ipt, done: false });
        this.setState({ todos: todos, allChecked: false });

    }

    clearAll = () => {
        const { todos } = this.state;
        todos.forEach(item => {
            item.done = false;
        });
        this.setState({ todos: todos });
        this.checkNum();
    }

    checkAll = () => {
        const { todos } = this.state;
        todos.forEach(item => {
            item.done = true;
        });
        this.setState({ todos: todos });
        this.checkNum();
    }

    removeAllChecked = () => {
        const { todos } = this.state;
        if (todos.length === 0) return;
        this.deleteEle(todos[0].id);
        this.removeAllChecked();
    }
}

export default App;