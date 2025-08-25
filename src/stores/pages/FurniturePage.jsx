import React, { useState } from "react";
import { furnitureData } from "../data/furniture";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext"; // ✅ import search context

const FurniturePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const { searchTerm } = useSearch(); // ✅ get search term

  const companyHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== brand));
    } else {
      setSelectedProduct([...selectedProduct, brand]);
    }
  };

  // ✅ Step 1: filter by selected checkboxes
  let filteredProduct =
    selectedProduct.length === 0
      ? furnitureData
      : furnitureData.filter((item) => selectedProduct.includes(item.brand));

  // ✅ Step 2: filter by global search bar
  if (searchTerm.trim() !== "") {
    filteredProduct = filteredProduct.filter(
      (item) =>
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) // if "name" is available
    );
  }

  return (
    <>
      <Navbar />
      <div className="fullpage">
        {/* Company filter checkboxes */}
        <div className="pro-selected">
          {furnitureData.map((furniture) => (
            <div key={furniture.id} className="pro-input">
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(furniture.brand)}
                  onChange={() => companyHandler(furniture.brand)}
                />
                {furniture.brand}
              </label>
            </div>
          ))}
        </div>

        {/* Product grid */}
        <div className="pageSection">
          {filteredProduct.length > 0 ? (
            filteredProduct.map((item) => (
              <div key={item.id}>
                <Link to={`/furniture/${item.id}`}>
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

export default FurniturePage;
