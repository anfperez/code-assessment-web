import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, removeFromCart } from '../actions'
import { getTotal, getCartProducts, listProductNames } from '../reducers'
import Cart from '../components/Cart'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import ViewCart from '../components/ViewCart'

const OverlayContainer = ({products, productName, total, checkout, removeFromCart, names 
}) => (
  <div>
  <ViewCart />
    <h2> Your Cart</h2>
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
      names={ names }
      onCheckoutClicked={() => checkout(products)}
    />
  </div>
  );

  /* my original test overlay -- looks super basic
  return (
    <div>
      <Card style={cardBodyStyle}>
        <CardTitle>First Item in Cart</CardTitle>
        <CardText>First Item Description</CardText>
        <Button>Remove</Button><Button>+</Button><Button>-</Button>
      </Card>
      <Card style={cardBodyStyle}>
        <CardTitle>Second Item in Cart</CardTitle>
        <CardText>Second Item Description</CardText>
        <Button>Remove</Button><Button>+</Button><Button>-</Button>
      </Card>
      <Card style={cardBodyStyle}>
        <CardTitle>Third Item in Cart</CardTitle>
        <CardText>Third Item Description</CardText>
        <Button>Remove</Button><Button>+</Button><Button>-</Button>
      </Card>
    </div>
  ); */
//}

OverlayContainer.propTypes = {
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

const overlayContainerStyle = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
}
/*
class ViewCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCart: false }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({showCart: true})
    console.log("button clicked")
    
  }
  render() { 
    return (
      <div> 
      <button onClick={this.handleClick}> Show Cart 
        {this.state.showCart ? <Cart />: null }
        </button>

        </div>
        );
  }
}
  /*
  getInitialState() {
    return { showCart: false}
  onClick() {
    this.setState({ showCart: true})
  },
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Show Cart </button>
        { this.state.showCart ? <OverlayContainer />: null }
        </div>
      )
  }
}
*/
const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  names: listProductNames(state)
})


const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: product => dispatch(removeFromCart(product)),
  }
}

export default connect(
  mapStateToProps, { 
    checkout, 
    removeFromCart })(OverlayContainer);