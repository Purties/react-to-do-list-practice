import React, { Component } from 'react'

import './index.css'

export default class Gege extends Component {

    render() {
        const { car } = this.props;
        return (
            <div className='gege_outer'>
                <h2>哥哥的车是{car}</h2>
                <button onClick={this.changeCar}> 换一下撒 </button>
            </div>
        )
    }

    changeCar = () => {
        this.props.changeCar('abbbbbbbb');
    }
}
