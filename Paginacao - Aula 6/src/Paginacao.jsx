import React, { Component } from 'react';

class Paginacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      páginaAtual: 1,
    };
  }

  irParaAnterior = () => {
    this.setState(prevState => ({
      páginaAtual: prevState.páginaAtual - 1
    }));
  };

  irParaProxima = () => {
    this.setState(prevState => ({
      páginaAtual: prevState.páginaAtual + 1
    }));
  };

  render() {
    const { páginaAtual } = this.state;
    const { totalPáginas } = this.props;

    return (
      <div>
        <button
          onClick={this.irParaAnterior}
          disabled={páginaAtual === 1}
        >
          Anterior
        </button>
        <span> Página {páginaAtual} </span>
        <button
          onClick={this.irParaProxima}
          disabled={páginaAtual === totalPáginas}
        >
          Próxima
        </button>
      </div>
    );
  }
}

export default Paginacao;