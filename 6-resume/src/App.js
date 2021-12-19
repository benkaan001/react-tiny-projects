import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import resume from './data';

function App() {
  const [jobs, setJobs] = useState(resume);
  const [value, setValue] = useState(0);

  const { company, dates, responsibilities, title } = jobs[value];

  return (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => {
            return (
              <button
                key={job.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {responsibilities.map((responsibility, index) => {
            return (
              <div className='job-desc' key={index}>
                <FaAngleDoubleRight className='job-icon' />
                <p>{responsibility}</p>
              </div>
            );
          })}
        </article>
      </div>
      <button className='btn' type='button'>
        more info
      </button>
    </section>
  );
}

export default App;
