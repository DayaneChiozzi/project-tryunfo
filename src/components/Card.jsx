import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
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
    } = this.props;
    return (

      <div className="cartao">
        <div>
          <h3 data-testid="name-card">{ cardName }</h3>
        </div>
        <div>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        </div>
        <div>
          <span data-testid="description-card">
            { cardDescription }
          </span>
        </div>
        <div>
          <div>
            <p data-testid="attr1-card">
              {cardAttr1}
            </p>
          </div>
          <div>
            <p data-testid="attr2-card">
              {cardAttr2}
            </p>
          </div>
          <div>
            <p data-testid="attr3-card">
              {cardAttr3}
            </p>
          </div>
        </div>
        <div>
          <p data-testid="rare-card">
            {cardRare}
          </p>
          {
            cardTrunfo
              ? <p data-testid="trunfo-card">Super Trunfo</p>
              : null
          }
        </div>
      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
