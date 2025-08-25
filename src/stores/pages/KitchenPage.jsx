import React, { useState } from "react";
import { kitchenData } from "../data/kitchen";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext"; // ✅ import search context

const KitchenPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const { searchTerm } = useSearch(); // ✅ get global search term

  const companyHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct, brand]);
    }
  };

  // ✅ Step 1: filter by checkboxes
  let filteredProduct =
    selectedProduct.length === 0
      ? kitchenData
      : kitchenData.filter((item) => selectedProduct.includes(item.brand));

  // ✅ Step 2: filter by global search term
  if (searchTerm.trim() !== "") {
    filteredProduct = filteredProduct.filter(
      (item) =>
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) // if "name" exists
    );
  }

  return (
    <>
      <Navbar />
      <div className="fullpage">
        {/* Brand filter checkboxes */}
        <div className="pro-selected">
          {kitchenData.map((kitchen) => (
            <div key={kitchen.id} className="pro-input">
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(kitchen.brand)}
                  onChange={() => companyHandler(kitchen.brand)}
                />
                {kitchen.brand}
              </label>
            </div>
          ))}
        </div>

        {/* Product grid */}
        <div className="pageSection">
          {filteredProduct.length > 0 ? (
            filteredProduct.map((item) => (
              <div key={item.id}>
                <Link to={`/kitchen/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt={item.model} />
                  </div>
                </Link>
                <div className="proModel">
                  {item.brand}, {item.model}
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default KitchenPage;
