import React from 'react';

import WorkList from './workList.js';

import WORKS from './workList.json';
import Menu from '../../../Menu/menu';
import Footer from '../../../Footer/footer.js';

const Work = () => {
  return (
    <div>
      <Menu />
      <div className='logoback' style={{ width: '100%' }}>
        <div style={{ width: '100%', height: '15px' }}></div>
        <WorkList data={WORKS} />
        <Footer />
      </div>
    </div>
  );
};

export default Work;
