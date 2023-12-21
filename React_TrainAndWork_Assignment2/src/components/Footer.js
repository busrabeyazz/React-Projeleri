import React from 'react';

function Footer() {
    return (
        <>
            <div className="footer-area">
                <div className="footer-navigation-area">
                    <div className="container wide">
                        <div className="row">
                            <div className="col-xl-4 col-custom-xl-6 col-lg-6">
                                <div className="row">
                                    <div className="col-6 col-sm-4">
                                        <div className="footer-widget">
                                            <h4 className="footer-widget__title">ABOUT US</h4>
                                            <nav className="footer-widget__navigation">
                                                <ul>
                                                    <li><a href="/">About Us</a></li>
                                                    <li><a href="/">Newsletter Sign Up</a></li>
                                                    <li><a href="/">History</a></li>
                                                    <li><a href="/">Brands</a></li>
                                                    <li><a href="/">Press Office</a></li>
                                                    <li><a href="/">Contact Us</a></li>
                                                    <li><a href="/">Terms & Conditions</a></li>
                                                    <li><a href="/">Privacy Policy</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-custom-xl-6 col-lg-6">
                                <div className="row">
                                    <div className="col-6 col-sm-4">
                                        <div className="footer-widget">
                                            <h4 className="footer-widget__title">WORK WITH US</h4>
                                            <nav className="footer-widget__navigation">
                                                <ul>
                                                    <li><a href="/">Careers</a></li>
                                                    <li><a href="/">Affiliates</a></li>
                                                    <li><a href="/">Travel Scholarship</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-custom-xl-6 col-lg-6">
                                <div className="footer-widget footer-widget--two">
                                    <h4 className="footer-widget__title">10% OFF YOUR FIRST ORDER</h4>
                                    <p className="footer-widget__text">Join our community and be the first to know about offers, new collections and interior trends.</p>
                                    <div className="newsletter-form-area">
                                        <form id="mc-form" className="mc-form">
                                            <div className="footer-widget__newsletter-form">
                                                <input type="email" placeholder="Your Email" required />
                                                <button type="submit">SUBSCRIBE US</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mailchimp-alerts">
                                        <div className="mailchimp-submitting"></div>
                                        <div className="mailchimp-success"></div>
                                        <div className="mailchimp-error"></div>
                                    </div>
                                </div>
                                <div className="footer-widget footer-widget--two">
                                    <span className="footer-widget__text footer-widget__text--two">Follow us</span>
                                    <ul className="footer-widget__social-links">
                                        <li><a href="/" title="Facebook"><i className="fa fa-facebook"/></a></li>
                                        <li><a href="/" title="Twitter"><i className="fa fa-twitter"/></a></li>
                                        <li><a href="/" title="LinkedIn"><i className="fa fa-linkedin"/></a></li>
                                        <li><a href="/" title="Instagram"><i className="fa fa-instagram"/></a></li>
                                        <li><a href="/" title="Youtube"><i className="fa fa-youtube-play"/></a></li>
                                    </ul>
                                </div>
                                <div className="footer-payment-logo">
                                    <img src={process.env.PUBLIC_URL + "/img/icons/payments.png"} className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright-area">
                    <div className="container wide">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-text text-center">
                                    copyright © 2023 Robin. All Rights Reserved
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="offcanvas-mobile-menu" id="offcanvas-mobile-menu">
                <a href="/" className="offcanvas-menu-close" id="offcanvas-menu-close-trigger">
                    <i className="pe-7s-close"/>
                </a>
                <div className="offcanvas-wrapper">
    <div className="offcanvas-inner-content">
        <nav className="offcanvas-navigation">
            <ul>
                <li className="menu-item"><a href="/">Home</a></li>
              
            </ul>
        </nav>
    </div>
</div>
</div>
<div className="search-overlay" id="search-overlay">
    <span className="close-icon search-close-icon">
        <a href="/" id="search-close-icon">
            <i className="pe-7s-close"/>
        </a>
    </span>
    <div className="search-overlay-content">
        <div className="input-box">
            <form action="#">
                <input type="search" placeholder="Search Products..."/>
                <button type="submit"><i className="fa fa-search"/></button>
            </form>
        </div>
        <div className="search-hint">
            <span># Hit enter to search or ESC to close</span>
        </div>
    </div>
</div>
<div id="qv-1" className="cd-quick-view">
    <div className="cd-slider-wrapper">
      
    </div>
    <div className="quickview-item-info cd-item-info">
        <h2 className="item-title">Ürün Adı</h2>
        <p className="price">
            <span className="main-price">$XXX.XX</span>
            <span className="discounted-price">$XXX.XX</span>
        </p>
        <p className="description">Ürün açıklaması burada yer alabilir.</p>
     
    </div>
    <a href="#0" className="cd-close">Close</a>
</div>
<button className="scroll-top">
    <i className="fa fa-angle-up"/>
</button>

        </>
    );
}

export default Footer;
