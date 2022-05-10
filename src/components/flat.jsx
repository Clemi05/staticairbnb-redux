import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const src = "https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg";
    const { name, description, price, priceCurrency } = this.props.flat;
    return (
      <div class="card">
        <img src={src} />
        <div class="card-infos">
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <h2 class="card-pricing">{price} {priceCurrency}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
