import React, { Component } from 'react'
import EmailRow from './EmailRow'

export default class Inbox extends Component {
    render() {
        return <div id="inbox">
            <h1>Inbox</h1>
            <p>You have {this.props.emails.length} emails</p>
            <p>
                <button onClick={this.props.markCheckedRead}>mark read</button>
                <button onClick={this.props.markCheckedUnread}>mark unread</button>
                <button onClick={this.props.checkAll}>check all</button>
                <button onClick={this.props.uncheckAll}>uncheck all</button>
            </p>
            <div id="all-emails">
                {this.props.emails.map((email, index) => {
                    return <EmailRow key={index} email={email}
                                  isSelected={this.props.selectedIndex === index}
                                  isRead={this.props.isRead}
                                  markRead={this.props.markRead}
                                  markUnread={this.props.markUnread}
                                  isChecked={this.props.isChecked}
                                  check={this.props.check}
                                  uncheck={this.props.uncheck} />
                })}
            </div>
        </div>
    }
}