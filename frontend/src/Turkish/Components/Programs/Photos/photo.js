import React from 'react';

import Photo from './photos';

import PHOTOS from './photoList.json';
import Menu from '../../../Menu/menu';
import Footer from '../../../Footer/footer.js';
import SimpleReactLightbox from 'simple-react-lightbox';

const Photos = () => {
  return (
    <div>
      <Menu />
      <div className='logoback' style={{ width: '100%' }}>
        <div style={{ width: '100%', height: '15px' }}></div>
        <SimpleReactLightbox>
          <Photo data={PHOTOS} />
        </SimpleReactLightbox>
        <Footer />
      </div>
    </div>
  );
};

export default Photos;
