import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <section>
          <Input
            dataTestid="name-input"
            type="text"
            htmlFor="name-input"
            label="Nome"
            value={ cardName }
            onChange={ onInputChange }
          />
        </section>

        <section>
          <label htmlFor="descricao">
            Descricão
            <textarea
              data-testid="description-input"
              htmlFor="descricao"
              value={ cardDescription }
              onChange={ onInputChange }
              rows="4"
              cols="50"
            />
          </label>
        </section>

        <section>
          <Input
            dataTestid="attr1-input"
            type="number"
            htmlFor="attr1-input"
            label="Attr01"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />

          <Input
            dataTestid="attr2-input"
            type="number"
            htmlFor="attr2-input"
            label="Attr02"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />

          <Input
            dataTestid="attr3-input"
            type="number"
            htmlFor="attr3-input"
            label="Attr03"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </section>

        <Input
          dataTestid="image-input"
          type="text"
          htmlFor="imageInput"
          label="Imagem"
          value={ cardImage }
          onChange={ onInputChange }
        />

        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            id="rare_input"
            value={ cardRare }
            onChange={ onInputChange }
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
            label="Super Trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          <Input
            dataTestid="save-button"
            type="button"
            htmlFor="save-button"
            label="Salvar"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
