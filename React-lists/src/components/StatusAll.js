import React, { Component } from 'react';
import StatusList from './StatusList';

import './Status.css';

export default class StatusAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newStatusText: '',
      statuses: [
        "Wow, I had the most delicious lunch today.",
        "There was no traffic today!",
        "Finally finished that big project.",
        "Hapy to be learning ReactJS"
      ]
    } 

    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  delete(index) {
    let copy = [...this.state.statuses];
    copy.splice(index, 1)
    this.setState({statuses: copy});
  }

  handleChange(ev) {
      this.setState({newStatusText: ev.target.value});
  }

  handleSubmit(ev) {
    // prevent the form from taking us to a new page (or refreshing)
    // we will simply stay on the page
    ev.preventDefault();
    let newStatuses = [this.state.newStatusText, ...this.state.statuses]
    this.setState({
        newStatusText: '',
        statuses: newStatuses
    })
  }

  render() {
    return (
        <div>
            <div className="status">
                <h1>Enter New Status</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.newStatusText}
                            onChange={this.handleChange} placeholder="What's on your mind?"/>
                    <button type="submit">Add Status</button>
                </form>
            </div>
            <div className="status">
                <h1>All Statuses</h1>
                <StatusList statuses={this.state.statuses} 
                            delete={this.delete} />
            </div>
        </div>
    );
  }
}
