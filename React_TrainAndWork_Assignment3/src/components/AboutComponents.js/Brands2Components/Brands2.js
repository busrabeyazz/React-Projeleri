import React from 'react';
import { useSelector } from 'react-redux';
import { selectBrands } from '../../../Control/BrandsSlice';
import Slider from 'react-slick';
import './Brands2.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next-arrow`}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev-arrow`} 
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const Brands2 = () => {
  const brands = useSelector(selectBrands);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  
  return (
    <Slider {...settings}>
      {brands.map((brand) => (
        <div key={brand.id} className="brand-slide">
          <img src={brand.image} alt={brand.name} />
        </div>
      ))}
    </Slider>
  );
};

export default Brands2;
