import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  render() {
    return (
      <section>
        <section>
          <Input dataTestid="name-input" type="text" htmlFor="nameCard" label="Nome" />
        </section>

        <section>
          <label htmlFor="descricao">
            Descricão
            <textarea
              data-testid="description-input"
              htmlFor="descricao"
              value=""
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
          />

          <Input
            dataTestid="attr2-input"
            type="number"
            htmlFor="attr2-input"
            label="Attr02"
          />

          <Input
            dataTestid="attr3-input"
            type="number"
            htmlFor="attr3-input"
            label="Attr03"
          />
        </section>

        <Input
          dataTestid="image-input"
          type="text"
          htmlFor="imageInput"
          label="Imagem"
        />

        <label htmlFor="rare-input">
          Raridade
          <select data-testid="rare-input" id="rare_input">
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
          />
          <Input
            dataTestid="save-button"
            type="button"
            htmlFor="save-button"
            label="Salvar"
          />
        </section>
      </section>
    );
  }
}

export default Form;
