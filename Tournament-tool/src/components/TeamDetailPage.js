import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class TeamDetailPage extends Component {
    getTeam() {
        const id = this.props.match.params.id
        const team = this.props.teams.reduce((found, team) => {
            if (found) {
                return found
            }
            if (team.id == id) {
                return team
            }
            return false
        }, false)
        return team
    }

    render() {
        const team = this.getTeam()
        if (!team) {
            return <div>
                <h1>Team Detail Error</h1>
                <p>Team not found</p>
            </div>
        }
        return <div id="team-detail">
            <h1>{team.name}</h1>
            <p>
                <Link to={"/teams/edit/" + team.id}>edit</Link>
            </p>
            <ul>
                {team.members.map((member, index) => {
                    return <li key={index}>
                        {member}
                    </li>
                })}
            </ul>
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
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetailPage)