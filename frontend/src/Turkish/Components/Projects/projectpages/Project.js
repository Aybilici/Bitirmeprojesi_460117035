import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceItem from './ProjectItem';
import PROJECTS from './projects.json';
import Menu from '../../../Menu/menu';
import Footer from '../../../Footer/footer.js';
import SimpleReactLightbox from 'simple-react-lightbox';

const Project = () => {
  const userId = useParams().userId;
  const loadedPlaces = PROJECTS.filter((place) => place.creator === userId);
  return (
    <div>
      <Menu />
      <div className='logoback' style={{ width: '100%' }}>
        <div style={{ width: '100%', height: '15px' }}></div>
        <SimpleReactLightbox>
          <PlaceItem items={loadedPlaces} />
        </SimpleReactLightbox>
        <Footer />
      </div>
    </div>
  );
};

export default Project;
