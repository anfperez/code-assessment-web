import React from 'react'
import PropTypes from 'prop-types'

//this controls how the Products list on the page. {title} is "Products"
// {children} are the Products and their attributes
const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div>{children}</div>

  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
