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

class ProductApi extends React.Component {
  constructor() {
    super();
    this.state = {
      productJSON: [],
      elements: []
    };
  }
  componentDidMount() {
    fetch('http://tech.work.co/shopping-cart/products.json')
      .then(results => {
        return results.json();
      }).then(data => {

    let productArray = []
    for (let i =0; i < data.length; i++) {
      productArray.push(data[i])
      }
    console.log("jsonproduct=" + JSON.stringify(productArray))

    let productJSON = JSON.stringify(productArray)


    let elements = data.map((product) => {
      return (
        <div key={product.results}>
          <p>{product.productTitle}</p>
          <p>{product.price.value} {product.price.currency}</p>
        </div>
        )
    })
    
    this.setState({elements: elements});
   this.setState({productJSON: productJSON});
    console.log("state", this.state.elements[0]);
    this.setState({productJSON: productJSON});

    console.log(productJSON) // this is the exact thing I need to get!!!
  })
  // console.log(productJSON) is this the extent of where I can access productJSON? it won't log to the console here...
  }

  render() {
    return (
      <div>
        <div className="container2">
          {this.state.productJSON}
        </div>
      </div>
      )
    }
}

export default ProductApi