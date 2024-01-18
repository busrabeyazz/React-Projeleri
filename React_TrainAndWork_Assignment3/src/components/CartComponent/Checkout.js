import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);


  const calculateTotal = () => {
    return Object.values(cartItems).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handlePlaceOrder = () => {
    // Ödeme işlemini burada yönetin
    console.log('Order placed');
    // Kullanıcıyı ödeme onay sayfasına yönlendir
  };

  return (
  <div>
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="index.html" rel="nofollow">Home</a>
            <span /> Shop
            <span /> Checkout
          </div>
        </div>
      </div>
      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-sm-15">
              <div className="toggle_info">
                <span><i className="fi-rs-user mr-10" /><span className="text-muted">Already have an account?</span> <a href="#loginform" data-bs-toggle="collapse" className="collapsed" aria-expanded="false">Click here to login</a></span>
              </div>
              <div className="panel-collapse collapse login_form" id="loginform">
                <div className="panel-body">
                  <p className="mb-30 font-sm">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                  <form method="post">
                    <div className="form-group">
                      <input type="text" name="email" placeholder="Username Or Email" />
                    </div>
                    <div className="form-group">
                      <input type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="login_footer form-group">
                      <div className="chek-form">
                        <div className="custome-checkbox">
                          <input className="form-check-input" type="checkbox" name="checkbox" id="remember" defaultValue />
                          <label className="form-check-label" htmlFor="remember"><span>Remember me</span></label>
                        </div>
                      </div>
                      <a href="#">Forgot password?</a>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-md" name="login">Log in</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="toggle_info">
                <span><i className="fi-rs-label mr-10" /><span className="text-muted">Have a coupon?</span> <a href="#coupon" data-bs-toggle="collapse" className="collapsed" aria-expanded="false">Click here to enter your code</a></span>
              </div>
              <div className="panel-collapse collapse coupon_form " id="coupon">
                <div className="panel-body">
                  <p className="mb-30 font-sm">If you have a coupon code, please apply it below.</p>
                  <form method="post">
                    <div className="form-group">
                      <input type="text" placeholder="Enter Coupon Code..." />
                    </div>
                    <div className="form-group">
                      <button className="btn  btn-md" name="login">Apply Coupon</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="divider mt-50 mb-50" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-25">
                <h4>Billing Details</h4>
              </div>
              <form method="post">
                <div className="form-group">
                  <input type="text" required name="fname" placeholder="First name *" />
                </div>
                <div className="form-group">
                  <input type="text" required name="lname" placeholder="Last name *" />
                </div>
                <div className="form-group">
                  <input required type="text" name="cname" placeholder="Company Name" />
                </div>
                <div className="form-group">
                  <div className="custom_select">
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" name="billing_address" required placeholder="Address *" />
                </div>
                <div className="form-group">
                  <input type="text" name="billing_address2" required placeholder="Address line2" />
                </div>
                <div className="form-group">
                  <input required type="text" name="city" placeholder="City / Town *" />
                </div>
                <div className="form-group">
                  <input required type="text" name="state" placeholder="State / County *" />
                </div>
                <div className="form-group">
                  <input required type="text" name="zipcode" placeholder="Postcode / ZIP *" />
                </div>
                <div className="form-group">
                  <input required type="text" name="phone" placeholder="Phone *" />
                </div>
                <div className="form-group">
                  <input required type="text" name="email" placeholder="Email address *" />
                </div>
                <div className="form-group">
                  <div className="checkbox">
                    <div className="custome-checkbox">
                      <input className="form-check-input" type="checkbox" name="checkbox" id="createaccount" />
                      <label className="form-check-label label_info" data-bs-toggle="collapse" href="#collapsePassword" data-target="#collapsePassword" aria-controls="collapsePassword" htmlFor="createaccount"><span>Create an account?</span></label>
                    </div>
                  </div>
                </div>
                <div id="collapsePassword" className="form-group create-account collapse in">
                  <input required type="password" placeholder="Password" name="password" />
                </div>
                <div className="ship_detail">
                  <div className="form-group">
                    <div className="chek-form">
                      <div className="custome-checkbox">
                        <input className="form-check-input" type="checkbox" name="checkbox" id="differentaddress" />
                        <label className="form-check-label label_info" data-bs-toggle="collapse" data-target="#collapseAddress" href="#collapseAddress" aria-controls="collapseAddress" htmlFor="differentaddress"><span>Ship to a different address?</span></label>
                      </div>
                    </div>
                  </div>
                  <div id="collapseAddress" className="different_address collapse in">
                    <div className="form-group">
                      <input type="text" required name="fname" placeholder="First name *" />
                    </div>
                    <div className="form-group">
                      <input type="text" required name="lname" placeholder="Last name *" />
                    </div>
                    <div className="form-group">
                      <input required type="text" name="cname" placeholder="Company Name" />
                    </div>
                    <div className="form-group">
                      <div className="custom_select">
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" name="billing_address" required placeholder="Address *" />
                    </div>
                    <div className="form-group">
                      <input type="text" name="billing_address2" required placeholder="Address line2" />
                    </div>
                    <div className="form-group">
                      <input required type="text" name="city" placeholder="City / Town *" />
                    </div>
                    <div className="form-group">
                      <input required type="text" name="state" placeholder="State / County *" />
                    </div>
                    <div className="form-group">
                      <input required type="text" name="zipcode" placeholder="Postcode / ZIP *" />
                    </div>
                  </div>
                </div>
                <div className="mb-20">
                  <h5>Additional information</h5>
                </div>
                <div className="form-group mb-30">
                  <textarea rows={5} placeholder="Order notes" defaultValue={""} />
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="order_review">
                <div className="mb-20">
                  <h4>Your Orders</h4>
                </div>
                <div className="table-responsive order_table text-center">
                  <table className="table">
                    <thead>
                      <tr>
                        <th colSpan={2}>Product</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
              {Object.values(cartItems).map(item => (
                <tr key={item.id}>
                  <td className="image product-thumbnail"><img src={item.image} alt={item.name} /></td>
                  <td>
                    <h5>{item.name}</h5> <span className="product-qty">x {item.quantity}</span>
                  </td>
                  <td>${item.price * item.quantity}</td>
                </tr>
              ))}
              <tr>
                <th>SubTotal</th>
                <td className="product-subtotal" colSpan={2}>${calculateTotal()}</td>
              </tr>
                      <tr>
                        <th>Shipping</th>
                        <td colSpan={2}><em>Free Shipping</em></td>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <td colSpan={2} className="product-subtotal"><span className="font-xl text-brand fw-900">${calculateTotal()}</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bt-1 border-color-1 mt-30 mb-30" />
                <div className="payment_method">
                  <div className="mb-25">
                    <h5>Payment</h5>
                  </div>
                  <div className="payment_option">
                    <div className="custome-radio">
                      <input className="form-check-input" required type="radio" name="payment_option" id="exampleRadios3" defaultChecked />
                      <label className="form-check-label" htmlFor="exampleRadios3" data-bs-toggle="collapse" data-target="#bankTranfer" aria-controls="bankTranfer">Direct Bank Transfer</label>
                      <div className="form-group collapse in" id="bankTranfer">
                        <p className="text-muted mt-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration. </p>
                      </div>
                    </div>
                    <div className="custome-radio">
                      <input className="form-check-input" required type="radio" name="payment_option" id="exampleRadios4" defaultChecked />
                      <label className="form-check-label" htmlFor="exampleRadios4" data-bs-toggle="collapse" data-target="#checkPayment" aria-controls="checkPayment">Check Payment</label>
                      <div className="form-group collapse in" id="checkPayment">
                        <p className="text-muted mt-5">Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode. </p>
                      </div>
                    </div>
                    <div className="custome-radio">
                      <input className="form-check-input" required type="radio" name="payment_option" id="exampleRadios5" defaultChecked />
                      <label className="form-check-label" htmlFor="exampleRadios5" data-bs-toggle="collapse" data-target="#paypal" aria-controls="paypal">Paypal</label>
                      <div className="form-group collapse in" id="paypal">
                        <p className="text-muted mt-5">Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="btn btn-fill-out btn-block mt-30">Place Order</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  )
  }
  
  export default Checkout;

