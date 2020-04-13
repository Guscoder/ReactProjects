import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import './style.css'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'

import TeamDetailPage from './components/TeamDetailPage'
import TeamCreatePage from './components/TeamCreatePage'
import TeamEditPage from './components/TeamEditPage'

import GameDetailPage from './components/GameDetailPage'
import GameCreatePage from './components/GameCreatePage'

import teamsReducer from './reducers/TeamsReducer'
import gamesReducer from './reducers/GamesReducer'

const reducer = combineReducers({
    topLevelTeamsStoreSpace: teamsReducer,
    topLevelGamesStoreSpace: gamesReducer,
})

const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div id="app-container">
                <Navbar />
                <Route exact path="/" component={Homepage} />
                <Route exact path="/teams/create" component={TeamCreatePage} />
                <Route path="/teams/id/:id" component={TeamDetailPage} />
                <Route path="/teams/edit/:id" component={TeamEditPage} />
                <Route path="/games/id/:id" component={GameDetailPage} />
                <Route path="/games/create/" component={GameCreatePage} />
            </div>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'))