import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ileti from '../../../images/iletisim.png';
import Logo from '../../../logos/logoco2.jpg';
import Menu from '../../Menu/menu';
import Footer from '../../Footer/footer';
import './contact.css';
//import Map from './map.js';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Maltepe from './maltepe/contact';
import Ankara from './ankara/contact';

class iletisim extends React.Component {
  componentDidMount() {
    document.title = 'Contacts';
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
                    <h3>Contacts</h3>
                  </div>
                  <Col sm={5}>
                    <img src={ileti} alt='ogrencikatil' width='100%' />
                  </Col>
                  <Col sm={7} className='main'>
                    Genel Müdürlük ve Plazalarımızın iletişim bilgilerine
                    aşağıdan ulaşabilirsiniz. <br />
                    <span style={{ fontWeight: 'bold', color: '#2855ac' }}>
                      NOT:
                    </span>{' '}
                    Bize ulaşmadan sıkı sorulan soruları bakabilirsiniz. Aşağıda
                    lüften tıklaya basabilirsin(Tıkladığında en alttaki sorulara
                    bakabilirsin.)...
                    <div
                      style={{
                        textAlign: 'center',
                        width: '100%',
                        margin: '20px 0px 20px',
                      }}
                    >
                      <Link to='/staj'>
                        <button className='foto' style={{ margin: '0px auto' }}>
                          Questions
                        </button>
                      </Link>
                    </div>
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
                          id='anne'
                        >
                          İstanbul
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey='0'>
                          <div
                            className='katilkutu'
                            style={{ border: '5px #2855ac solid' }}
                          >
                            <Card.Body>
                              <Maltepe />
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
                          id='anne'
                        >
                          Ankara
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey='0'>
                          <div
                            className='katilkutu'
                            style={{ border: '5px #2855ac solid' }}
                          >
                            <Card.Body>
                              <Ankara />
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
export default iletisim;
