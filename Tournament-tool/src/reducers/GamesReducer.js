export const CREATE_GAME = 'CREATE_GAME'
export const ADD_POINT = 'ADD_POINT'
export const SUBTRACT_POINT = 'SUBTRACT_POINT'

export function createGame(team1, team2) {
    let id = Math.random()
    team1.points = 0
    team2.points = 0
    let game = {
        id, team1, team2
    }
    return {
        type: CREATE_GAME,
        game
    }
}

export function addPoint(game, team) {
    game = {
        id: game.id,
        team1: {...game.team1},
        team2: {...game.team2},
    }

    team = game.team1.id == team.id
        ? game.team1
        : game.team2
    team.points++

    return {
        type: ADD_POINT,
        game
    }
}

export function subtractPoint(game, team) {
    game = {
        id: game.id,
        team1: {...game.team1},
        team2: {...game.team2},
    }

    team = game.team1.id == team.id
        ? game.team1
        : game.team2
    team.points--

    if (team.points < 0) {
        team.points = 0
    }

    return {
        type: SUBTRACT_POINT,
        game
    }
}

function initialState() {
    return {
        games: [
            {
                id: 74345,
                team1:  {
                    id: 2345,
                    points: 4,
                    name: "Purple Parrots",
                },
                team2: {
                    id: 928345,
                    points: 2,
                    name: "Blue Bears",
                }
            }
        ]
    }
}

// keep track of games teams are playing against each other
const gamesReducer = (state, action) => {
    if (state === undefined) {
        return initialState()
    }

    console.log('game reducer:', action)
    switch(action.type) {
        case ADD_POINT:
        case SUBTRACT_POINT: {
            let games = [...state.games]
            games = games.map(game => {
                // replace only the game that matches
                // with the given updated version of the game
                if (game.id == action.game.id) {
                    return action.game
                } else {
                    return game
                }
            })
            return { games }
        }
        case CREATE_GAME: {
            const games = [...state.games, action.game]
            return {games}
        }
        default: {
            return state
        }
    }
}

export default gamesReducer