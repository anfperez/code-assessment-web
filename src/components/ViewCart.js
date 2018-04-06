import React from 'react';
import Cart from './Cart';

//I created this class as a Button that, when clicked, would generate the CartOverlay which would contain the cart. 
// I need to figure out why "products" isn't being passed correctly to Cart.js

export default class ViewCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCart: false }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({showCart: true})
    console.log("button clicked")
    
  }
  render() { 
    return (
      <div> 
      <button onClick={this.handleClick}> Show Cart 
        {this.state.showCart ? <Cart />: null }
        </button>

        </div>
        );
  }
}