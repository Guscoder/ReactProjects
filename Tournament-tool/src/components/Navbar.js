import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return <p>
            <Link to="/">Home</Link>{' '}
            <Link to="/teams/create">Create Team</Link>{' '}
            <Link to="/games/create">Create Game</Link>
        </p>
    }
}
