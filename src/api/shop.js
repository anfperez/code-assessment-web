/**
 * Mocking client-server processing
 */
import _products from './ProductApi.js'
import productArray from './ProductApi.js'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
