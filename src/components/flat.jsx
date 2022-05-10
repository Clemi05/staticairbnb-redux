import React, { Component } from 'react';

class Flat extends Component {
  render() {
    return (
      <div class="card">
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg" />
        <div class="card-infos">
          <div>
            <h2>Title here</h2>
            <p>Short description here!</p>
          </div>
          <h2 class="card-pricing">£99.99</h2>
          <img src="https://kitt.lewagon.com/placeholder/users/krokrob" class="card-user avatar-bordered" />
        </div>
      </div>

    );
  }
}

export default Flat;
