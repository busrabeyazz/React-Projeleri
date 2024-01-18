import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from "../../Control/CartSlice";

function Shop() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.items);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log(cartProducts);
  };

  const products = useSelector((state) => state.products.value);
  const selectedCategory=useSelector((state) => state.category.selectedCategory);
  var filteredProducts=[];
  if(selectedCategory== "All"){
    filteredProducts=products;
  }      
  else{
    filteredProducts=products.filter(p=>p.category==selectedCategory);
  }

  return (
    <div>
      <div className="shop-product-fillter">
        <div className="totall-product">
          <p>
            {" "}
            We found{" "}
            <strong className="text-brand">
              {filteredProducts.length}
            </strong>{" "}
            items for you!
          </p>
        </div>
      </div>
      <div className="row product-grid-3">
     
        {filteredProducts &&
          filteredProducts.map((product) => (
            <div className="col-lg-4 col-md-4 col-12 col-sm-6" key={product.id}>
              <div className="product-cart-wrap mb-30">
                <div className="product-img-action-wrap">
                  <div className="product-img product-img-zoom">
                    <a href="shop-product-right.html">
                      <img
                        className="default-img"
                        src={product.images[0]}
                        alt={product.name}
                      />
                      <img
                        className="hover-img"
                        src={product.images[1]}
                        alt={product.name}
                      />
                    </a>
                  </div>
                  <div className="product-action-1">
                    <a
                      aria-label="Quick view"
                      className="action-btn hover-up"
                      data-bs-toggle="modal"
                      data-bs-target="#quickViewModal"
                    >
                      <i className="fi-rs-search" />
                    </a>
                    <a
                      aria-label="Add To Wishlist"
                      className="action-btn hover-up"
                      href="shop-wishlist.html"
                    >
                      <i className="fi-rs-heart" />
                    </a>
                    <a
                      aria-label="Compare"
                      className="action-btn hover-up"
                      href="shop-compare.html"
                    >
                      <i className="fi-rs-shuffle" />
                    </a>
                  </div>
                  <div className="product-badges product-badges-position product-badges-mrg"></div>
                </div>
                <div className="product-content-wrap">
                  <div className="product-category">
                    <a href="shop-grid-right.html">{product.category}</a>
                  </div>
                  <h2>
                    <a href="shop-product-right.html">{product.name}</a>
                  </h2>
                  <div className="rating-result" title="90%">
                    <span>
                      <span>{product.rating}%</span>
                    </span>
                  </div>
                  <div className="product-price">
                    <span>${product.price}</span>
                    <span className="old-price">
                      ${product.discounted_price}
                    </span>
                  </div>
                  <div className="product-action-1 show">
                    <a
                      aria-label="Add To Cart"
                      className="action-btn hover-up"
                      href="#"
                      onClick={()=>handleAddItem(product)}
                    >
                      <i className="fi-rs-shopping-bag-add" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Shop;
