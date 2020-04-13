import React, {Component} from 'react'

export default class About extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = 'goldenrod'
    }

    render() {
        return <div>
            <h1>About</h1>
            <p>
                This page is dedicated to showing everyone about adding
                routing to their React apps.
            </p>
        </div>
    }
}
