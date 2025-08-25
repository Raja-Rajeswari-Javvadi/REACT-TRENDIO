import React, { useState } from "react";
import { computerData } from "../data/computers";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext"; // ✅ import search context

const CompPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const { searchTerm } = useSearch(); // ✅ get search term

  const companyHandler = (company) => {
    if (selectedProduct.includes(company)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== company));
    } else {
      setSelectedProduct([...selectedProduct, company]);
    }
  };

  // ✅ Step 1: filter by company
  let filteredProduct =
    selectedProduct.length === 0
      ? computerData
      : computerData.filter((item) => selectedProduct.includes(item.company));

  // ✅ Step 2: also filter by search term
  if (searchTerm.trim() !== "") {
    filteredProduct = filteredProduct.filter(
      (item) =>
        item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) // if you added "name"
    );
  }

  return (
    <>
      <Navbar />
      <div className="fullpage">
        {/* Company filter checkboxes */}
        <div className="pro-selected">
          {computerData.map((comp) => (
            <div key={comp.id} className="pro-input">
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(comp.company)}
                  onChange={() => companyHandler(comp.company)}
                />
                {comp.company}
              </label>
            </div>
          ))}
        </div>

        {/* Products grid */}
        <div className="pageSection">
          {filteredProduct.length > 0 ? (
            filteredProduct.map((item) => (
              <div key={item.id}>
                <Link to={`/computers/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt={item.model} />
                  </div>
                </Link>
                <div className="proModel">
                  {item.company}, {item.model}
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

export default CompPage;
