import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTeam } from '../reducers/TeamsActions'

class TeamCreatePage extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(ev) {
        ev.preventDefault()

        const inputs = ev.target.getElementsByTagName('input')
        const teamName = inputs[0].value
        const member1 = inputs[1].value
        const member2 = inputs[2].value
        const member3 = inputs[3].value

        this.props.createTeam({
            name: teamName,
            members: [member1, member2, member3],
        })
    }

    render() {
        return <div>
            <h1>Create Team</h1>
            <form onSubmit={this.handleSubmit}>
                <p>Team Name: <input type="text" name="team-name" /></p>
                <p>Team Member: <input type="text" name="member1" /></p>
                <p>Team Member: <input type="text" name="member2" /></p>
                <p>Team Member: <input type="text" name="member3" /></p>
                <p>
                    <input type="submit" value="create"></input>
                </p>
            </form>
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
        createTeam: (team) => {
            dispatch(createTeam(team))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamCreatePage)