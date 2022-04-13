import React, { Component } from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './components/input.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    console.log(cardName);
    return (
      <div>
        <h1 className="h1">Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo
        />
      </div>
    );
  }
}

export default App;
