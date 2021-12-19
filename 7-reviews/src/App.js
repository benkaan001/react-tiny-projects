import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [cats, setCats] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = cats.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, cats]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 2000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='section-center'>
        {cats.map((cat, catIndex) => {
          const { id, name, job, image, text } = cat;

          let position = 'nextSlide';
          if (catIndex === index) {
            position = 'activeSlide';
          }
          if (
            catIndex === index - 1 ||
            (index === 0 && catIndex === cats.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='cat-img' />
              <h4>{name}</h4>
              <p className='title'>{job}</p>
              <p className='text'>{text}</p>
              <FaQuoteRight className='icon'></FaQuoteRight>
            </article>
          );
        })}

        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
