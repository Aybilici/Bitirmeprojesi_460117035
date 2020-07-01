import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { notify } from 'react-notify-toast';
import { API_URL } from './config';
import Menu from '../../Menu/menu';
import Footer from '../footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Logo from '../../../logos/logoco2.jpg';
import Abone from '../../../images/yardim.png';

export default class Confirm extends Component {
  state = {
    confirming: true,
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;

    fetch(`${API_URL}/email/confirm/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ confirming: false });
        notify.show(data.msg);
      })
      .catch((err) => console.log(err));
  };

  render = () => (
    <div className='confirm'>
      <Menu />
      <div className='logoback' style={{ width: '100%' }}>
        <div style={{ width: '100%', height: '15px' }}></div>
        <div className='basvuru'>
          <Container>
            <div
              style={{
                maxWidth: '50%',
                height: '75px',
                margin: '-45px auto',
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
                  border: '5px solid #fbb914',
                }}
              />
            </div>
            <div className='abonesayfasi'>
              <Row style={{ textAlign: 'center' }}>
                <Col sm={12}>
                  <h1>
                    Hoşgeldiniz,
                    <br /> Emailiniz onaylandın!
                  </h1>
                  <img src={Abone} alt='alt' style={{ maxWidth: '60%' }} />
                </Col>
                <Col sm={12}>
                  Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                  oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin
                  edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
                </Col>
                <Col sm={12}>
                  <Link to='/'>
                    <button className='foto'>Anasayfa'ya dön</button>
                  </Link>
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
