import React from 'react';

const List = ({ cats }) => {
  return (
    <>
      {cats.map((cat) => {
        const { id, name, age, image } = cat;

        return (
          <article key={id} className='cat'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>Turning {age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
