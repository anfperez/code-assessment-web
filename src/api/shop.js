/**
 * Mocking client-server processing
 */


import React from 'react'

import _products from './products.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}

const fetchData = () => {
   return fetch('http://tech.work.co/shopping-cart/products.json')
    .then(results => results.json())
    }
/*
export default {

  getProducts: (cb, timeout) => setTimeout(() => cb(fetchData().then(response => response)), timeout || TIMEOUT),

  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
/* ---- this was my attempt at constructing a class which would fetch the api data and push it to any array ----



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
    console.log("json looks like" + JSON.stringify(products))
    
   this.setState({products: products});

    console.log(products) 
  });
  
  fetch('http://tech.work.co/shopping-cart/products.json')
      .then(results => {
        return results.json();
      }).then(data => {
    
   this.state.products = data;

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

---- I realized I didn't actually need to render anything, but I did some experimenting with rows and tables (probably should have used reactsrap if I was going to go ahead with this)
class ProductTable extends React.Component {
  render() {
    const rows = [];

    this.props.products.forEach((product) => {
      rows.push(
      	<tr>
	        <td>{product.productTitle}></td>
	        <td>{product.price.value}></td>
        </tr>
        );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
*/