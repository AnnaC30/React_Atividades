import React, { Component } from 'react';

class Container extends Component {
  render() {
    console.log('Children prop:', this.props.children);

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Container;