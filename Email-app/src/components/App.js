import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Nav from './Nav'
import Inbox from './Inbox'
import EmailRead from './EmailRead'

import EMAILS from '../MOCK_DATA.json'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emails: EMAILS,
            selectedIndex: 0,
            isRead: {},
            isChecked: {},
        }

        this.markRead = this.markRead.bind(this);
        this.markUnread = this.markUnread.bind(this);
        this.check = this.check.bind(this);
        this.uncheck = this.uncheck.bind(this);
        this.checkAll = this.checkAll.bind(this);
        this.uncheckAll = this.uncheckAll.bind(this);
        this.markCheckedRead = this.markCheckedRead.bind(this);
        this.markCheckedUnread = this.markCheckedUnread.bind(this);

        this.handleKey = this.handleKey.bind(this)
    }

    markRead(emailId) {
        let isRead = {...this.state.isRead};
        isRead[emailId] = true;
        this.setState({isRead})
    }

    markUnread(emailId) {
        let isRead = {...this.state.isRead};
        isRead[emailId] = false;
        this.setState({isRead})
    }

    check(emailId) {
        let isChecked = {...this.state.isChecked}
        isChecked[emailId] = true
        this.setState({isChecked})
    }

    uncheck(emailId) {
        let isChecked = {...this.state.isChecked}
        isChecked[emailId] = false
        this.setState({isChecked})
    }

    markCheckedRead() {
        let isRead = {...this.state.isRead};
        for (let key in this.state.isChecked) {
            if (this.state.isChecked[key]) {
                isRead[key] = true
            }
        }
        this.setState({isRead})
    }

    markCheckedUnread() {
        let isRead = {...this.state.isRead};
        for (let key in this.state.isChecked) {
            if (this.state.isChecked[key]) {
                isRead[key] = false
            }
        }
        this.setState({isRead})
    }

    checkAll() {
        let isChecked = {}
        for (let email of this.state.emails) {
            isChecked[email.id] = true
        }
        this.setState({isChecked})
    }

    uncheckAll() {
        this.setState({isChecked: {}})
    }

    handleKey(ev) {
        if (ev.key === 'j') {
            let index = this.state.selectedIndex + 1
            index = Math.min(index, this.state.emails.length - 1)
            this.setState({selectedIndex: index})
        } else if (ev.key === 'k') {
            let index = this.state.selectedIndex - 1
            index = Math.max(index, 0)
            this.setState({selectedIndex: index})
        } else if (ev.key === 'x') {
            let emailId = this.state.emails[this.state.selectedIndex].id;
            let isChecked = this.state.isChecked[emailId]
            if (isChecked) {
                this.uncheck(emailId)
            } else {
                this.check(emailId)
            }
        }
    }
    
    render() {
        return <div id="app-container" onKeyPress={this.handleKey} tabIndex="0">
            <BrowserRouter>
                <Fragment>
                    <Nav />
                    <Route exact path="/" component={() => (
                        <Inbox emails={this.state.emails}
                               selectedIndex={this.state.selectedIndex}
                               isRead={this.state.isRead}
                               isChecked={this.state.isChecked}
                               markRead={this.markRead}
                               markUnread={this.markUnread}
                               markCheckedRead={this.markCheckedRead}
                               markCheckedUnread={this.markCheckedUnread}
                               check={this.check}
                               uncheck={this.uncheck} 
                               checkAll={this.checkAll}
                               uncheckAll={this.uncheckAll} />
                    )} />
                    <Route exact path="/read/:id" component={() => (
                        <EmailRead emails={this.state.emails}
                                   markRead={this.markRead} />
                    )} />
                </Fragment>
            </BrowserRouter>
        </div>
    }
}