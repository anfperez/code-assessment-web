import shop from '../api/shop'
import * as types from '../constants/ActionTypes'
import React from 'react'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
/*
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
class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      elements: [],
    };
  }
  componentWillMount() {
    console.log("got here")
    fetch('http://tech.work.co/shopping-cart/products.json')
    .then(results => {
      return results.json();
        }).then(data => {
        console.log("got here too")
        console.log(data[0])

    // lets try making an array
        let productArray = []
        for (let i =0; i < data.length; i++) {
          productArray.push(data[i].productTitle)
    //  console.log(productTitle)

        }
    console.log(productArray)
        let product1 = data[0].productTitle
        console.log(product1)
        let elements = data.map((product) => {
            return (
            <div key={product.results}>
              <p>{product.id}</p>
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
