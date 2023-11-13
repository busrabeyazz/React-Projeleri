import React from 'react';

function ProductCard({ addToBasket, cards }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {cards.map((product, index) => (
                        <div key={index} className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Price: {product.price}</p>
                                <button className="btn btn-success" onClick={() => addToBasket(product)}>
                                    Add to Basket
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCard; 