import React, { Component } from 'react';

class HomePage extends Component {
  
  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</h1>
      </div>
    );
  }
}

export default HomePage;