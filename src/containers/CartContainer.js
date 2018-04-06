import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, removeFromCart } from '../actions'
import cart, { getTotal, getCartProducts, listProductNames } from '../reducers'
import Cart from '../components/Cart'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

//finally got this to work! I needed to pass the product id in here
// I also totally redid this section so that it's not the entire ProductsList that returns, just a card
const CartContainer = ({ products, productName, total, checkout, removeFromCart, names, quantity
}) => (
  <div>
    <ProductsList>
      {products.map(product => (
        <Card>
          <CardBody>
          <p> Item: {product.title} </p>
          <p> Price: {product.price}</p>
      <Button color="secondary" onClick={ () => removeFromCart(product.id) }>Remove</Button>
          </CardBody>
          </Card>
      ))}
    </ProductsList>
    <Cart
      products={products}
      total={total}
      names={ names }
      quantity = { quantity }
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

const mapStateToProps = (state) => {
  console.log('state in mapStateToProps', state)
  const sumValues = obj => Object.values(obj).reduce((a, b) => {
   return a + b
 }, 0);

  return ({
  products: getCartProducts(state),
  total: getTotal(state),
  names: listProductNames(state),
  quantity: sumValues(state.cart.quantityById)
})
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: product => dispatch(removeFromCart(product)),
  }
}

export default connect(
  mapStateToProps, { checkout, removeFromCart })(CartContainer);
