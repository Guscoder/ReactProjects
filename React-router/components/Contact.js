import React, {Component} from 'react'

export default class Contact extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = 'papayawhip'
    }

    render() {
        return <div>
            <h1>Contact</h1>
            <p>If you need to contact us email admin@mysite.com.</p>
        </div>
    }
}
