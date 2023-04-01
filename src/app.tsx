import React from 'react';
import Header from './panel/header/header';
import Aside from './panel/aside/aside';
import Article from './panel/article/article';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='inner'>
        <section className='section'>
          <Aside />
          <Article />
        </section>
      </div>
    </React.Fragment>
  );
};

export default App;
