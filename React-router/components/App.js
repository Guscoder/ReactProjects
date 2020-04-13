import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Contact from './Contact'
import About from './About'

import '../style.css'

export default class App extends Component {
    render() {
        return <div id="app-container">
            <BrowserRouter>
                <div>
                    <Nav />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </BrowserRouter>
        </div>
    }
}