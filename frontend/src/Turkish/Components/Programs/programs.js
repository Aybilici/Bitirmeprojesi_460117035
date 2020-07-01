import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import prog1 from '../../../images/unity2.jpg';
import prog2 from '../../../images/react.jpg';
import prog3 from '../../../images/aspnet.png';
import ogren3 from '../../../images/github.png';
import ogren1 from '../../../images/help.jpg';
import ogren2 from '../../../images/udemy.png';
import photo from '../../../images/picture.png';
import logo2 from '../../../images/worker.png';
import logo4 from '../../../images/hand.png';
import logo1 from '../../../images/clipboard.png';
import logo3 from '../../../images/browser-window.png';
import Mavi from '../../../logos/logoco.jpg';
import Logo from '../../../logos/logoco2.jpg';
import Mavi2 from '../../../logos/Mavi.jpg';
import Menu from '../../Menu/menu';
import Footer from '../../Footer/footer';
import Memnunlar from './Satisfieds/StudentHome';
import Memnun from './Satisfieds/studentHome.json';
import { Link } from 'react-router-dom';

class Programlar extends React.Component {
  componentDidMount() {
    document.title = 'Programlar';
  }
  state = {
    collapseID: '',
  };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
  };
  render() {
    return (
      <div className='programlar'>
        <Menu />
        <div className='logoback' style={{ width: '100%' }}>
          <div style={{ width: '100%', height: '15px' }}></div>
          <Container>
            <Row
              className='progs'
              style={{
                textAlign: 'center',
                border: '10px #ffc900 solid',
                marginTop: '100px',
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
                      Başvurular
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
                      Çalışanlar
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
                      Programlar
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
                      Müşteriler
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
                marginTop: '150px',
                border: '10px #ffc900 solid',
                padding: '30px',
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
                <h3>Nelere Çalışıyoruz?</h3>
              </div>
              <Col sm={4}>
                <div>
                  <div
                    style={{
                      width: '100%',
                      margin: '35px auto',
                      backgroundColor: '#2855ac',
                      height: '10px',
                      borderRadius: '20px',
                    }}
                  ></div>
                  <img
                    src={Mavi2}
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
                  <img
                    src={prog1}
                    alt='unity'
                    style={{
                      maxWidth: '100%',
                      marginBottom: '15px',
                      border: '5px solid #2855ac',
                    }}
                  />
                  <p style={{ textAlign: 'justify' }}>
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                    metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
                    hurufat numune kitabı oluşturmak üzere bir yazı galerisini
                    alarak karıştırdığı 1500'lerden beri endüstri standardı
                    sahte metinler olarak kullanılmıştır.
                  </p>
                </div>
              </Col>
              <Col sm={4}>
                <div
                  style={{
                    marginBottom: '15px',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      margin: '35px auto',
                      backgroundColor: '#2855ac',
                      height: '10px',
                      borderRadius: '20px',
                    }}
                  ></div>
                  <img
                    src={Mavi2}
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
                  <img
                    src={prog2}
                    alt='unity'
                    style={{
                      maxWidth: '100%',
                      marginBottom: '15px',
                      border: '5px solid #2855ac',
                    }}
                  />
                  <p style={{ textAlign: 'justify' }}>
                    Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı
                    zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
                    1960'larda Lorem Ipsum pasajları da içeren yapraklarının
                    yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem
                    Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
                    popüler olmuştur.
                  </p>
                </div>
              </Col>
              <Col sm={4}>
                <div
                  style={{
                    marginBottom: '15px',

                    height: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      margin: '35px auto',
                      backgroundColor: '#2855ac',
                      height: '10px',
                      borderRadius: '20px',
                    }}
                  ></div>
                  <img
                    src={Mavi2}
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
                      width: '100%',
                      textAlign: 'center',
                      marginBottom: '15px',
                      border: '5px solid #2855ac',
                    }}
                  >
                    <img
                      src={prog3}
                      alt='unity'
                      style={{
                        maxWidth: '100%',
                        height: '150px',
                      }}
                    />
                  </div>
                  <p style={{ textAlign: 'justify' }}>
                    Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
                    numune kitabı oluşturmak üzere bir yazı galerisini alarak
                    karıştırdığı 1500'lerden beri endüstri standardı sahte
                    metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını
                    sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik
                    dizgiye de sıçramıştır.
                  </p>
                </div>
              </Col>
              <Col sm={12} style={{ width: '100%', textAlign: 'center' }}>
                <div style={{ maxWidth: '100%' }}>
                  <Link to='/Calismalar'>
                    <button className='foto'>
                      <div className='lob'></div>
                      Tümünü Gör...
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
            <Row
              className='ogrendik'
              style={{
                marginTop: '180px',
                border: '10px #ffc900 solid',
                padding: '30px',
              }}
            >
              <div
                style={{
                  maxWidth: '50%',
                  height: '75px',
                  margin: '-180px auto',
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
                  margin: '-130px auto 0px auto',
                  borderRadius: '10px',
                  color: 'white',
                }}
              >
                <h3>Nelere Öğreniyoruz?</h3>
              </div>
              <Col sm={4}>
                <div>
                  <div
                    style={{
                      width: '100%',
                      margin: '35px auto',
                      backgroundColor: '#2855ac',
                      height: '10px',
                      borderRadius: '20px',
                    }}
                  ></div>
                  <img
                    src={Mavi2}
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
                  <img
                    src={ogren1}
                    alt='unity'
                    style={{
                      maxWidth: '100%',
                      marginBottom: '15px',
                      border: '5px solid #2855ac',
                    }}
                  />
                  <p style={{ textAlign: 'justify' }}>
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                    metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
                    hurufat numune kitabı oluşturmak üzere bir yazı galerisini
                    alarak karıştırdığı 1500'lerden beri endüstri standardı
                    sahte metinler olarak kullanılmıştır.
                  </p>
                </div>
              </Col>
              <Col sm={4}>
                <div
                  style={{
                    marginBottom: '15px',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      margin: '35px auto',
                      backgroundColor: '#2855ac',
                      height: '10px',
                      borderRadius: '20px',
                    }}
                  ></div>
                  <img
                    src={Mavi2}
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
                  <img
                    src={ogren2}
                    alt='unity'
                    style={{
                      maxWidth: '100%',
                      marginBottom: '15px',
                      border: '5px solid #2855ac',
                    }}
                  />
                  <p style={{ textAlign: 'justify' }}>
                    Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı
                    zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
                    1960'larda Lorem Ipsum pasajları da içeren yapraklarının
                    yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem
                    Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
                    popüler olmuştur.
                  </p>
                </div>
              </Col>
              <Col sm={4}>
                <div
                  style={{
                    marginBottom: '15px',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      margin: '35px auto',
                      backgroundColor: '#2855ac',
                      height: '10px',
                      borderRadius: '20px',
                    }}
                  ></div>
                  <img
                    src={Mavi2}
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
                  <img
                    src={ogren3}
                    alt='unity'
                    style={{
                      maxWidth: '100%',
                      marginBottom: '15px',
                      border: '5px solid #2855ac',
                    }}
                  />
                  <p style={{ textAlign: 'justify' }}>
                    Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı
                    zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
                    1960'larda Lorem Ipsum pasajları da içeren yapraklarının
                    yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem
                    Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
                    popüler olmuştur.
                  </p>
                </div>
              </Col>
              <Col sm={12} style={{ width: '100%', textAlign: 'center' }}>
                <div style={{ maxWidth: '100%' }}>
                  <Link to='/Ogrenmeler' style={{ color: 'white' }}>
                    <button className='foto'>
                      <div className='lob'></div>
                      Tümünü Gör...
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
            <Memnunlar data={Memnun} />
            <Row
              className='ogrendik'
              style={{
                marginTop: '150px',
                border: '10px #ffc900 solid',
                padding: '30px',
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
                <h3>Fotoğraflar</h3>
              </div>
              <Col sm={4}>
                <img
                  src={photo}
                  alt='unity'
                  style={{
                    maxWidth: '100%',
                    marginTop: '15px',
                  }}
                />
              </Col>
              <Col sm={8} style={{ marginTop: '40px' }}>
                <p style={{ textAlign: 'justify' }}>
                  Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                  metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
                  hurufat numune kitabı oluşturmak üzere bir yazı galerisini
                  alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
                  metinler olarak kullanılmıştır.
                </p>

                <div style={{ maxWidth: '100%', textAlign: 'center' }}>
                  <Link to='/Fotograflar' style={{ color: 'white' }}>
                    <button className='foto'>
                      <div className='lob'></div>
                      Tümünü Gör...
                    </button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Programlar;
