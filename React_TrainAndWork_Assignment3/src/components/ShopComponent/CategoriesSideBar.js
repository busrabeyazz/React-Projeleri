import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../../ReduxSlices/CategorySlice';
import { Link } from "react-router-dom";

const CategoriesSideBar = () => {
  const dispatch = useDispatch();

  const categories = [
    "All", "Shoes & Bags", "Blouses & Shirts", "Dresses", "Swimwear",
    "Beauty", "Jewelry & Watch", "Accessories"
  ];

  const handleCategorySelect = (category) => {
    dispatch(setCategory(category));
  };

  return (
    <div>
      <div className="widget-category mb-30">
        <h5 className="section-title style-1 mb-30 wow fadeIn animated">Category</h5>
        <ul className="categories">
          {categories.map((category, index) => (
           <li key={index} onClick={() => handleCategorySelect(category)}>
           <Link to={`/shop?category=${category}`}>{category}</Link>
         </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesSideBar;
