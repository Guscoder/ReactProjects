import React, { Component, Fragment } from 'react'
import TeamsList from './TeamsList'
import GamesList from './GamesList'
import Standings from './Standings'

export default class Homepage extends Component {
    render() {
        return <Fragment>
            <TeamsList />
            <GamesList />
            <Standings />
        </Fragment>
    }
}