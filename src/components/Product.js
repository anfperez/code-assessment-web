import React from 'react'
import PropTypes from 'prop-types'

//this is what was originally here
const Product = ({ price, inventory, title }) => (
  <div>
    {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
  </div>
)

//const ProductTitle = ({ Product.title});
/*

/* wrote the below as an extra component, I don't think I need it

class GetData extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Item />
      </div>
    )
  }
}

class Product extends React.Component {
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
*/

Product.propTypes = {
  price: PropTypes.price,
  inventory: PropTypes.inventory,
  title: PropTypes.productTitle
}

export default Product
