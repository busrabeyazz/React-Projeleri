import React, { Component } from 'react'

export default class Wishlist extends Component {
  render() {
    return (
      <div>
<main className="main">
  <div className="page-header breadcrumb-wrap">
    <div className="container">
      <div className="breadcrumb">
        <a href="index.html" rel="nofollow">Home</a>
        <span /> Shop
        <span /> Wishlist
      </div>
    </div>
  </div>
  <section className="mt-50 mb-50">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table shopping-summery text-center">
              <thead>
                <tr className="main-heading">
                  <th scope="col" colSpan={2}>Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock Status</th>
                  <th scope="col">Action</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="image product-thumbnail"><img src="assets/imgs/shop/product-1-1.jpg" alt="#" /></td>
                  <td className="product-des product-name">
                    <h5 className="product-name"><a href="shop-product-right.html">J.Crew Mercantile Women's Short-Sleeve</a></h5>
                    <p className="font-xs">Maboriosam in a tonto nesciung eget<br /> distingy magndapibus.
                    </p>
                  </td>
                  <td className="price" data-title="Price"><span>$65.00 </span></td>
                  <td className="text-center" data-title="Stock">
                    <span className="color3 font-weight-bold">In Stock</span>
                  </td>
                  <td className="text-right" data-title="Cart">
                    <button className="btn btn-sm"><i className="fi-rs-shopping-bag mr-5" />Add to cart</button>
                  </td>
                  <td className="action" data-title="Remove"><a href="#"><i className="fi-rs-trash" /></a></td>
                </tr>
                <tr>
                  <td className="image"><img src="assets/imgs/shop/product-2-1.jpg" alt="#" /></td>
                  <td className="product-des">
                    <h5 className="product-name"><a href="shop-product-right.html">Amazon Essentials Women's Tank</a></h5>
                    <p className="font-xs">Sit at ipsum amet clita no est,<br /> sed amet sadipscing et gubergren</p>
                  </td>
                  <td className="price" data-title="Price"><span>$75.00 </span></td>
                  <td className="text-center" data-title="Stock">
                    <span className="color3 font-weight-bold">In Stock</span>
                  </td>
                  <td className="text-right" data-title="Cart">
                    <button className="btn btn-sm"><i className="fi-rs-shopping-bag mr-5" />Add to cart</button>
                  </td>
                  <td className="action" data-title="Remove"><a href="#"><i className="fi-rs-trash" /></a></td>
                </tr>
                <tr>
                  <td className="image"><img src="assets/imgs/shop/product-3-1.jpg" alt="#" /></td>
                  <td className="product-des">
                    <h5 className="product-name"><a href="shop-product-right.html">Amazon Brand - Daily Ritual Women's Jersey </a></h5>
                    <p className="font-xs">Erat amet et et amet diam et et.<br /> Justo amet at dolore
                    </p>
                  </td>
                  <td className="price" data-title="Price"><span>$62.00 </span></td>
                  <td className="text-center" data-title="Stock">
                    <span className="text-danger font-weight-bold">Out of stock</span>
                  </td>
                  <td className="text-right" data-title="Cart">
                    <button className="btn btn-sm btn-secondary"><i className="fi-rs-headset mr-5" />Contact Us</button>
                  </td>
                  <td className="action" data-title="Remove"><a href="#"><i className="fi-rs-trash" /></a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

      </div>
    )
  }
}
