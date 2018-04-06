import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'

export default combineReducers({
  cart,
  products
})

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)
//I ended up not needing this function. I ended up just having to use getAddedIds
//const getAddedNames = (state, id) => fromCart.getAddedNames(state.cart, id)

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2)

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))

//this function is supposed to return the names of the products added to the cart
export const listProductNames = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    //names: (getAddedNames(state, id)[1].value),
    names: (getAddedIds(state, id))
  }))