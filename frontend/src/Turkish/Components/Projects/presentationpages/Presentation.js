import React from 'react';
import { useParams } from 'react-router-dom';

import PresentationItem from './PresentationItem';
import PRESEN from './presentations.json';
import Menu from '../../../Menu/menu';
import Footer from '../../../Footer/footer.js';
import SimpleReactLightbox from 'simple-react-lightbox';

const Presentation = () => {
  const userId = useParams().userId;
  const loadedPlaces = PRESEN.filter((place) => place.creator === userId);
  return (
    <div>
      <Menu />
      <div className='logoback' style={{ width: '100%' }}>
        <div style={{ width: '100%', height: '15px' }}></div>
        <SimpleReactLightbox>
          <PresentationItem items={loadedPlaces} />
        </SimpleReactLightbox>
        <Footer />
      </div>
    </div>
  );
};

export default Presentation;
