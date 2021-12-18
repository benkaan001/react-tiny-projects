import React, { useState } from 'react';
import cats from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = cats[index];

  const [readMore, setReadMore] = useState(false);

  const checkIndexNumber = (number) => {
    if (number > cats.length - 1) {
      return 0;
    }
    if (number < 0) {
      return cats.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndexNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndexNumber(newIndex);
    });
  };

  const surpriseMe = () => {
    setIndex((index) => {
      let newIndex = Math.floor(Math.random() * cats.length);
      if (newIndex === index) {
        newIndex = index - 1;
      }
      return checkIndexNumber(newIndex);
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='cat-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      {/* <p className='info'>{text}</p> */}
      <p className='info'>
        {readMore ? text : `${text.substring(0, 100)}...`}
        <button className='btn' onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'read more'}
        </button>
      </p>
      <div className='button'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={surpriseMe}>
        Suprise Me!
      </button>
    </article>
  );
};

export default Review;
