import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext"; // ✅ correct import
import { mobileData } from "../data/mobiles.js";

const MobilePage = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const { searchTerm } = useSearch(); // ✅ use searchTerm

  const brandHandler = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  // ✅ Apply both brand filter + search filter
  const filteredProducts = mobileData.filter((item) => {
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(item.brand);
    const matchesSearch =
      item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.model.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {mobileData.map((phone) => (
            <div className="pro-input" key={phone.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(phone.brand)}
                  onChange={() => brandHandler(phone.brand)}
                />
                {phone.brand}
              </label>
            </div>
          ))}
        </div>

        <div className="pageSection">
          {filteredProducts.map((item) => (
            <div key={item.id}>
              <Link to={`/mobiles/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={item.model} />
                </div>
              </Link>
              <div className="proModel">
                {item.brand}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobilePage;
