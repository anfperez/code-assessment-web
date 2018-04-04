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

// (fetchData().then(response => response))
/*
const twostep = async () => {
  return await fetchData()
}
*/
/* suggested on stack overflow
const fetchData = () => fetch('http://tech.work.co/shopping-cart/products.json').then(results => results.json());
const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout || TIMEOUT));

//getProducts: timeout => delay(timeout).then(fetchData);

// where you call getProducts, need to do as follows
/*
  const fetchData = () => {
   return fetch('http://tech.work.co/shopping-cart/products.json')
    .then(results => results.json())
   // .then(products => products)
    }
*/


const fetchData = () => {
   return fetch('endpoint.json')
    .then(results => results.json())
    }

/*
fetchData().then((jsonResults)=> {
  // put the code surrounding getProducts here
  getProducts: (cb, timeout) => setTimeout(() => cb({products}), timeout || TIMEOUT)
  return {
    getProducts: jsonResults
  }
})
*/
lets products = await fetchData()
    return { getProducts: products }
    
export default {

  //getProducts: timeout => delay(timeout).then(fetchData),

 //getProducts: (cb, timeout) => setTimeout(() => cb({products}), timeout || TIMEOUT),

  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
