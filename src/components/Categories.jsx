import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import nav from '../style/Categories.css';


class Categories extends Component {
  constructor() {
    super();
    this.state = {
      name: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  // fetchProducts = async () => {
  async fetchProducts() {
    const getCategories = await api.getCategories()
      .then((resolve) => resolve);
    this.setState({
      name: getCategories,
    });
  }

  handleClick({ target }) {
    const { handleCategoryClick } = this.props;

    handleCategoryClick(target.id);
  }

  render() {
    const { name } = this.state;

    return (
      <nav>
        <ul className="categoryList">
          {name.map((names) => (
            <label htmlFor={ names.id } key={ names.id }>
              <input
                type="radio"
                id={ names.id }
                name="categoryID"
                data-testid="category"
                onClick={ this.handleClick }
              />
              {names.name}
            </label>
          ))}
        </ul>
      </nav>
    );
  }
}

Categories.propTypes = {
  handleCategoryClick: PropTypes.func.isRequired,
};

export default Categories;
