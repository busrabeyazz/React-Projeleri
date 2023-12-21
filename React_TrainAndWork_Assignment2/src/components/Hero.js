import React from 'react';
import { Link } from "react-router-dom";

function Hero({ title }) {
    return (
        <div className="breadcrumb-area section-space--breadcrumb">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="breadcrumb-wrapper">
                            <h2 className="page-title">{title}</h2>
                            <ul className="breadcrumb-list">
                                <li><Link to="/">Home</Link></li>
                                <li className="active">{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
