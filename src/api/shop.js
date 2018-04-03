/**
 * Mocking client-server processing
 */
 /*
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
  	/*
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


export default {
  getProducts: (cb, timeout) => setTimeout(() => cb({ products }), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
*/
import React from 'react'

const TIMEOUT = 100

let products;

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
  }

  render() {
  	//getProducts()
    return (
      <div>
        <div className="container2">
        	<ProductTable products={this.state.products} />
        </div>
      </div>
      )
    }
}


export default {
  getProducts: (cb, timeout) => setTimeout(() => cb({ products }), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
