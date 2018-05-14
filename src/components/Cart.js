import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Button } from 'reactstrap'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/index.js'
// import logo from '.../assets/shoppingcart.ico'

const shoppingCartmessage = {
  fontSize: '12px'
}

//this controls the way the products look when they get placed inside the cart
const Cart  = ({ products, total, names, removeFromCart, onCheckoutClicked, onRemoveFromCartClicked, quantity, ...props,  }) => {
  console.log("products", products)
  console.log("names", names)
  console.log("quantity", quantity)

  const hasProducts = products.length > 0
  console.log("props", props)
  console.log(hasProducts)
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.productTitle}
        price={product.price}
        quantity={product.inventory}
        key={product.id}
      />
    )
  ) : (
  <div>
    <p style={shoppingCartmessage}><em>Your Shopping Cart is empty.</em></p>
    </div>
  )

  return (
    <div>
      <div>{nodes}</div> 
      <p> Total Items in Cart: {quantity} </p>
      <p>Total: ${ total }</p>
      <Button color="secondary" onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </Button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  removeFromCart: PropTypes.func,
  names: PropTypes.array
}

export default Cart
