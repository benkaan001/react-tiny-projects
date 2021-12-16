import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [cats, setCats] = useState(data);

  return (
    <>
      <main>
        <section className='container'>
          <h3>You have {cats.length} birthdays today</h3>
          <List cats={cats} />
          <button onClick={() => setCats([])}>clear all</button>
        </section>
      </main>
    </>
  );
}

export default App;
