import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import fruits from './data';

const allCategories = [
  'Show All',
  ...new Set(fruits.map((fruit) => fruit.category)),
];

function App() {
  const [menuList, setMenuList] = useState(fruits);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'Show All') {
      setMenuList(fruits);
      return;
    }
    const newMenuList = fruits.filter((fruit) => fruit.category === category);
    setMenuList(newMenuList);
  };

  return (
    <main>
      <section className='menu'>
        <div className='title'>
          <div>
            <h2>Calorie Content</h2>
            <h4>per 100gr</h4>
          </div>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu fruits={menuList} />
      </section>
    </main>
  );
}

export default App;
