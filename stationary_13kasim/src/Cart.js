import React from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const Cart = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h4>Sepetiniz</h4>
      <ListGroup>
        {cartItems.map((item, index) => (
          <ListGroupItem key={index}>
            {item.name} - {item.price} TL
            {/* Burada ürün adeti veya kaldırma butonu da eklenebilir. */}
          </ListGroupItem>
        ))}
      </ListGroup>
      <p>Toplam Tutar: {calculateTotal()} TL</p>
      <Button color="success">Ödeme Yap</Button>
    </div>
  );
};

export default Cart;
