/**
 * Mocking client-server processing
 */
 //this is the right way~ commenting it out for now to test
/*
import _products from './products.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}

/*
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
/*
import React from 'react'

const TIMEOUT = 100

let products = []

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
import React from 'react'

const TIMEOUT = 100

//let products = []
/*
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

    let tempArray = []
    for (let i =0; i < data.length; i++) {
      tempArray.push(data[i])
      }
    
    this.setState({products: tempArray});

    console.log(products)
    products = {this.state.products}
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
*/
  const fetchData = () => {
   return fetch('http://tech.work.co/shopping-cart/products.json')
    .then(results => results.json())
   // .then(products => products)
    }
  /*
    fetch('http://tech.work.co/shopping-cart/products.json')
    .then(results => {
      return results.json();
    })
    */
  //}
    //this.setState({products: tempArray});

   // console.log(products)
   // products = {this.state.products}
  //})
    //}
//I know what I need to do! I need to get the value of Products from inside ProductApi and somehow save it as the value of products!!!!


export default {

  getProducts: (cb, timeout) => setTimeout(() => cb(fetchData().then(response => response)), timeout || TIMEOUT),

  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
}