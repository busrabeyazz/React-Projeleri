import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <footer className="main">

                <section className="newsletter p-30 text-white wow fadeIn animated animated animated" style={{ "visibility": "visible" }} data-metatip="true" data-selected="true" data-label-id="0">
                    <div className="container">
                        <div className="row align-items-center" style={{ "width": "100%" }}>
                            <div className="col-lg-7">
                                <div className="row align-items-center">
                                    <div className="col flex-horizontal-center">

                                        <h4 className="font-size-20 mb-0 ml-3">Sign up to Newsletter</h4>
                                    </div>
                                    <div className="col my-4 my-md-0 des">
                                        <h5 className="font-size-15 ml-4 mb-0">...and receive <strong>$25 coupon for first shopping.</strong></h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <form className="form-subcriber d-flex wow fadeIn animated animated animated" style={{ "visibility": "visible" }}>
                                    <input type="email" className="form-control bg-white font-small" placeholder="Enter your email" />
                                    <button className="btn bg-dark text-white" type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section-padding ' >
                    <div className="container mt-5">

                        <div className=" col-lg-4 col-md-6">

                            <img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/theme/logo.svg" alt="" width="120" height="38" />
                            <h5 className="mt-20 mb-10 fw-600 text-grey-4 wow fadeIn animated animated animated">
                                Contact
                            </h5>
                            <p className='wow fadeIn animated animated animated'><strong>Address:</strong> 470 Tran Dai Nghia, Hoa Quy, Ngu Hanh Son</p>
                            <p className='wow fadeIn animated animated animated'><strong>Phone:</strong> +01 2345 6789</p>
                            <p className='wow fadeIn animated animated animated'><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                            <h5 className='wow fadeIn animated animated animated mb-10 mt-30 text-gray-4'>Follow Us</h5>
                            <div className='social-icon wow fadeIn animated animated animated'>
                                <a><img src='images\facebook-icon.png'/></a>
                                <a><img src='images\twiter-icon.png'/></a>
                                <a><img src='images\instagram-icon.png'/></a>
                                <a><img src='images\pinterest.png'/></a>
                                <a><img src='images\youtube-icon.png'/></a>


                            </div>
                        </div>

                        <div className='col-md-3 col-lg-2'>
                            <h4 className=' mb-4'>About</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link to='/' className=' py-2 mb-1'>About Us</Link>
                                <Link to='/' className=' py-2 mb-1'>Delivery Information</Link>
                                <Link to='/' className=' py-2 mb-1'>Privacy Policy</Link>
                                <Link to='/' className=' py-2 mb-1'>Terms & Conditions</Link>
                                <Link to='/' className=' py-2 mb-1'>Contact Us</Link>
                                <Link to='/' className=' py-2 mb-1'>Support Center</Link>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-3'>
                            <h4 className=' mb-4'>My Account</h4>
                            <div className='footer-links d-flex flex-column'>
                                <Link className=' py-2 mb-1'>Sign In</Link>
                                <Link className=' py-2 mb-1'>View Cart</Link>
                                <Link className=' py-2 mb-1'>My Wishlist</Link>
                                <Link className=' py-2 mb-1'>Track My Order</Link>
                                <Link className=' py-2 mb-1'>Help</Link>
                                <Link className=' py-2 mb-1'>Order</Link>


                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <h4 className=' mb-4'>Install App</h4>
                            <div className='footer-links d-flex flex-column'>

                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{ "backgroundcolor": "rgba(0, 0, 0, 0.025)" }}>
                    © 2023 Copyright:
                    <a className="text-reset fw-bold" href="#">Vi Lê</a>
                </div>
            </footer>
        </>
    )
}

export default Footer
