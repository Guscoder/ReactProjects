import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './EmailRow.css'

export default class EmailRow extends Component {
    constructor(props) {
        super(props)
        this.toggleIsChecked = this.toggleIsChecked.bind(this)
    }

    getClassName() {
        let className = "email-row"
        let emailId = this.props.email.id
        if (this.props.isRead[emailId]) {
            className += " email-is-read"
        }
        if (this.props.isSelected) {
            className += " selected"
        }
        return className;
    }

    toggleIsChecked() {
        let emailId = this.props.email.id
        if (!this.props.isChecked[emailId]) {
            this.props.check(emailId);
        } else {
            this.props.uncheck(emailId);
        }
    }

    render() {
        return <div className={this.getClassName()}>
            <div className="email-toggle-is-read">
                <input type="checkbox" onChange={this.toggleIsChecked}
                       checked={this.props.isChecked[this.props.email.id]} />
            </div>
            <Link to={`/read/${this.props.email.id}`}>
                <div className="email-date">
                    {this.props.email.date}
                </div>
                <div className="email-from">
                    {this.props.email.email}
                </div>
                <div className="email-subject">
                    {this.props.email.subject}
                </div>
                <div className="email-body">
                    {this.props.email.body}
                </div>
            </Link>
        </div>
    }
}