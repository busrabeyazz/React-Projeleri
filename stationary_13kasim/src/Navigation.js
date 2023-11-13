import React from 'react';

function Navigation({ basket, toggleDropDown, dropdownVisible }) {
    const calculateTotal = () => {
        return basket.reduce((total, item) => total + parseFloat(item.price), 0);
    };

    return (
        <nav className="navbar navbar-dark bg-light mb-3" style={{ position: 'fixed', top: 0, right: 0, zIndex: 1000 }}>
            <div className="container-fluid">
                <div className="navbar-brand">Store</div>
                <div className="btn-group">
                    <button
                        onClick={toggleDropDown}
                        type="button"
                        className="btn btn-danger dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={dropdownVisible}
                    >
                        Basket ({basket.length})
                    </button>
                    {dropdownVisible && (
                        <div className="dropdown-menu dropdown-menu-right show">
                            {basket.map((item, index) => (
                                <a key={index} className="dropdown-item">
                                    {item.name} - {item.price}
                                </a>
                            ))}
                            <div className="dropdown-divider"></div>
                            <div className="dropdown-item"><strong>Total: {calculateTotal()} TL</strong></div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;