import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                <h2></h2>
                <div>
                    <input type="text" ref={c => this.nameEle = c} />
                    <input type="text" ref={c => this.ageEle = c} />
                    <button onClick={this.addPerson}>添加一个人</button>
                </div>
            </div>
        )
    }
}
