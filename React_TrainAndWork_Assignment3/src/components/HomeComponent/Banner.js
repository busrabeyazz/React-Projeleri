import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div>
        <section className="banner-2 section-padding pb-0">
  <div className="container">
    <div className="banner-img banner-big wow fadeIn animated f-none">
      <img src="assets/imgs/banner/banner-4.png" alt="" />
      <div className="banner-text d-md-block d-none">
        <h4 className="mb-15 mt-40 text-brand">Repair Services</h4>
        <h1 className="fw-600 mb-20">
          We're an Apple <br />
          Authorised Service Provider
        </h1>
        <a href="shop-grid-right.html" className="btn">
          Learn More <i className="fi-rs-arrow-right" />
        </a>
      </div>
    </div>
  </div>
</section>

      </div>
    )
  }
}
