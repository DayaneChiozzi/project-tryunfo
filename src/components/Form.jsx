import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      cardName: '',
    };
  }

  onInputChange(event) {
    // console.log(event.target.value);

    this.setState({
      cardName: event.target.value,
    });
  }

  render() {
    console.log(this.state.inputName);
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (

      <form className="form-container">
        <div className="container-name-description">
          <div>
            <Input
              className="input-name"
              dataTestid="name-input"
              type="text"
              htmlFor="name-input"
              label="Nome"
              value={ cardName }
              onChange={ this.onInputChange }
            />
          </div>
          <div>
            <label htmlFor="descricao">
              Descricão
              <br />
              <textarea
                className="input-description"
                data-testid="description-input"
                htmlFor="descricao"
                value={ cardDescription }
                onChange={ onInputChange }
                rows="4"
                cols="50"
              />
            </label>
          </div>
        </div>

        <div className="input-generic-attr">
          <Input
            className="input-attr"
            dataTestid="attr1-input"
            type="number"
            htmlFor="attr1-input"
            label="Attr01"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
          <Input
            className="input-attr"
            dataTestid="attr2-input"
            type="number"
            htmlFor="attr2-input"
            label="Attr02"
            value={ cardAttr2 }
            onChange={ this.onInputChange }
          />
          <Input
            className="input-attr"
            dataTestid="attr3-input"
            type="number"
            htmlFor="attr3-input"
            label="Attr03"
            value={ cardAttr3 }
            onChange={ this.onInputChange }
          />
        </div>
        <div className="container-input-image">
          <Input
            className="input-image"
            dataTestid="image-input"
            type="text"
            htmlFor="imageInput"
            label="Imagem"
            value={ cardImage }
            onChange={ this.onInputChange }
          />
        </div>

        <label htmlFor="rare-input">
          Raridade
          <br />
          <select
            className="input-rare"
            data-testid="rare-input"
            id="rare_input"
            value={ cardRare }
            onChange={ this.onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <section>
          <Input
            dataTestid="trunfo-input"
            type="checkbox"
            htmlFor="trunfo-input"
            label=""
            checked={ cardTrunfo }
            onChange={ this.onInputChange }
          />
          Super Trunfo
          <br />
          <br />
          <button
            type="button"
            className="btn"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </section>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
