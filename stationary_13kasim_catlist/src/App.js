import React, { useState } from 'react';
import './App.css';
import Navigation from './Navigation';
import ProductCard from './ProductCard';
import Category from './Category';

function App() {
  // Ürün listesi
  const [CardItems, setCardItems] =useState([
    { name: 'Pens', price: '8TL', cat: 'Writing Instruments' },
    { name: 'Markers & Highlighters', price: '7TL', cat: 'Writing Instruments' },
    { name: 'Erasers & Correctors', price: '5TL', cat: 'Writing Instruments' },
    { name: 'Notebooks', price: '10TL', cat: 'Paper Products' },
    { name: 'Paper Sheets', price: '2TL', cat: 'Paper Products' },
    { name: 'Planners and Calendars', price: '12TL', cat: 'Paper Products' },
    { name: 'Adhesives', price: '10TL', cat: 'Office Supplies' },
    { name: 'Clips & Fasteners', price: '3TL', cat: 'Office Supplies' },
    { name: 'Desk Organizers', price: '20TL', cat: 'Office Supplies' },
    { name: 'Paints & Brushes', price: '10TL', cat: 'Art Supplies' },
    { name: 'Drawing', price: '10TL', cat: 'Art Supplies' },
    { name: 'Crafting Tools', price: '10TL', cat: 'Art Supplies' },
    { name: 'Bags & Backpacks', price: '50TL', cat: 'School Essentials' },
    { name: 'Calculators & Rulers', price: '15TL', cat: 'School Essentials' },
    { name: 'Educational Materials', price: '20TL', cat: 'School Essentials' },
    { name: 'Data Storage', price: '30TL', cat: 'Technology & Accessories' },
    { name: 'Office Gadgets', price: '30TL', cat: 'Technology & Accessories' },
    { name: 'Protective Covers', price: '60TL', cat: 'Technology & Accessories' },

  ]);
 

  // State tanımlamaları
  const [filteredItems, setFilteredItems] = useState([]);
  const [basket, setBasket] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Sepete ürün ekleme fonksiyonu
  const addToBasket = (product) => {
    setBasket([...basket, product]);
    setDropdownVisible(true);
  };

  // Dropdown'ı açıp kapama fonksiyonu
  const toggleDropDown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Kategoriye göre filtreleme fonksiyonu
  const filterCat = (selectedCategory) => {
    const filtered = selectedCategory
      ? CardItems.filter((item) => item.cat === selectedCategory)
      : CardItems;
    setFilteredItems(filtered);
  };

  // Sepet toplamını hesaplama fonksiyonu
  const calculateTotal = () => {
    return basket.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  // Kategorilerin listesi
  const categories = ['Writing Instruments', 'Paper Products', 'Office Supplies','Art Supplies', 'School Essentials', 'Technology & Accessories'];

  return (
    <div className="App">
      <Navigation basket={basket} toggleDropDown={toggleDropDown} dropdownVisible={dropdownVisible} />

      <div className="container main-content">
        <div className="row">
          <div className="col-md-4">
            {/* Category bileşenine callback fonksiyonu ver */}
            <Category filterCat={filterCat} categories={categories} />
          </div>
          <div className="col-md-8">
            {/* filteredItems durumunu kullanarak ürünleri göster */}
            <ProductCard cards={filteredItems.length > 0 ? filteredItems : CardItems} addToBasket={addToBasket} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;