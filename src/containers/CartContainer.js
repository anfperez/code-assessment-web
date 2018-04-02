import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, removeFromCart } from '../actions'
import { getTotal, getCartProducts, listProductNames } from '../reducers'
import Cart from '../components/Cart'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

//still need to write function that will remove items from the cart
const CartContainer = ({ products, productName, total, checkout, removeFromCart, names
}) => (
  <div>
    <ProductsList>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onRemoveFromCartClicked={() => removeFromCart(product.id)}
        />
      ))}
    </ProductsList>
    <Cart
      products={products}
     // productName={products.title}
      total={total}
      names={names}
      onCheckoutClicked={() => checkout(products)}
    />
  </div>
);

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  names: listProductNames(state)
})

/*
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: product => dispatch(removeFromCart(product)),
  }
}
*/
export default connect(
  mapStateToProps, { checkout, removeFromCart })(CartContainer);
