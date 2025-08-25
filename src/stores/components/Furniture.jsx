import React from "react";
import { furnitureData } from "../data/furniture";
import { useCart } from "../context/CartContext";

const Furniture = () => {
  const { addToCart } = useCart();
  const items = furnitureData.slice(0, 8);

  return (
    <section id="furniture" className="product-section">
      <h2 className="section-title">Furniture</h2>
      <div className="grid">
        {items.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-media">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="card-body">
              <h3 className="title">{item.name}</h3>
              <p className="price">₹{item.price}</p>
              <button
                className="add"
                onClick={() =>
                  addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Furniture;
