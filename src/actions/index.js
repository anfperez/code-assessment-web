import shop from '../api/shop'
import * as types from '../constants/ActionTypes'
import React from 'react'

shop.getProducts(100) // 100ms timeout
.then(data => {
    // here, data is the JSON you are looking for
});

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

const removeFromCartUnsafe = productId => ({
  type: types.REMOVE_FROM_CART,
  productId
})

const increaseQuantityUnsafe = productId => ({
  type: types.INCREASE_QUANTITY,
  productId
})

const decreaseQuantityUnsafe = productId => ({
  type: types.DECREASE_QUANTITY,
  productId
})

//it seems that I should probably use this as the basis for "Remove from Cart"
export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
  console.log('addToCart was clicked')
    dispatch(addToCartUnsafe(productId))
  }
}

//I need to somehow tell this function to remove an item from the cart
export const removeFromCart = productId => (dispatch, getState) => {
   console.log('removeFromCart was clicked')
  if (getState().cart.quantityById[productId] > 0) {
    dispatch(removeFromCartUnsafe(productId))
  }
}

export const increaseQuantity = productId => (dispatch, getState) => {
  if(getState().cart.quantityById[productId] > 0 ) {
    console.log('increaseQuantity was clicked')
    dispatch(increaseQuantityUnsafe[productId])
  }
}

export const decreaseQuantity = productId => (dispatch, getState) => {
  if(getState().cart.quantityById[productId] > 0 ) {
    console.log('decreaseQuantity was clicked')
    dispatch(decreaseQuantityUnsafe[productId])
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
