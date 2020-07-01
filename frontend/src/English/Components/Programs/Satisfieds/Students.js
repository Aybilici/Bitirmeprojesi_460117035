import React from 'react';

import StudentList from './StudentList';

import STUDENTS from './studentList.json';
import Menu from '../../../Menu/menu';
import Footer from '../../../Footer/footer.js';

const Student = () => {
  return (
    <div>
      <Menu />
      <div className='logoback' style={{ width: '100%' }}>
        <div style={{ width: '100%', height: '15px' }}></div>
        <StudentList data={STUDENTS} />
        <Footer />
      </div>
    </div>
  );
};

export default Student;
