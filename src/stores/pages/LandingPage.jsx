import React from "react";
import Navbar from "../components/Navbar";
import Mobiles from "../components/Mobiles";
import Computers from "../components/Computers";
import Watch from "../components/Watch";
import Men from "../components/Men";
import Woman from "../components/Woman";
import Furniture from "../components/Furniture";
import AC from "../components/AC";
import Kitchen from "../components/Kitchen";
import Fridge from "../components/Fridge";
import { useSearch } from "../context/SearchContext"; // ✅ import

const LandingPage = () => {
  const { searchTerm } = useSearch(); // ✅ global search

  return (
    <div>
      <div id="top"></div>
      <Navbar />

      {/* Pass searchTerm down to category components */}
      <section id="mobiles"><Mobiles searchTerm={searchTerm} /></section>
      <section id="computers"><Computers searchTerm={searchTerm} /></section>
      <section id="watch"><Watch searchTerm={searchTerm} /></section>
      <section id="men"><Men searchTerm={searchTerm} /></section>
      <section id="woman"><Woman searchTerm={searchTerm} /></section>
      <section id="furniture"><Furniture searchTerm={searchTerm} /></section>
      <section id="kitchen"><Kitchen searchTerm={searchTerm} /></section>
      <section id="fridge"><Fridge searchTerm={searchTerm} /></section>
      <section id="ac"><AC searchTerm={searchTerm} /></section>
    </div>
  );
};

export default LandingPage;
