import React, {Component} from 'react'

export default class Home extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = 'tomato'
    }

    render() {
        return <div>
            <h1>My App</h1>
            <p>Welcome to my app.</p>
        </div>
    }
}
