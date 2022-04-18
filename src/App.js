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
      cardRare: 'normal',
      cards: [],
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onSaveButtonClick() {
    // event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const cardsProperty = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    };

    this.setState((prevState) => ({
      cards: [...prevState.cards, cardsProperty],
    }));

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
    });
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

    function verifyButton() {
      const numberAttr = 90;
      const totalNumber = 210;
      const numberSmaller = 0;

      if (!cardName || !cardDescription || !cardImage) {
        return true;
      }
      if (Number(cardAttr1) > numberAttr
      || Number(cardAttr2) > numberAttr
      || Number(cardAttr3) > numberAttr) {
        return true;
      }
      if (Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3)
      > totalNumber
      ) {
        return true;
      }
      if (Number(cardAttr1) < numberSmaller
      || Number(cardAttr2) < numberSmaller
      || Number(cardAttr3) < numberSmaller) {
        return true;
      }
    }
    return (
      <div>
        <h1 className="h1">Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ verifyButton() }
          onSaveButtonClick={ this.onSaveButtonClick }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }

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
