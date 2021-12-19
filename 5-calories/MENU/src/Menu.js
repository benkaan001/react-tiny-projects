import React from 'react';

const Menu = ({ fruits }) => {
  return (
    <div className='section-center'>
      {fruits.map((fruit) => {
        const { id, title, category, calories, img, desc } = fruit;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='calories'>{calories} cal</h4>
              </header>
              <p className='"item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
