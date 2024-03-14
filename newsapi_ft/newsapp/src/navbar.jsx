import React from "react";

const Navbar = ({ onCategorySelect }) => {
  const popularCategories = [
    "Business",
    "Technology",
    "Entertainment",
    "Sports",
  ];

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <a
              href="#latest-news"
              onClick={() => handleCategoryClick("latest news")}
            >
              Latest News
            </a>
          </li>
          <li className="nav-item">
            Popular Categories:
            {popularCategories.map((category, index) => (
              <button key={index} onClick={() => handleCategoryClick(category)}>
                {category}
              </button>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
