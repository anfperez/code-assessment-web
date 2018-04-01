import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Button } from 'reactstrap'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions/index.js'

//this controls the way the products look when they get placed inside the cart
const Cart  = ({ products, title, total, removeFromCart, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
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
    <em>Your Shopping Cart is empty.</em>
  )

  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div> 
      <Button color="primary" onClick={removeFromCart}> Remove </Button>
      <p> Title: { Product.title} </p>
      <p>Total: &#36;{ total}</p>
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
  removeFromCart: PropTypes.func
}

export default Cart
