import React from "react";
import Navbar from "./components/Navbar";
import { useCart } from "./context/CartContext";

const UserCart = () => {
  const { cartItems, decrement, addToCart, removeFromCart, totalPrice } = useCart();

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="y-cart">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty">Your Cart is Empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-section" key={item.id}>
                <div className="cart-img">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
                    <button className="btn" onClick={() => decrement(item.id)}>-</button>
                    <span>Qty: {item.quantity}</span>
                    <button
                      className="btn"
                      onClick={() =>
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          image: item.image,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="removeBtn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="footer">
              <strong>Total: ₹{totalPrice.toLocaleString()}</strong>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UserCart;
