// import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import '../style/SearchBar.css';


/* class SearchBar extends Component {
  render() { */
export const SearchBar = (props) => {
  const { handleStateChange, fetchCards } = props;
  return (
    <section>
      <input
        name="query"
        onChange={ handleStateChange }
        data-testid="query-input"
        className="query"
      />
      <button
        type="button"
        onClick={ fetchCards }
        data-testid="query-button"
        className="SearchButton"
      >
        Search
      </button>
    </section>
  );
};
// }

SearchBar.propTypes = {
  handleStateChange: PropTypes.func,
  fetchCards: PropTypes.func,
}.isRequired;
export default SearchBar;
