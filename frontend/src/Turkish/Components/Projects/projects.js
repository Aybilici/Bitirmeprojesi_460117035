import React from 'react';
import Slider from './Slider/slider';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Logo from '../../../logos/logoco2.jpg';
import logo2 from '../../../images/classroom.png';
import logo4 from '../../../images/mortarboard.png';
import logo1 from '../../../images/projection.png';
import logo3 from '../../../images/award.png';
import Mavi from '../../../logos/logoco.jpg';
import Menu from '../../Menu/menu';
import Footer from '../../Footer/footer';
import PROJECT from './projectpages/projectHome.json';
import ProjectHome from './projectpages/ProjectHome';
import Presentation from './presentationpages/presentationHome.json';
import PresentationHome from './presentationpages/PresentationHome';
import Student from './studentpages/studentHome.json';
import StudentHome from './studentpages/StudentHome';
import SliderList from './Slider/slider.json';

class Projeler extends React.Component {
  componentDidMount() {
    document.title = 'Projeler';
  }
  render() {
    return (
      <div>
        <Menu />
        <div className='logoback' style={{ width: '100%' }}>
          <div style={{ width: '100%', height: '15px' }}></div>
          <Container>
            <Slider data={SliderList} />
            <Row
              className='progs'
              style={{
                textAlign: 'center',
                border: '10px #ffc900 solid',
                marginTop: '130px',
              }}
            >
              <div
                style={{
                  maxWidth: '50%',
                  height: '75px',
                  margin: '-150px auto',
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
                  margin: '-100px auto 0px auto',
                  borderRadius: '10px',
                  color: 'white',
                }}
              >
                <h3>Nelere Yapıyoruz?</h3>
              </div>
              <Col sm={3}>
                <div
                  style={{
                    marginBottom: '15px',
                    marginTop: '15px',
                    padding: '20px 10px 10px 10px',
                    borderTop: '10px solid #ffc900 ',
                    backgroundColor: '#2855ac',
                    borderRadius: '10px',
                  }}
                >
                  <img
                    src={Mavi}
                    alt='mavi'
                    width='40px'
                    height='40px'
                    style={{
                      position: 'absolute',
                      right: '0',
                      left: '0',
                      margin: '-45px auto 0px auto',
                      zIndex: '1',
                      borderRadius: '50%',
                      border: '5px solid #ffc900',
                    }}
                  />
                  <div style={{ textAlign: 'center' }}>
                    <span
                      style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        color: 'white',
                      }}
                    >
                      Projeler
                    </span>
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                      maxWidth: '100%',
                      margin: '30px auto',
                    }}
                  >
                    <img
                      src={logo1}
                      alt='unity'
                      style={{
                        maxWidth: '100%',
                      }}
                    />
                  </div>

                  <h5
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    +1.000
                  </h5>
                </div>
              </Col>
              <Col sm={3}>
                <div
                  style={{
                    marginBottom: '15px',
                    marginTop: '15px',
                    padding: '20px 10px 10px 10px',
                    borderTop: '10px solid #ffc900 ',
                    backgroundColor: '#2855ac',
                    borderRadius: '10px',
                  }}
                >
                  <img
                    src={Mavi}
                    alt='mavi'
                    width='40px'
                    height='40px'
                    style={{
                      position: 'absolute',
                      right: '0',
                      left: '0',
                      margin: '-45px auto 0px auto',
                      zIndex: '1',
                      borderRadius: '50%',
                      border: '5px solid #ffc900',
                    }}
                  />
                  <div style={{ textAlign: 'center' }}>
                    <span
                      style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        color: 'white',
                      }}
                    >
                      Sunumlar
                    </span>
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                      maxWidth: '100%',
                      margin: '30px auto',
                    }}
                  >
                    <img
                      src={logo2}
                      alt='unity'
                      style={{
                        maxWidth: '100%',
                      }}
                    />
                  </div>

                  <h5
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    +1.000
                  </h5>
                </div>
              </Col>
              <Col sm={3}>
                <div
                  style={{
                    marginBottom: '15px',
                    marginTop: '15px',
                    padding: '20px 10px 10px 10px',
                    borderTop: '10px solid #ffc900 ',
                    backgroundColor: '#2855ac',
                    borderRadius: '10px',
                  }}
                >
                  <img
                    src={Mavi}
                    alt='mavi'
                    width='40px'
                    height='40px'
                    style={{
                      position: 'absolute',
                      right: '0',
                      left: '0',
                      margin: '-45px auto 0px auto',
                      zIndex: '1',
                      borderRadius: '50%',
                      border: '5px solid #ffc900',
                    }}
                  />
                  <div style={{ textAlign: 'center' }}>
                    <span
                      style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        color: 'white',
                      }}
                    >
                      Başarılar
                    </span>
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                      maxWidth: '100%',
                      margin: '30px auto',
                    }}
                  >
                    <img
                      src={logo3}
                      alt='unity'
                      style={{
                        maxWidth: '100%',
                      }}
                    />
                  </div>

                  <h5
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    +1.000
                  </h5>
                </div>
              </Col>
              <Col sm={3}>
                <div
                  style={{
                    marginBottom: '15px',
                    marginTop: '15px',
                    padding: '20px 10px 10px 10px',
                    borderTop: '10px solid #ffc900 ',
                    backgroundColor: '#2855ac',
                    borderRadius: '10px',
                  }}
                >
                  <img
                    src={Mavi}
                    alt='mavi'
                    width='40px'
                    height='40px'
                    style={{
                      position: 'absolute',
                      right: '0',
                      left: '0',
                      margin: '-45px auto 0px auto',
                      zIndex: '1',
                      borderRadius: '50%',
                      border: '5px solid #ffc900',
                    }}
                  />
                  <div style={{ textAlign: 'center' }}>
                    <span
                      style={{
                        fontWeight: 'bold',
                        fontSize: '18px',
                        color: 'white',
                      }}
                    >
                      Mezunlar
                    </span>
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                      maxWidth: '100%',
                      margin: '30px auto',
                    }}
                  >
                    <img
                      src={logo4}
                      alt='unity'
                      style={{
                        maxWidth: '100%',
                      }}
                    />
                  </div>

                  <h5
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    +1.000
                  </h5>
                </div>
              </Col>
            </Row>
            <Row
              className='ogrendik'
              style={{
                marginTop: '160px',
                border: '10px #ffc900 solid',
                padding: '30px',
              }}
            >
              <ProjectHome data={PROJECT} />
            </Row>

            <Row
              className='ogrendik'
              style={{
                marginTop: '130px',
                border: '10px #ffc900 solid',
                padding: '30px',
              }}
            >
              <PresentationHome data={Presentation} />
            </Row>
            <Row
              className='ogrendik'
              style={{
                marginTop: '130px',
                border: '10px #ffc900 solid',
                padding: '30px',
              }}
            >
              <StudentHome data={Student} />
            </Row>
          </Container>{' '}
          <Footer />
        </div>
      </div>
    );
  }
}
export default Projeler;
