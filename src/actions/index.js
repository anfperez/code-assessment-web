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

//the following functions were made to match addtoCartUnsafe, but full functionality wasn't implemented yet
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

//I need to somehow tell this function to remove an item from the cart (properly)
export const removeFromCart = productId => (dispatch, getState) => {
   console.log('removeFromCart was clicked')
  if (getState().cart.quantityById[productId] > 0) {
    dispatch(removeFromCartUnsafe(productId))
  }
}

//not working yet
export const increaseQuantity = productId => (dispatch, getState) => {
  if(getState().cart.quantityById[productId] > 0 ) {
    console.log('increaseQuantity was clicked')
    dispatch(increaseQuantityUnsafe[productId])
  }
}

//not working yet
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
