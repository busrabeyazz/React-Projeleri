import React, { useState } from 'react';
import {
ListGroup,
ListGroupItem,
} from 'reactstrap';

import './App.css';
function Category() {
    return(
<div className='col-md-3 row'>
<h4>Categories</h4>
<ListGroup>
  <ListGroupItem
    href="#"
    tag="a"
  >
    Cras justo odio
  </ListGroupItem>
  <ListGroupItem
    href="#"
    tag="a"
  >
    Dapibus ac facilisis in
  </ListGroupItem>
  <ListGroupItem
    href="#"
    tag="a"
  >
    Morbi leo risus
  </ListGroupItem>
  <ListGroupItem
    href="#"
    tag="a"
  >
    Porta ac consectetur ac
  </ListGroupItem>
  <ListGroupItem
    href="#"
    tag="a"
  >
    Vestibulum at eros
  </ListGroupItem>
</ListGroup>
</div>
    )
}
export default Category;