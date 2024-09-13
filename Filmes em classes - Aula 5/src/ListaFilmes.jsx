import React, { Component } from 'react';

class ListaFilmes extends Component {
  render() {
    const filmesArray = React.Children.toArray(this.props.children);

    return (
      <ol>
        {filmesArray.map((filme, index) => (
          <li key={index}>{filme}</li>
        ))}
      </ol>
    );
  }
}

export default ListaFilmes;