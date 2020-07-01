import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { FaUserPlus } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import Logo from '../../../logos/logoco2.jpg';
import Menu from '../../Menu/menu';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/footer';

class Register extends React.Component {
  componentDidMount() {
    document.title = 'Başvuru';
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
                    border: '5px solid #ffffff',
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
                <h3>Hadi Katılalım!</h3>
              </div>
              <div className='basvurubasliga'>
                Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin
                edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
              </div>

              <Row
                style={{
                  margin: '20px auto',
                  maxwidth: '70%',
                }}
              >
                <Col sm={6}>
                  <div className='kesin' style={{ color: 'white' }}>
                    <MdSchool
                      style={{
                        textAlign: 'center',
                        width: '60%',
                        height: '60%',
                        margin: '14px',
                        zIndex: '1',
                        position: 'absolute',
                      }}
                    />
                  </div>

                  <div className='gorzor'>
                    <h2
                      style={{
                        width: '60%',
                        margin: '0px auto 10px auto',
                        boxShadow: '0px 5px 15px 2px rgba(0, 0, 0, 0.2)',
                        textAlign: 'center',
                        padding: '10px',
                        backgroundColor: '#2855ac',
                        color: 'white',
                      }}
                    >
                      Zorunlu
                    </h2>
                    <p>
                      Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                      oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin
                      edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
                    </p>
                    Katılabilirler;
                    <ul className='listeler'>
                      <li>yıllık bir geçmişi vardır</li>
                      <li>Yaygın inancın tersine</li>
                      <li>
                        Lorem Ipsum rastgele sözcüklerden Lorem Ipsum rastgele
                        sözcüklerden
                      </li>
                      <li>Kökleri M.Ö. 45 tarihinden</li>
                      <li>yıllık bir geçmişi vardır</li>
                      <li>Yaygın inancın tersine</li>
                      <li>Lorem Ipsum rastgele sözcüklerden</li>
                      <li>Kökleri M.Ö. 45 tarihinden</li>
                    </ul>
                    <div style={{ textAlign: 'center', width: '100%' }}>
                      <Link to='/Basvura/Zorunlu'>
                        <button className='foto'>
                          <span>Başvuru Yap!</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className='kesin' style={{ color: 'white' }}>
                    <FaUserPlus
                      style={{
                        textAlign: 'center',
                        width: '50%',
                        height: '50%',
                        margin: '20px',
                        zIndex: '1',
                        position: 'absolute',
                      }}
                    />
                  </div>
                  <div className='gorzor'>
                    <h2
                      style={{
                        width: '60%',
                        margin: '0px auto 10px auto',
                        boxShadow: '0px 5px 15px 2px rgba(0, 0, 0, 0.2)',
                        textAlign: 'center',
                        padding: '10px',
                        backgroundColor: '#2855ac',
                        color: 'white',
                      }}
                    >
                      Gönüllü
                    </h2>
                    <p>
                      Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                      oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin
                      edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
                    </p>
                    Katılabilirler;
                    <ul className='listeler'>
                      <li>yıllık bir geçmişi vardır</li>
                      <li>Yaygın inancın tersine</li>
                      <li>
                        Lorem Ipsum rastgele sözcüklerden Lorem Ipsum rastgele
                        sözcüklerden
                      </li>
                      <li>Kökleri M.Ö. 45 tarihinden</li>
                      <li>yıllık bir geçmişi vardır</li>
                      <li>Yaygın inancın tersine</li>
                      <li>Lorem Ipsum rastgele sözcüklerden</li>
                      <li>Kökleri M.Ö. 45 tarihinden</li>
                    </ul>
                    <div style={{ textAlign: 'center' }}>
                      <Link to='/Basvura/Gonullu'>
                        <button className='foto'>
                          <span>Başvuru Yap!</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Register;
