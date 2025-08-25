import React, { useState } from 'react';
import { menData } from '../data/men';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useSearch } from '../context/SearchContext'; // ✅ import search context

const MenPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const { searchTerm } = useSearch(); // ✅ get global search term

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct, mango]);
    }
  };

  // ✅ First filter by brand
  let filteredProduct =
    selectedProduct.length === 0
      ? menData
      : menData.filter((orange) => selectedProduct.includes(orange.brand));

  // ✅ Then filter by search term (brand, model, or both)
  if (searchTerm) {
    filteredProduct = filteredProduct.filter(
      (item) =>
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // ✅ unique brands for checkbox list (to avoid duplicates)
  const uniqueBrands = [...new Set(menData.map((item) => item.brand))];

  return (
    <>
      <Navbar />
      <div className="fullpage">
        {/* Brand Filter Section */}
        <div className="pro-selected">
          {uniqueBrands.map((brand) => (
            <div className="pro-input" key={brand}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(brand)}
                  onChange={() => companyHandler(brand)}
                />
                {brand}
              </label>
            </div>
          ))}
        </div>

        {/* Products Section */}
        <div className="pageSection">
          {filteredProduct.length > 0 ? (
            filteredProduct.map((item) => (
              <div key={item.id}>
                <Link to={`/men/${item.id}`}>
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
            <p>No products found 🚫</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MenPage;
