import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { Container, Row, Col } from 'reactstrap'
import OverlayContainer from './OverlayContainer'
// import ViewCart from './OverlayContainer'

const appStyle = {
    backgroundColor: 'WhiteSmoke',
    float: 'none'
}
//doing some column tests
const App = () => (
  <div style={appStyle} >
    <Container>
        <Row>
            <Col>
                <h2>Acme Store</h2>
            </Col>
            <Col> 
                <CartContainer />
            </Col>
        </Row>
    </Container>
    <hr/>
    <ProductsContainer />
    <hr/>
    <Container>
    	<Row>
    	<Col>
    </Col>
    </Row>
    </Container>
  </div>
)

export default App

/* This is the Shopping Cart Overlay method I'm trying to implement. 
I tested it out in one of my test apps before laying it in here. it didn't end up working
I'll leave it in here as notes

class ShoppingCart extends React.Component {
    render() {
  return (
    <div>
      <Card inverse>
        <CardImg 
            width="100px" 
            height="100px" 
            background-color='white'
            alt="Card image cap" 
            position='absolute'
            top='0'
            bottom='0'
            left='0'
            right='0'
            />
        <CardImgOverlay>
          <CardTitle>Shopping Cart</CardTitle>
          <CardText>Items in Shopping Cart</CardText>
          <CardText>
            <small className="text-muted">Return to Product List</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
}
};
*/
