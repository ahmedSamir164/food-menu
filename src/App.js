import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menu, setMenu] = useState(items);

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h4>Our menu</h4>
          <div className="underline"></div>
        </div>
        <Categories items={items} setMenu={setMenu} />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
