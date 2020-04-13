import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class EmailRead extends Component {
    componentWillUnmount() {
        const emailId = this.props.match.params.id
        this.props.markRead(emailId)
    }

    render() {
        const emailId = this.props.match.params.id
        const email = this.props.emails.filter(email => {
            return email.id === emailId
        })[0]
        if (!email) {
            return <div>
                <h1>Error finding Email</h1>
                <p>
                    Invalid email id. {' '}
                    <Link to="/">
                        Go back to inbox.
                    </Link>
                </p>
            </div>
        }
        return <div>
            <h1>{email.subject}</h1>
            <h3>{email.date} {' '} {email.email}</h3>
            {email.body.split('\n\n').map((paragraphText, index) => {
                return <p key={index}>{paragraphText}</p>
            })}
        </div>
    }
}

export default withRouter(EmailRead)