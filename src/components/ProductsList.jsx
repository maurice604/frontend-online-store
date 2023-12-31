import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cart } from '../dados/cart_arrayProductList';
import '../style/ProductsList.css';

class ProductsList extends Component {
  constructor() {
    super();
    this.handleAddCart = this.handleAddCart.bind(this);
  }

  handleAddCart({ target }) {
    const { cards, counterQuantity } = this.props;
    const product = cards.find((element) => element.id === target.id);
    cart.push({ ...product, quantity: 1 });
    counterQuantity();
  }

  render() {
    const { cards } = this.props;
    const N = 0;
    if (cards.length === N) {
      return (
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      );
    }

    return (
      <section className="body-list">
        {cards.map((product) => {
          const { title, thumbnail, price, id, shipping } = product;

          return (
            <div key={ id } data-testid="product" className="product-cart">
              <Link
                to={ `/details/${id}` }
                data-testid="product-detail-link"
                key={ id }
                className="product-link"
              >
                <section className="product-info">
                  <p className="product-title">{title}</p>
                  <img src={ thumbnail } alt="" className="product-img" />
                  <p>{`R$${price}`}</p>
                  {
                    (shipping.free_shipping)
                      ? <span data-testid="free-shipping">Frete Grátis</span>
                      : []
                  }
                </section>
              </Link>
              <button
                type="button"
                className="product-button"
                id={ id }
                data-testid="product-add-to-cart"
                onClick={ this.handleAddCart }
              >
                Adicionar ao carrinho
              </button>
            </div>
          );
        })}
      </section>
    );
  }
}

ProductsList.propTypes = {
  cards: PropTypes.string.isRequired,
  counterQuantity: PropTypes.func.isRequired,
};

export default ProductsList;
