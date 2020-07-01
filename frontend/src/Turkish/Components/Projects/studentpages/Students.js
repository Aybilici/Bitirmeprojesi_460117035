import React from 'react';

import StudentList from './StudentList';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import STUDENTS from './studentList.json';
import Menu from '../../../Menu/menu';
import Footer from '../../../Footer/footer.js';

const Students = () => {
  return (
    <div>
      <Menu />
      <div className='logoback' style={{ width: '100%' }}>
        <div style={{ width: '100%', height: '15px' }}></div>
        <Container>
          <Row style={{ padding: '0px 15px' }}>
            <Col xs={6}>
              <Link to='/Proje'>
                <button className='button'>
                  <span>Projeler</span>
                </button>
              </Link>
            </Col>
            <Col xs={6} style={{ textAlign: 'end' }}>
              <Link to='/Sunumlar'>
                <button className='button2'>
                  <span>Sunumlar</span>
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
        <StudentList data={STUDENTS} />
        <Footer />
      </div>
    </div>
  );
};

export default Students;
