import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  INCREASE_QUANTITY, 
  DECREASE_QUANTITY 
} from '../constants/ActionTypes'

//so, here's how I *think* REMOVE_FROM_CART should work...
const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        inventory: state.inventory + 1
      }
    case INCREASE_QUANTITY:
      console.log('quantity increased')
      return {
        ...state,
        inventory: state.inventory + 1
      }
    case DECREASE_QUANTITY:
      console.log('quantity decreased')
      return {
        ...state,
        inventory: state.inventory - 1
      }
    default:
      return state
  }
}

//I understand a bit more of how reduce works. I need to investigate further but I need to figure out
//1) if products is a JSON array
//2) what reduce was returning out of products
const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleIds = state =>
  state.visibleIds.map(id => getProduct(state, id))
