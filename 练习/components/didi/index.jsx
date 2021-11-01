import React, { Component } from 'react'

import './index.css'

export default class Didi extends Component {

    render() {
        const { car } = this.props;
        return (
            <div className='didi_outer'>
                <h2>弟弟的车是{car}</h2>
            </div>
        )
    }
}
