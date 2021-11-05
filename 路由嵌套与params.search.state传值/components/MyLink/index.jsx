import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyLink extends Component {
    render() {
        console.log(this.props);
        const { to, children } = this.props
        return (
            <NavLink activeClassName='active' className='list-group-item' to={to} >{children}</NavLink>
        )
    }
}
