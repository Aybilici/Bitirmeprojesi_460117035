import React from 'react';

import NewsList from './newsList';

import NEWS from './newsList.json';
import Menu from '../../Menu/menu';
import Footer from '../../Footer/footer.js';

const News = () => {
  return (
    <div>
      <Menu />
      <div className='logoback' style={{ width: '100%' }}>
        <div style={{ width: '100%', height: '15px' }}></div>
        <NewsList data={NEWS} />
        <Footer />
      </div>
    </div>
  );
};

export default News;
