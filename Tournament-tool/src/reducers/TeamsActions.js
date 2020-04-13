export const CREATE_TEAM = 'CREATE_TEAM'
export const EDIT_TEAM = 'EDIT_TEAM'

export function createTeam(team) {
    team.id = Math.random()
    return {
        type: CREATE_TEAM,
        team
    }
}

export function editTeam(team) {
    return {
        type: EDIT_TEAM,
        team
    }
}

