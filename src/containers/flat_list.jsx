import React, { Component } from 'react';
import Flat from '../components/flat';

class FlatList extends Component {
  static defaultProps = {
    flats: [{
      "name": "Charm at the Steps of Montmartre",
      "description" : "Wonderfull appartment near Montmartre in the city of love!",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
      "price": 164,
      "priceCurrency": "€"
    }]
  }

  componentWillMount() {
    // TODO: dispatch an action to update the Redux State tree ()
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name}/>)}
      </div>
    );
  }
}

export default FlatList;
