/* eslint-disable  */
import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input type="button" className={this.props.className} value={this.props.value} onClick={this.props.handleClick} />
    );
  }
}
