/**
 * Mocking client-server processing
 */
import React from 'react'

const TIMEOUT = 100

let products;
class ProductApi extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.getProducts = this.getProducts.bind(this)
  }
  componentDidMount() {
    fetch('http://tech.work.co/shopping-cart/products.json')
      .then(results => {
        return results.json();
      }).then(data => {

    let products = []
    for (let i =0; i < data.length; i++) {
      products.push(data[i])
      }
    console.log("jsonproduct=" + JSON.stringify(products))


    
   this.setState({products: products});

    console.log(products) 
  });
  }

  render() {
  	//getProducts()
    return (
      <div>
        <div className="container2">
          {this.state.products}
        </div>
      </div>
      )
    }
}


export default {
  getProducts: (cb, timeout) => setTimeout(() => cb({ products }), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
