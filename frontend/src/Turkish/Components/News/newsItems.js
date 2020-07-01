import React from 'react';
import { useParams } from 'react-router-dom';

import NewsItem from './newsItem';
import NEWS from './news.json';
import Menu from '../../Menu/menu';
import Footer from '../../Footer/footer.js';
import SimpleReactLightbox from 'simple-react-lightbox';

const NewsItems = () => {
  const userId = useParams().userId;
  const loadedPlaces = NEWS.filter((place) => place.creator === userId);
  return (
    <div>
      <Menu />
      <div className='logoback' style={{ width: '100%' }}>
        <div style={{ width: '100%', height: '15px' }}></div>
        <SimpleReactLightbox>
          <NewsItem items={loadedPlaces} />
        </SimpleReactLightbox>
        <Footer />
      </div>
    </div>
  );
};

export default NewsItems;
