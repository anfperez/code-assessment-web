import React from 'react'

import _products from './products.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}

//simple API call that fetches the JSON data
const fetchData = () => {
   return fetch('http://tech.work.co/shopping-cart/products.json')
    .then(results => results.json())
    }