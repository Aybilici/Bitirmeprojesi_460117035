import React from 'react';
import { useParams } from 'react-router-dom';

import Slider from './sliderpage';
import PROJECTS from './sliderList.json';
import Menu from '../../../Menu/menu';
import Footer from '../../../Footer/footer.js';
import SimpleReactLightbox from 'simple-react-lightbox';

const Sliders = () => {
  const userId = useParams().userId;
  const loadedPlaces = PROJECTS.filter((place) => place.creator === userId);
  return (
    <div>
      <Menu />
      <div className='logoback' style={{ width: '100%' }}>
        <div style={{ width: '100%', height: '15px' }}></div>
        <SimpleReactLightbox>
          <Slider items={loadedPlaces} />
        </SimpleReactLightbox>
        <Footer />
      </div>
    </div>
  );
};

export default Sliders;
