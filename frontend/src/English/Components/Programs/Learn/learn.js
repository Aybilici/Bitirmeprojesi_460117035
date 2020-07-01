import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import prog1 from '../../../../images/udemy.png';
import Logo from '../../../../logos/logoco2.jpg';
import Mavi from '../../../../logos/Mavi.jpg';
import Menu from '../../../Menu/menu';
import Footer from '../../../Footer/footer';
import LearnList from './learnList.json';

class Learns extends React.Component {
  componentDidMount() {
    document.title = 'Learns';
  }
  render() {
    return (
      <div className='programlar'>
        <Menu />
        <div className='logoback' style={{ width: '100%' }}>
          <div style={{ width: '100%', height: '15px' }}></div>
          <Container style={{ marginTop: '30px' }}>
            <div
              style={{
                maxWidth: '50%',
                height: '75px',
                margin: '-110px auto',
                position: 'absolute',
                textAlign: 'center',
                zIndex: '2',
                right: '0',
                left: '0',
              }}
            >
              <img
                src={Logo}
                alt='logo'
                style={{
                  borderRadius: '55%',
                  backgroundColor: 'white',
                  border: '5px solid #fff',
                }}
              />
            </div>
            <div
              style={{
                maxWidth: '270px',
                backgroundColor: '#ffc900',
                position: 'absolute',
                padding: '40px 5px 5px 5px',
                textAlign: 'center',
                zIndex: '1',
                right: '0',
                left: '0',
                margin: '-60px auto 0px auto',
                borderRadius: '10px',
                color: 'white',
              }}
            >
              <h3>What We Learn?</h3>
            </div>
            <Row
              className='ogrendik'
              style={{
                paddingTop: '50px',
                marginTop: '100px',
                position: 'relative',
                border: '10px #ffc900 solid',
              }}
            >
              {' '}
              {LearnList.map((learn, index) => {
                return (
                  <Col sm={4} key={index}>
                    <div
                      style={{
                        width: '60%',
                        margin: '35px auto',
                        backgroundColor: '#2855ac',
                        height: '10px',
                        borderRadius: '20px',
                      }}
                    ></div>
                    <img
                      src={Mavi}
                      alt='mavi'
                      width='40px'
                      height='40px'
                      style={{
                        position: 'absolute',
                        right: '0',
                        left: '0',
                        margin: '-60px auto 0px auto',
                        zIndex: '1',
                        borderRadius: '50%',
                        border: '5px solid #2855ac',
                      }}
                    />
                    <div
                      style={{
                        height: '100%',
                        marginBottom: '15px',
                      }}
                    >
                      <img
                        src={prog1}
                        alt='unity'
                        style={{ maxWidth: '100%' }}
                      />
                      <p
                        style={{
                          margin: '0px 20px 0px 20px',
                          textAlign: 'justify',
                        }}
                      >
                        {learn.about}
                      </p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Learns;
