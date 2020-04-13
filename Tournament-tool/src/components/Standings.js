import React, { Component } from 'react'
import { connect } from 'react-redux'

class Standings extends Component {
    constructor(props) {
        super(props)
        this.tallyStanding = this.tallyStanding.bind(this)
    }

    tallyStanding(team) {
        let wins = 0
        let ties = 0
        let losses = 0

        this.props.games.forEach(game => {
            if (game.team1.id == team.id || game.team2.id == team.id) {
                if (game.team1.points === game.team2.points) {
                    ties++
                } else if (game.team1.id == team.id) {
                    if (game.team1.points > game.team2.points) {
                        wins++
                    } else {
                        losses++
                    }
                } else if (game.team2.id == team.id) {
                    if (game.team2.points > game.team1.points) {
                        wins++
                    } else {
                        losses++
                    }
                }
            }
        })

        return {team, wins, ties, losses}
    }

    compareStandings(standing1, standing2) {
        // compare wins
        if (standing1.wins > standing2.wins) {
            return -1
        } else if (standing2.wins > standing1.wins) {
            return 1
        // compare ties
        } else if (standing1.ties > standing2.ties) {
            return -1
        } else if (standing2.ties > standing1.ties) {
            return 1
        // compare losses
        } else if (standing1.losses < standing2.losses) {
            return -1
        } else if (standing2.losses < standing1.losses) {
            return 1
        // these teams have equal standing
        } else {
            return 0
        }
    }

    render() {
        const standings = this.props.teams.map(this.tallyStanding)
        standings.sort(this.compareStandings)

        console.log('standings:', standings)
        return <div id="standings">
            <h1>Standings</h1>
            <table border="1">
                <tbody>
                    <tr>
                        <th>Team</th>
                        <th>Wins</th>
                        <th>Ties</th>
                        <th>Losses</th>
                    </tr>
                    {standings.map((standing, index) => {
                        return <tr key={index}>
                            <td>{standing.team.name}</td>
                            <td>{standing.wins}</td>
                            <td>{standing.ties}</td>
                            <td>{standing.losses}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }
}

function mapStateToProps(state) {
    const games = state.topLevelGamesStoreSpace.games
    const teams = state.topLevelTeamsStoreSpace.teams
    return {
        games, teams
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Standings)