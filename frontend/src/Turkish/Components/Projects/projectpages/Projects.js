import React from 'react';
import Container from 'react-bootstrap/Container';
import ProjeList from './ProjectList';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import PROJECTS from './projectList.json';
import Menu from '../../../Menu/menu';
import Footer from '../../../Footer/footer.js';
import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <div>
      <Menu />
      <div className='logoback' style={{ width: '100%' }}>
        <div style={{ width: '100%', height: '15px' }}></div>
        <Container>
          <Row style={{ padding: '0px 15px' }}>
            <Col xs={6}>
              <Link to='/Sunumlar'>
                <button className='button'>
                  <span>Sunumlar</span>
                </button>
              </Link>
            </Col>
            <Col xs={6} style={{ textAlign: 'end' }}>
              <Link to='/BasariOlanlar'>
                <button className='button2'>
                  <span>Başarılılar</span>
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
        <ProjeList data={PROJECTS} />
        <Footer />
      </div>
    </div>
  );
};

export default Project;
