import React from 'react'
import './Header.css'
import { FiSmartphone } from 'react-icons/fi'
import { MdLocationPin } from 'react-icons/md'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { BiUser } from 'react-icons/bi'
import { GiWorld } from 'react-icons/gi'
const Header = () => {
    return (
        <>
            <header className="header-area header-style-1 header-height-2">
                {/* <--head top--> */}
                <div className="navbar header-top " >
                    <div className='container'>
                        <div className="phone-number col-xs-6 col-sm-8 ">
                            <a  className="" href="#" ><FiSmartphone /> <span>(+84) 123456789</span></a>
                            <a  className="" href="#" ><MdLocationPin /> Our Local </a>
                        </div>

                        <div className='col-xs-3'>
                            <div className='header-inf header-inf-right justify-content-end'>
                                <div className="dropdown" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">

                                    <a className="link-dropdown" href="#" >
                                        <GiWorld className='dropdown-icon' />English
                                        <RiArrowDropDownLine className='dropdown-icon' />
                                    </a>
                                    <div className='language-dropdown'>

                                        <a href='#'>
                                            <img src='images\flags\france-flag.png' />
                                            France
                                        </a>
                                        <a href='#'>
                                            <img src='images\flags\vietnam-flag.png' />
                                            Vietnamese
                                        </a>

                                        <a href='#'>
                                            <img src='images\flags\thailand-flag.png' />
                                            Thailand
                                        </a>

                                    </div>
                                </div>
                                <div className='main-login'>
                                    <a href='#'>
                                        <BiUser /> Login/Sign Up
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <--search--> */}
                <nav className="navbar  container" style={{ "paddingtop": "20px" }}>
                    <div className="container-fluid">

                        <a className="navbar-brand col-xs-2" href="#">
                            <img src="https://wp.alithemes.com/html/evara/evara-frontend/assets/imgs/theme/logo.svg" alt="" width="120" height="33" />
                        </a>
                        <form className="d-flex col-xs-8" style={{ "width": "700px", "marginleft": "-120px" }}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className='d-flex align-items-center'>
                                <div className='d-flex align-items-center'>
                                    <div className='header-action d-flex'>
                                        <div className='header-action-icon d-flex'>
                                            <a href='wishlist'>
                                                <img className='' src='images\wish-list-icon.png' />
                                                <span className='num-count blue'>4</span>
                                            </a>
                                        </div>
                                        <div className='header-action-icon justify-content-end'>
                                            <a className='cart-icon' href='shop-cart'>
                                                <img className='' src='images\cart-icon.png' />
                                                <span className='num-count blue'>2</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                    </div>
                </nav>
                {/* <-- Navbar --> */}
                <nav className="navbar navbar-expand-lg " style={{ "borderbottom": "1px solid #000000" }} >
                    <div className="container">
                        <div className="dropdown" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false" >
                            <a className="navbar-brand" href="#!" style={{ "paddingtop": " -30px" }}><i className="bi bi-grid-fill"></i><span style={{ "color": "#088178 " }}>Browse</span><span style={{ "color": " #088178" }}>Categories</span></a>
                            
                                <ul className='dropdown-content' style={{"minWidth":"270px"}}>
                                    <li className="dropend"><a href="#">Home 1</a>
                                        <ul className="dropdown-conten1">
                                            <li><a className="" href="#">Menu item 1</a></li>
                                            <li><a className="" href="#">Menu item 1</a></li>
                                            <li><a className="" href="#">Menu item 1</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropend"><a href="#">Home 2</a>
                                        <ul className="dropdown-conten1">
                                            <li><a className="" href="#">Menu item 2</a></li>
                                            <li><a className="" href="#">Menu item 2</a></li>
                                            <li><a className="" href="#">Menu item 2</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Home 3</a></li>
                                    <li><a href="#">Home 4</a></li>
                                </ul>
                            
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#">Home </a>
                                    <ul className="dropdown-content">
                                        <li><a href="#">Home 1</a></li>
                                        <li><a href="#">Home 2</a></li>
                                        <li><a href="#">Home 3</a></li>
                                        <li><a href="#">Home 4</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">About</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#!">Shop</a>
                                    <ul className="dropdown-content">
                                        <li><a href="#">Shop 1</a></li>
                                        <li><a href="#">Shop 2</a></li>
                                        <li><a href="#">Shop 3</a></li>
                                        <li><a href="#">Shop 4</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Mega menu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Pages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!">Contact</a>
                                </li>
                            </ul>

                        </div>

                        <div className="hotline d-none d-lg-block">
                            <p data-selected="true" data-label-id="0" data-metatip="true" style={{"marginBottom":"0"}}><i className="bi bi-telephone"></i><span> </span><span> Hotline</span> 1900 - 888 </p>
                        </div>
                    </div>
                </nav>
                {/* <-- Navbar --> */}
                {/* <section>
                <-- Intro -->
                <div id="intro" className="bg-image vh-100" style="
            background-image: url('');
          ">
                    <div className="mask" style="background-color: rgba(250, 182, 162, 0.15);"></div>
                </div>
                <-- Intro -->
            </section> */}
            </header >
        </>
    )
}

export default Header
