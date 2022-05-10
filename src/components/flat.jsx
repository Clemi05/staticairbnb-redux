import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const { name, description, imageUrl, price, priceCurrency } = this.props.flat;
    return (
      <div className="flat card">
        <img src={imageUrl} />
        <div className="card-infos">
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
          <h2 className="card-pricing">{price}{priceCurrency}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
