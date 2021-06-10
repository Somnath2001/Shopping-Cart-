import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from "reactstrap";

const CardItem = ({product,addInCart}) => {
return(
    <Card className="mt mb-1">
        <CardImg
        top
        height="250"
        width="100%"
        src={product.smallImage}/>
        <CardBody className="text-center">
            <CardTitle>{product.productName}</CardTitle>
            <CardText className="secondary">price: RS {product.productPrice}</CardText>
             <Button  
             color="success"
             onClick={() => {addInCart(product)}}
             >Buy NOW</Button>
       
        </CardBody>
    </Card>
)



}
export default CardItem;