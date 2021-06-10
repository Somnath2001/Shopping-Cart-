import React from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    cardHeader,
    CardBody,
    Card,
    CardFooter,
    Col,
    Row,
    CardText,
    CardHeader,
} from "reactstrap";

const Cart = ({cartItem, removeItem, buyNow}) => {
 let amount = 0;

 cartItem.forEach(item => {
     amount = parseFloat(amount) + parseFloat(item.productPrice);
 });


return(
    <Container fluid>
        <h1 className="text-success"> YOUR Cart</h1>
        <ListGroup>
            {cartItem.map(item =>(
                <listGroupItem key={item.id}>
                  <Row>
                      <Col>
                      <img
                      height= {80}
                      src={item.tinyImage}
                      />
                      </Col>
                      <Col className="text-center">
                          <div className="text-primary">
                              {item.productName}
                          </div>
                          <span>Price :- {item.productPrice}</span>
                          <button
                          color="danger" onClick={() => removeItem(item)}
                          >Remove</button>

                      </Col>
                      </Row>  
                </listGroupItem>

            ))}
        </ListGroup>
{/* If Everything is Empty */}


{
    cartItem.length >=1 ? (
      <Card className="text-center mt-3">
          <CardHeader>
              Grand  Total
          </CardHeader>
          <CardBody>
              Your amount {cartItem.length} product is {amount}
          </CardBody>
          <CardFooter>
              <Button color="text-warning" onClick={buyNow}>
                Pay Here
              </Button>
          </CardFooter>
      </Card>  
    ) : (
        <h1 className="text-warning">Cart is empty </h1>
    )
}


    </Container>
);

};

export default Cart;