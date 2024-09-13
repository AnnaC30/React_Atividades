import React, { Component } from 'react';

class SeletorCores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      corSelecionada: null,
      painelCor: '#fff',
    };
  }

  selecionarCor = (cor) => {
    this.setState({
      corSelecionada: cor,
      painelCor: cor,
    });
  };

  render() {
    const cores = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A2'];

    return (
      <div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          {cores.map((cor, index) => (
            <div
              key={index}
              onClick={() => this.selecionarCor(cor)}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: cor,
                cursor: 'pointer',
                border: this.state.corSelecionada === cor ? '2px solid black' : 'none',
              }}
              title={this.state.corSelecionada === cor ? 'Selecionado' : ''}
            />
          ))}
        </div>
        <div
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: this.state.painelCor,
            border: '1px solid #000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000',
            fontWeight: 'bold',
          }}
        >
          {this.state.corSelecionada ? `Cor Selecionada: ${this.state.corSelecionada}` : 'Nenhuma cor selecionada'}
        </div>
      </div>
    );
  }
}

export default SeletorCores;