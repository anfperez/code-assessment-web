import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { Container, Row, Col } from 'reactstrap'

//doing some column tests
const App = () => (
  <div>
    <h2>Acme Store</h2>
    <hr/>
    <Container>
    	<Row>
    		<Col>
                <button> View Shopping Cart </button>
    <ProductsContainer />
    </Col>
    </Row>
    </Container>
    <hr/>
    <Container>
    	<Row>
    	<Col>
    <CartContainer />
    </Col>
    </Row>
    </Container>
  </div>
)

export default App

/* This is the Shopping Cart Overlay method I'm trying to implement. I tested it out in one of my test apps before laying it in here
class App extends React.Component {
    constructor ( props ) {
        super( props )
        this.state= { show : false };
        this.showShoppingCart = this.showShoppingCart.bind(this)
    }

    showShoppingCart() {
        const { show } = this.state;
        this.setState({ show: true })
    }
    render() {
        return (
            <div>

                <h1 style={fontStyle}>Swords, Cups, & Wands</h1>
                <button onClick= {this.showShoppingCart }> Toggle Div </button>
                { this.state.show && <ShoppingCart />}
            </div>
            );
    }
}

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
