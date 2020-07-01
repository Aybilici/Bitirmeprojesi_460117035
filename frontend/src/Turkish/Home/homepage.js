import React from 'react';
//import Haberler from "./haberler/haberler";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Logo from '../../logos/logoco2.jpg';
import logo2 from '../../images/starting.jpg';
import logo4 from '../../images/develop2.jpg';
import logo1 from '../../images/develop.jpg';
import logo3 from '../../images/interns_blog.png';
import ogrkat from '../../images/ogrenkatil.jpg';
import sunum from '../../images/chart.png';
import basari from '../../images/prize.png';
import proje from '../../images/cash-flow.png';
import photo from '../../images/picture.png';
import Mavi from '../../logos/logoco.jpg';
import New from '../../images/newspaper.png';
import Duy from '../../images/megaphone.png';
import Etk from '../../images/tours.png';
import Map from '../../images/Slide19.jpg';
import { Link } from 'react-router-dom';
import NewsHome from '../Components/News/newsHome';
import NewsHomes from '../Components/News/newsHome.json';
import Activities from './Activities/activities';
import Announcements from './Announcements/announcements';

class anasayfa extends React.Component {
  componentDidMount() {
    document.title = 'Anasayfa';
  }
  render() {
    return (
      <div className='App'>
        <Container>
          <div style={{ backgroundColor: 'white', borderRadius: '15px' }}>
            <Row
              className='progs'
              style={{
                border: '10px #ffc900 solid',
                marginTop: '100px',
                marginBottom: '60px',
                marginLeft: '0px',
                marginRight: '0px',
                padding: '15px',
              }}
            >
              <div
                style={{
                  maxWidth: '50%',
                  height: '75px',
                  margin: '-135px auto',
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
                  margin: '-85px auto 0px auto',
                  borderRadius: '10px',
                  color: 'white',
                }}
              >
                <h3>Hoşgeldiniz!</h3>
              </div>

              <div
                style={{
                  maxWidth: '100%',
                  height: '100%',
                  boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                  margin: '25px 0px',
                  padding: '15px 15px 15px 15px',
                  overflow: 'auto',
                }}
              >
                <div
                  style={{
                    float: 'left',
                    padding: '15px',
                    backgroundColor: 'white',
                  }}
                  className='resimler'
                >
                  <img
                    src={logo1}
                    alt='...'
                    width='350px'
                    height='200px'
                    style={{}}
                    className='resimler2'
                  />
                </div>

                <div
                  className='yazi'
                  style={{
                    padding: '10px',
                    textAlign: 'justify',
                  }}
                >
                  <h4>Nereden Gelir?</h4>
                  Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                  oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin
                  edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
                  Virginia'daki Hampden-Sydney College'dan Latince profesörü
                  Richard McClintock, bir Lorem Ipsum pasajında geçen ve
                  anlaşılması en güç sözcüklerden biri olan 'consectetur'
                  sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin
                  bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45
                  tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi
                  ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı
                  bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir
                  tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum
                  pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32
                  sayılı bölümdeki bir satırdan gelmektedir. 1500'lerden beri
                  kullanılmakta olan standard Lorem Ipsum metinleri ilgilenenler
                  için yeniden üretilmiştir. Çiçero tarafından yazılan 1.10.32
                  ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden alınan
                  İngilizce sürümleri eşliğinde özgün biçiminden yeniden
                  üretilmiştir.
                  <div
                    style={{
                      float: 'right',
                      padding: '15px',
                      backgroundColor: 'white',
                    }}
                    className='resimler'
                  >
                    <img
                      src={logo4}
                      alt='...'
                      width='350px'
                      height='200px'
                      style={{}}
                      className='resimler2'
                    />
                  </div>
                  Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                  oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin
                  edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
                  Virginia'daki Hampden-Sydney College'dan Latince profesörü
                  Richard McClintock, bir Lorem Ipsum pasajında geçen ve
                  anlaşılması en güç sözcüklerden biri olan 'consectetur'
                  sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin
                  bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45
                  tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi
                  ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı
                  bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir
                  tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum
                  pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32
                  sayılı bölümdeki bir satırdan gelmektedir. 1500'lerden beri
                  kullanılmakta olan standard Lorem Ipsum metinleri ilgilenenler
                  için yeniden üretilmiştir. Çiçero tarafından yazılan 1.10.32
                  ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden alınan
                  İngilizce sürümleri eşliğinde özgün biçiminden yeniden
                  üretilmiştir.
                </div>
              </div>
              <Col sm={12} style={{ marginBottom: '20px' }}>
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
              <div style={{ marginBottom: '40px', height: '100%' }}>
                <h3 style={{ textAlign: 'center' }}>
                  Yıldızının Parlayacağı Başvuru Süreci Burada
                </h3>
                <img
                  src={Map}
                  alt='roadmap-all.png'
                  width='100%'
                  height='100%'
                />
              </div>
              <Col sm={12} style={{ marginBottom: '20px' }}>
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
              <Col sm={3}>
                <div
                  className='content-item'
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
                      Geliştirmek
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

                  <p
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                    metinlerdir. Lorem Ipsum, galerisini alarak karıştırdığı
                  </p>
                </div>
              </Col>
              <Col sm={3}>
                <div
                  className='content-item'
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
                      Fikir Bulmak
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

                  <p
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                    metinlerdir. üzere bir yazı galerisini alarak karıştırdığı
                  </p>
                </div>
              </Col>
              <Col sm={3}>
                <div
                  className='content-item'
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
                      Arkadaşlar Edinmek
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

                  <p
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
                    numune kitabı oluşturmak üzere bir yazı galerisini alarak
                    karıştırdığı
                  </p>
                </div>
              </Col>
              <Col sm={3}>
                <div
                  className='content-item'
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
                      Çok Çalışmak
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

                  <p
                    style={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'white',
                    }}
                  >
                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                    metinlerdir. Lorem Ipsum, adı bilinmeyen.
                  </p>
                </div>
              </Col>
              <Col sm={12} style={{ marginBottom: '20px' }}>
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
              <Col sm={4}>
                <div
                  style={{
                    border: '5px solid #ffc900',
                    borderRadius: '5px 100px 5px',
                  }}
                >
                  <img
                    src={ogrkat}
                    alt='ogrencikatil'
                    width='100%'
                    style={{ borderRadius: '5px 100px 5px' }}
                  />
                </div>
              </Col>
              <Col sm={8}>
                <div style={{ padding: '10px' }}>
                  <h3>Siz de Gel Çalışalım!</h3>
                  <p>
                    Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                    oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin
                    edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
                    Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                    oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin
                    edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
                    Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                    oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin
                    edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
                  </p>
                </div>
                <div
                  style={{
                    textAlign: 'center',
                    width: '100%',
                    margin: '20px 0px 20px',
                  }}
                >
                  <Link to='/Basvuru'>
                    <button className='foto' style={{ margin: '0px auto' }}>
                      Başvuru Yap!
                    </button>
                  </Link>
                </div>
              </Col>
              <Col sm={12} style={{ marginBottom: '20px' }}>
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
              <Col sm={3}>
                <div
                  style={{
                    marginBottom: '15px',
                    marginTop: '15px',
                    padding: '20px 20px 10px 20px',
                    borderTop: '10px solid #2855ac ',
                    borderRadius: '10px',
                    textAlign: 'center',
                    backgroundColor: '#f3d552',
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
                      border: '5px solid #2855ac',
                    }}
                  />

                  <div
                    style={{
                      textAlign: 'center',
                      maxWidth: '100%',
                      margin: '10px auto',
                    }}
                  >
                    <img
                      src={sunum}
                      alt='unity'
                      style={{
                        maxWidth: '100%',
                      }}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h4>Sunumlar</h4>
                    Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                    oluşmaz.Yaygın inancın tersine, Lorem Ipsum rastgele
                    sözcüklerden oluşmaz.
                  </div>
                  <Link to='/Sunumlar'>
                    <button className='foto'>Tümünü Gör</button>
                  </Link>
                </div>
              </Col>
              <Col sm={3}>
                <div
                  style={{
                    marginBottom: '15px',
                    marginTop: '15px',
                    padding: '20px 20px 10px 20px',
                    borderTop: '10px solid #2855ac ',
                    borderRadius: '10px',
                    textAlign: 'center',
                    backgroundColor: '#f3d552',
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
                      border: '5px solid #2855ac',
                    }}
                  />

                  <div
                    style={{
                      textAlign: 'center',
                      maxWidth: '100%',
                      margin: '10px auto',
                    }}
                  >
                    <img
                      src={basari}
                      alt='unity'
                      style={{
                        maxWidth: '100%',
                      }}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h4>Başarı Olanlar</h4>
                    Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                    oluşmaz.Ipsum rastgele sözcüklerden oluşmaz.rastgele oluşmaz
                  </div>
                  <Link to='/BasariOlanlar'>
                    <button className='foto'>Tümünü Gör</button>
                  </Link>
                </div>
              </Col>
              <Col sm={3}>
                <div
                  style={{
                    marginBottom: '15px',
                    marginTop: '15px',
                    padding: '20px 20px 10px 20px',
                    borderTop: '10px solid #2855ac ',
                    borderRadius: '10px',
                    textAlign: 'center',
                    backgroundColor: '#f3d552',
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
                      border: '5px solid #2855ac',
                    }}
                  />

                  <div
                    style={{
                      textAlign: 'center',
                      maxWidth: '100%',
                      margin: '10px auto',
                    }}
                  >
                    <img
                      src={proje}
                      alt='unity'
                      style={{
                        maxWidth: '100%',
                      }}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h4>Projeler</h4>
                    Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                    oluşmaz.Yaygın inancın tersine, Lorem Ipsum rastgele
                    sözcüklerden oluşmaz.
                  </div>
                  <Link to='/Proje'>
                    <button className='foto'>Tümünü Gör</button>
                  </Link>
                </div>
              </Col>
              <Col sm={3}>
                <div
                  style={{
                    marginBottom: '15px',
                    marginTop: '15px',
                    padding: '20px 20px 10px 20px',
                    borderTop: '10px solid #2855ac ',
                    borderRadius: '10px',
                    textAlign: 'center',
                    backgroundColor: '#f3d552',
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
                      border: '5px solid #2855ac',
                    }}
                  />

                  <div
                    style={{
                      textAlign: 'center',
                      maxWidth: '100%',
                      margin: '10px auto',
                    }}
                  >
                    <img
                      src={photo}
                      alt='unity'
                      style={{
                        maxWidth: '100%',
                      }}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <h4>Fotoğraflar</h4>
                    Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                    oluşmaz.Yaygın inancın tersine, Lorem Ipsum rastgele
                    sözcüklerden oluşmaz.
                  </div>
                  <Link to='/Fotograflar'>
                    <button className='foto'>Tümünü Gör</button>
                  </Link>
                </div>
              </Col>
              <Col sm={12} style={{ marginBottom: '20px' }}>
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
              <Col sm={4}>
                <img
                  src={New}
                  alt='new'
                  style={{
                    border: '5px solid #2855ac',
                    borderRadius: '55%',
                    left: '0',
                    right: '0',
                    marginTop: '-20px',
                    position: 'absolute',
                    margin: '0px auto',
                    zIndex: '1',
                  }}
                />
                <div
                  style={{
                    width: '100%',
                    borderRadius: '50px',
                    backgroundColor: '#2855ac',
                    fontSize: '16px',
                    height: '15px',
                    marginTop: '25px',
                    color: 'white',
                  }}
                ></div>
                <NewsHome data={NewsHomes} />
              </Col>
              <Col sm={4}>
                <img
                  src={Duy}
                  alt='new'
                  style={{
                    border: '5px solid #2855ac',

                    borderRadius: '55%',
                    left: '0',
                    right: '0',
                    marginTop: '-25px',
                    position: 'absolute',
                    margin: '0px auto',
                    zIndex: '1',
                  }}
                />
                <div
                  style={{
                    width: '100%',
                    borderRadius: '50px',
                    backgroundColor: '#2855ac',
                    fontSize: '16px',
                    height: '15px',
                    marginTop: '25px',
                    color: 'white',
                  }}
                ></div>

                <Announcements />
              </Col>
              <Col sm={4}>
                <img
                  src={Etk}
                  alt='new'
                  style={{
                    border: '5px solid #2855ac',

                    borderRadius: '55%',
                    left: '0',
                    right: '0',
                    marginTop: '-25px',
                    position: 'absolute',
                    margin: '0px auto',
                    zIndex: '1',
                  }}
                />
                <div
                  style={{
                    width: '100%',
                    borderRadius: '50px',
                    backgroundColor: '#2855ac',
                    fontSize: '16px',
                    height: '15px',
                    marginTop: '25px',
                    color: 'white',
                  }}
                ></div>
                <Activities />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default anasayfa;
