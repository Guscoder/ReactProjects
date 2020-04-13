import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class GamesList extends Component {
    render() {
        return <div id="games-list">
            <h1>Games</h1>
            {this.props.games.map((game, index) => {
                return <div key={index} className="team">
                    <Link to={"/games/id/" + game.id}>
                        {game.team1.name} {' vs '} {game.team2.name}
                    </Link>
                </div>
            })}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        games: state.topLevelGamesStoreSpace.games
    }
}

function mapDispatchToProps() {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesList)