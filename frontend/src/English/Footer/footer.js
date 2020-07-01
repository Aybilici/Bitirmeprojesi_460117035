import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';
import { SocialIcon } from 'react-social-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Notifications from 'react-notify-toast';
import Landing from './Subscribe/Landing';
import Open from './open';
class Home extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <div style={{ position: 'absolute', zIndex: '20' }}></div>
        <div className='lacivert'></div>
        <div className='ytopright'></div>
        <Notifications />
        <div className='abone'>
          <div className='icerik'>
            <h1
              className='abonehel'
              style={{
                color: '#3f51b5',
                textAlign: 'center',
                fontfamily: 'Courier New, Courier, monospace',
              }}
            >
              SUBSCRIBE!
            </h1>
            Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz.
            Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar
            uzanan 2000 yıllık bir geçmişi vardır.
            <Landing />
          </div>
        </div>
        <div className='ybottomleft'></div>
        <div className='footer'>
          <Container>
            <Row className='footer2'>
              <Col sm className='ilk'>
                <Open />
              </Col>
              <div className='cas'></div>
              <Col sm className='orta'>
                <SocialIcon
                  network='facebook'
                  url='https://www.facebook.com/Turkcell'
                  style={{ height: 35, width: 35 }}
                  fgColor='white'
                  bgColor='none'
                  className='socailicon'
                />
                <SocialIcon
                  network='twitter'
                  url='https://twitter.com/Turkcell'
                  style={{ height: 35, width: 35 }}
                  fgColor='white'
                  bgColor='none'
                  className='socailicon2'
                />
                <SocialIcon
                  network='instagram'
                  url='https://www.instagram.com/turkcell/'
                  style={{ height: 35, width: 35 }}
                  fgColor='white'
                  bgColor='none'
                  className='socailicon3'
                />
                <SocialIcon
                  network='linkedin'
                  url='https://www.linkedin.com/company/turkcell/'
                  style={{ height: 35, width: 35 }}
                  fgColor='white'
                  bgColor='none'
                  className='socailicon4'
                />
                <SocialIcon
                  network='youtube'
                  url='https://www.youtube.com/Turkcell'
                  style={{ height: 35, width: 35 }}
                  fgColor='white'
                  bgColor='none'
                  className='socailicon5'
                />
              </Col>
              <div className='cas'></div>
              <Col sm className='son'>
                © 2020 Turkcell Internship Work
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
