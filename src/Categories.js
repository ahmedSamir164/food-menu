import React from "react";

const Categories = ({ items, setMenu }) => {
  let catArray = [];

  const generateBtn = () => {
    items.map((item) => catArray.push(item.category));
  };
  generateBtn();
  const btns = [...new Set(catArray)];

  const showCategory = (category) => {
    const filtred = items.filter((item) => item.category === category);
    setMenu(filtred);
  };
  return (
    <div className="btn-container">
      <button onClick={() => setMenu(items)} className="filter-btn">
        all
      </button>
      {btns.map((btn) => (
        <button
          onClick={() => showCategory(btn)}
          key={btn}
          className="filter-btn"
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Categories;
