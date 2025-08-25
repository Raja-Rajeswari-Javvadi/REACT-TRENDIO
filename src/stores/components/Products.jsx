import React from "react";
import Mobiles from "./Mobiles";
import Computers from "./Computers";
import Watch from "./Watch";
import Men from "./Men";
import Woman from "./Woman";
import Furniture from "./Furniture";
import AC from "./AC";
import Kitchen from "./Kitchen";

const Products = () => {
  return (
    <div className="products-container">
      
      <section className="product-section">
        <h2 className="section-title">Mobiles</h2>
        <div className="grid">
          <Mobiles />
        </div>
      </section>

      <section className="product-section">
        <h2 className="section-title">Computers</h2>
        <div className="grid">
          <Computers />
        </div>
      </section>

      <section className="product-section">
        <h2 className="section-title">Watches</h2>
        <div className="grid">
          <Watch />
        </div>
      </section>

      <section className="product-section">
        <h2 className="section-title">Men's Fashion</h2>
        <div className="grid">
          <Men />
        </div>
      </section>

      <section className="product-section">
        <h2 className="section-title">Women's Fashion</h2>
        <div className="grid">
          <Woman />
        </div>
      </section>

      <section className="product-section">
        <h2 className="section-title">Furniture</h2>
        <div className="grid">
          <Furniture />
        </div>
      </section>

      <section className="product-section">
        <h2 className="section-title">Air Conditioners</h2>
        <div className="grid">
          <AC />
        </div>
      </section>

      <section className="product-section">
        <h2 className="section-title">Kitchen</h2>
        <div className="grid">
          <Kitchen />
        </div>
      </section>

    </div>
  );
};

export default Products;
