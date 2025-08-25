import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";

const categories = [
  { label: "Mobiles", target: "#mobiles" },
  { label: "Computers", target: "#computers" },
  { label: "Watches", target: "#watch" },   // id is "watch" in LandingPage
  { label: "Men's Wear", target: "#men" },
  { label: "Women's Wear", target: "#woman" }, // id is "woman" in LandingPage
  { label: "Furniture", target: "#furniture" },
  { label: "Kitchen", target: "#kitchen" },
  { label: "Fridge", target: "#fridge" },
  { label: "AC", target: "#ac" },
];

const Navbar = () => {
  const { totalCount } = useCart();
  const { searchTerm, setSearchTerm, clearSearch } = useSearch();

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">Trendio</Link>

        {/* Wire the search input to SearchContext */}
        <form
          className="search"
          onSubmit={(e) =>console.log(searchTerm)}
          role="search"
        >
          <input
            placeholder="Search products…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search products"
          />
          {searchTerm && (
            <button

              type="submit"
              className="btn btn-clear"
              // onClick={clearSearch}
              aria-label="Clear search"
              title="Clear"
            >
              search
            </button>
          )}
        </form>

       <div className="actions">
  <Link to="/signin" className="btn">
    Sign In / Sign Up
  </Link>
  <Link to="/cart" className="cart-link">
    Cart <span className="cart-count">{totalCount}</span>
  </Link>
</div>

      </div>

      <nav className="category-bar">
        <div className="container">
          <div className="category-row">
            {categories.map((c) => (
              <a key={c.label} href={c.target} className="chip">
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
