import React, { Component } from 'react'
import Slider from '../components/HomeComponent/Slider'
import Products from '../components/HomeComponent/Products'
import Banner from '../components/HomeComponent/Banner'
import PopularCategories from '../components/HomeComponent/PopularCategories'
import SmallBanners from '../components/HomeComponent/SmallBanners';
import NewArrivals from '../components/HomeComponent/NewArrivals';
import  Brands from '../components/HomeComponent/Brands';
import BestSell from '../components/HomeComponent/BestSell';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Products />
        <Banner />
        <PopularCategories />
        <SmallBanners />
        <NewArrivals />
        <Brands />
        <BestSell />

       
      </div>
    )
  }
}
