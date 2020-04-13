import React, { Component } from 'react';

export default class Status extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0
    }

    this.like = this.like.bind(this);
    this.delete = this.delete.bind(this);
  }

  like() {
    this.setState({
      likes: this.state.likes + 1
    });
  }

  delete() {
    this.props.delete(this.props.index);
  }

  render() {
    return (
      <div className="status">
        <div className="close" onClick={this.delete}>X</div>
        <p>{this.props.mytext}</p>
        <p>
          <button onClick={this.like}>
            {this.state.likes} Likes
          </button>
        </p>
      </div>
    );
  }
}
