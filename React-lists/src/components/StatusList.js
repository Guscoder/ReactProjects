import React, { Component } from 'react';
import Status from './Status';

export default class StatusList extends Component {
  render() {
    return (
      this.props.statuses.map((statusText, index) => {
        return <Status key={index}
                       index={index}
                       mytext={statusText} 
                       delete={this.props.delete} />
      })
    );
  }
}
