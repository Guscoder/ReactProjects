import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createGame } from '../reducers/GamesReducer'

import Standings from './Standings'

class GameCreatePage extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    getTeamById(id) {
        return this.props.teams.reduce((found, team) => {
            if (found) {
                return found
            }
            if (team.id == id) {
                return team
            }
            return false
        }, false)
    }

    handleSubmit(ev) {
        ev.preventDefault()

        const form = document.getElementById('create-game-form')
        const selects = form.getElementsByTagName('select')

        const teamId1 = selects[0].value
        const teamId2 = selects[1].value
        const team1 = this.getTeamById(teamId1)
        const team2 = this.getTeamById(teamId2)

        this.props.createGame(team1, team2)
    }

    render() {
        return <div>
            <h1>Create Game</h1>
            <form id="create-game-form" onSubmit={this.handleSubmit}>
                <p>
                    Team 1:
                    <select name="team1">
                        {this.props.teams.map((team, index) => {
                            return <option key={index} value={team.id}>
                                {team.name}
                            </option>
                        })}
                    </select>
                </p>
                <p>
                    Team 2:
                    <select name="team2">
                        {this.props.teams.map((team, index) => {
                            return <option key={index} value={team.id}>
                                {team.name}
                            </option>
                        })}
                    </select>
                </p>
                <p>
                    <input type="submit" value="Create Game" />
                </p>
            </form>

            <Standings />
        </div>
    }
}

function mapStateToProps(state) {
    const teams = state.topLevelTeamsStoreSpace.teams
    return {
        teams 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createGame: (team1, team2) => {
            dispatch(createGame(team1, team2))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCreatePage)