import React, { Component } from "react";
import CategoriesSideBar from "../components/ShopComponent/CategoriesSideBar";
import Shop from "../components/ShopComponent/Shop";

function ShopPage() {
  return (
    <div>
      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <Shop />
            </div>
            <div className="col-lg-3 primary-sidebar sticky-sidebar">
              <div className="row">
                <div className="col-lg-12 col-mg-6" />
                <div className="col-lg-12 col-mg-6" />
              </div>
              <CategoriesSideBar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ShopPage;
