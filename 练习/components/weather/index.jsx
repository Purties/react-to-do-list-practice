import React, { Component } from 'react';

export default class Weather extends Component {
    state = {
        isHot: true
    }
    render() {
        return (
            <div>
                <h2>今天天气真{this.state.isHot ? '炎热' : '寒冷'}</h2>
                <button onClick={this.changeWea}>切换</button>
            </div>
        )
    }

    changeWea = () => {
        const { isHot } = this.state;
        this.setState({ isHot: !isHot });
    }
}
