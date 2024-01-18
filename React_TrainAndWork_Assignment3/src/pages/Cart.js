import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart } from '../Control/CartSlice';

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log(cartProducts);
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateSubtotal = useCallback(() => {
    return Object.values(cartProducts).reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }, [cartProducts]);

  const subtotal = calculateSubtotal();
  const total = subtotal; 
  return (
    <div>
      <main className="main">
        <section className="mt-50 mb-50">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="table shopping-summery text-center clean">
                    <thead>
                      <tr className="main-heading">
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.values(cartProducts).map((product) => (
                        <tr key={product.id}>
                          <td className="image product-thumbnail">
                            <img src={product.image} alt={product.name} />
                          </td>
                          <td className="product-des product-name">
                            <h5 className="product-name">
                              <a href="#">{product.name}</a>
                            </h5>
                          </td>
                          <td className="price" data-title="Price">
                            <span>${product.price}</span>
                          </td>
                          <td className="text-center" data-title="Stock">
                            <div className="detail-qty border radius m-auto">
                              <a href="#" onClick={() => handleRemoveItem(product.id)} className="qty-down">
                                <i className="fi-rs-angle-small-down" />
                              </a>
                              <span className="qty-val">{product.quantity}</span>
                              <a href="#" onClick={() => handleAddItem(product)} className="qty-up">
                                <i className="fi-rs-angle-small-up" />
                              </a>
                            </div>
                          </td>
                          <td className="text-right" data-title="Cart">
                            <span>${product.price * product.quantity}</span>
                          </td>
                          <td className="action" data-title="Remove">
                            <a href="#" onClick={() => handleRemoveItem(product.id)} className="text-muted">
                              <i className="fi-rs-trash" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="cart-action text-end">
        <a href="#" onClick={handleClearCart} className="btn mr-10 mb-sm-15">
          <i className="fi-rs-cross-small" /> Clear Cart
        </a>

      <a href="#" className="btn">
        <i className="fi-rs-shopping-bag mr-10" />Continue Shopping
      </a>
    </div>

    <div className="divider center_icon mt-50 mb-50">
      <i className="fi-rs-fingerprint" />
    </div>

    <div className="row mb-50">
      <div className="col-lg-6 col-md-12">
        <div className="heading_s1 mb-3">
          
        </div>
        
        <form className="field_form shipping_calculator">
         
        </form>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="border p-md-4 p-30 border-radius cart-totals">
          <div className="heading_s1 mb-3">
            <h4>Cart Totals</h4>
          </div>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td className="cart_total_label">Cart Subtotal</td>
                  <td className="cart_total_amount">
                    <span className="font-lg fw-900 text-brand">${subtotal.toFixed(2)}</span>
                  </td>
                </tr>
                <tr>
                  <td className="cart_total_label">Shipping</td>
                  <td className="cart_total_amount">
                    <i className="ti-gift mr-5" /> Free Shipping
                  </td>
                </tr>
                <tr>
                  <td className="cart_total_label">Total</td>
                  <td className="cart_total_amount">
                    <strong>
                      <span className="font-xl fw-900 text-brand">${subtotal.toFixed(2)}</span>
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a href="#" className="btn">
            <i className="fi-rs-box-alt mr-10" /> Proceed To CheckOut
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</section>
      </main>
    </div>
  );
                      }

export default Cart;
