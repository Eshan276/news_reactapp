import React, { useState } from "react";
import Navbar from "./navbar";
import NewsComponent from "./newss";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Navbar onCategorySelect={handleCategorySelect} />
      <NewsComponent category={selectedCategory} />
    </div>
  );
};

export default App;
