import React from 'react';

//this is how I feel the product api endpoint should be called
//need to figure out how to get it to work

/*
class ProductApi {
  static getAllProducts() {
    return
    fetch('http://tech.work.co/shopping-cart/products.json').then(response =>
    {
      return response.json();
    }).catch(error => {
      return error;
    })
  }
}
*/

const productArray = []

class ProductApi extends React.Component {
  constructor() {
    super();
    this.state = {
      elements: [],
    };
  }
  componentWillMount() {
    fetch('http://tech.work.co/shopping-cart/products.json')
    .then(results => {
      return results.json();
        }).then(data => {

    for (let i =0; i < data.length; i++) {
      productArray.push(data[0])
      console.log(productArray)
    }
        let elements = data.map((product) => {
            return (
            <div key={product.results}>
              <p>{product.productTitle} </p>
              <p>{product.price.value} {product.price.currency}</p>
              <p>{product.inventory}</p>
            </div>
        )
    })
    this.setState({elements: elements});
    console.log("state", this.state.elements);
})
}



render() {
  return (
    <div>
    	<div className="container2">
    		{this.state.elements}
  		</div>
  	</div>
		)
	}
}

const products = productArray.toString();

export default ProductApi; products