import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

let cardStyle = {
  width: '100%'
}

//this controls *only* the items as they display under "Products"
const ProductItem = ({product, onAddToCartClicked, onRemoveFromCartClicked, onIncreaseQuanityClicked, onDecreaseQuantityClicked }) => (
  <div style={{ marginBottom: 20, marginLeft: 20}}>
  <Card style={cardStyle}>
    <CardBody>
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory} />
    <Button color="primary"
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>

      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </Button>
          <Button color="success"
            onClick={onIncreaseQuanityClicked}
            disabled={product.inventory > 0 ? '' : 'disabled'}> +
          </Button>
          <Button color="danger"
            onclick={onDecreaseQuantityClicked} 
            disabled={product.inventory > 0 ? '' : 'disabled'}> - 
            </Button>

      <Button onClick={onRemoveFromCartClicked}>Remove</Button>
    </CardBody>
    </Card>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onRemoveFromCartClicked: PropTypes.func.isRequired,
  onIncreaseQuanityClicked: PropTypes.func.isRequired,
  onDecreaseQuantityClicked: PropTypes.func.isRequired
}

export default ProductItem
