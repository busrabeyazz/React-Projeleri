import React, { useState } from 'react';
import {
Card,
CardBody,
CardText,
CardTitle,
Button,
CardSubtitle,
} from 'reactstrap';

import './App.css'; 

function Product() {

  return (
    <Card
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
      Prodük
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button>
      Button
    </Button>
  </CardBody>
</Card>
  );
}

export default Product;