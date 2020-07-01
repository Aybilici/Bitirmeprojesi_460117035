import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Logo from '../../../../logos/logoco2.jpg';
import GForm from './maltepe/application';
import AForm from './ankara/application';
import Menu from '../../../Menu/menu';
import Footer from '../../../Footer/footer';
import Mavi from '../../../../logos/Mavi.jpg';
import Bas from '../../../../images/clipboard.png';
import Bas3 from '../../../../images/stamp.png';
import Bas5 from '../../../../images/curriculum.png';
import Bas6 from '../../../../images/work.png';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

class Volunteer extends React.Component {
  componentDidMount() {
    document.title = 'Volunteer Internship';
  }

  render() {
    return (
      <div>
        <Menu />
        <div className='logoback' style={{ width: '100%' }}>
          <div style={{ width: '100%', height: '15px' }}></div>
          <div className='basvuru'>
            <Container>
              <div
                className='progs'
                style={{
                  border: '10px #ffc900 solid',
                  marginTop: '50px',
                }}
              >
                <Row>
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
                    <h3>Volunteer Intern</h3>
                  </div>
                  <Col sm={12}>
                    <div
                      style={{
                        textAlign: 'center',

                        height: '100%',
                        margin: ' 20px auto',
                      }}
                    >
                      <p>
                        fsddfa afsd asdf sadfdsaf dsafds fasd fdasf dsasdafdsa
                        fsads fasdfdsfsddfa afsd asdf sadfdsaf dsafds fasd fdasf
                        dsasdafdsa fsads fasdfdssdfdsfsddfa afsd asdf sadfdsaf
                        dsafds fasd fdasf dsasdafdsa fsads fasdfds
                      </p>
                    </div>
                  </Col>
                  <Row
                    style={{
                      textAlign: 'center',
                      width: '100%',
                      margin: '0px auto',
                    }}
                  >
                    <Col sm={2}>
                      <img src={Bas} alt='das' />
                      <div
                        style={{
                          backgroundColor: '#2855ac',
                          padding: '5px',
                          color: '#ffffff',
                          margin: '10px 0px',
                          borderRadius: '10px',
                        }}
                      >
                        Make an application
                      </div>
                    </Col>
                    <Col sm={1}>
                      <div className='rightbottom' alt='das'></div>
                    </Col>
                    <Col sm={1}>
                      <img
                        src={Bas3}
                        alt='das'
                        style={{ margin: '30px 0px 0px 0px' }}
                      />
                      <div
                        style={{
                          color: '#2855ac',
                          fontWeight: 'bold',
                        }}
                      >
                        Ratification
                      </div>
                    </Col>
                    <Col sm={1}>
                      <div className='rightbottom' alt='das'></div>
                    </Col>
                    <Col sm={2}>
                      <img src={Bas5} alt='das' />
                      <div
                        style={{
                          backgroundColor: '#2855ac',
                          padding: '5px',
                          color: '#ffffff',
                          margin: '10px 0px',
                          borderRadius: '10px',
                        }}
                      >
                        CV Send
                      </div>
                    </Col>
                    <Col sm={1}>
                      <div className='rightbottom' alt='das'></div>
                    </Col>
                    <Col sm={1}>
                      <img
                        src={Bas3}
                        alt='das'
                        style={{ margin: '30px 0px 0px 0px' }}
                      />
                      <div
                        style={{
                          color: '#2855ac',
                          fontWeight: 'bold',
                        }}
                      >
                        Ratification
                      </div>
                    </Col>
                    <Col sm={1}>
                      <div className='rightbottom' alt='das'></div>
                    </Col>
                    <Col sm={2}>
                      <img src={Bas6} alt='das' />
                      <div
                        style={{
                          backgroundColor: '#2855ac',
                          padding: '5px',
                          color: '#ffffff',
                          margin: '10px 0px',
                          borderRadius: '10px',
                        }}
                      >
                        Work now
                      </div>
                    </Col>
                  </Row>
                  <Col sm={12}>
                    <div
                      style={{
                        width: '90%',
                        margin: '20px auto',
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
                        margin: '-45px auto 0px auto',
                        zIndex: '1',
                        borderRadius: '50%',
                        border: '5px solid #2855ac',
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col sm={6}>
                    <Accordion>
                      <Card
                        style={{
                          border: 'none',
                          backgroundColor: 'none',
                          margin: '5px',
                        }}
                      >
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey='0'
                          style={{}}
                          className='ahmet'
                        >
                          İstanbul
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey='0'>
                          <div
                            className='katilkutu'
                            style={{ border: '5px #2855ac solid' }}
                          >
                            <Card.Body>
                              <div>
                                <div
                                  style={{
                                    backgroundColor: 'white',
                                  }}
                                >
                                  <GForm />
                                </div>
                              </div>
                            </Card.Body>
                          </div>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Col>
                  <Col sm={6}>
                    <Accordion>
                      <Card
                        style={{
                          border: 'none',
                          backgroundColor: 'none',
                          margin: '5px',
                        }}
                      >
                        <Accordion.Toggle
                          as={Card.Header}
                          eventKey='0'
                          style={{}}
                          className='ahmet'
                        >
                          Ankara
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey='0'>
                          <div
                            className='katilkutu'
                            style={{ border: '5px #2855ac solid' }}
                          >
                            <Card.Body>
                              <div>
                                <div
                                  style={{
                                    backgroundColor: 'white',
                                  }}
                                >
                                  <AForm />
                                </div>
                              </div>
                            </Card.Body>
                          </div>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Volunteer;
