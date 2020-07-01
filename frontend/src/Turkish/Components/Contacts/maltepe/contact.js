import React, { Component } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { API_URL } from '../../../../config';
//import Open from '../../../Footer/open';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import plaza from '../../../../images/plaza.png';
import whatsapp from '../../../../images/whatsapp.png';
import email from '../../../../images/email.png';
import calendar from '../../../../images/calendar1.png';
import Mavi from '../../../../logos/Mavi.jpg';

class Contact extends Component {
  formSubmit = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: 'gönderiyorum',
    });

    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    axios
      .post(`${API_URL}/sendmaltepe`, data)
      .then((res) => {
        this.setState({ sent: true }, this.resetForm());
        toast.success('Başarılı gönderildi. Teşekkürler.');
      })
      .catch(() => {
        toast.error(
          'Üzügünüm, başarılı gönderelemedi. Lüften sonra tekrar deneyin.'
        );
      });
  };

  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onMessageChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };
  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  state = {
    name: '',
    message: '',
    email: '',
    buttonText: 'Gönder',
  };

  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      email: '',
      buttonText: 'Gönder',
    });
  };
  render() {
    return (
      <div className='App'>
        <form className='contact-form' onSubmit={(e) => this.formSubmit(e)}>
          <Row>
            <Col sm={12} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-name'>
                Adınız:
              </label>
              <input
                onChange={this.onNameChange}
                name='name'
                className='inputlar'
                type='text'
                placeholder='Adınız'
                required
                value={this.state.name}
              />
            </Col>

            <Col sm={12} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-email'>
                Mailiniz
              </label>
              <input
                onChange={this.onEmailChange}
                name='email'
                className='inputlar'
                type='email'
                placeholder='örn: ornek@email.com'
                required
                value={this.state.email}
              />
            </Col>

            <Col sm={12} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-input'>
                Açıklayın:
              </label>
              <textarea
                value={this.state.message}
                onChange={this.onMessageChange}
                name='message'
                className='inputlar'
                type='text'
                placeholder='Please write your message here'
                required
              />
              <div className='button--container' style={{ marginTop: '20px' }}>
                <button type='submit' className='basvuruyap'>
                  {this.state.buttonText}
                </button>
              </div>
              <ToastContainer />
            </Col>
            <div
              style={{
                width: '60%',
                margin: '40px auto',
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
                margin: '415px auto 0px auto',
                zIndex: '1',
                borderRadius: '50%',
                border: '5px solid #2855ac',
              }}
            />
            <div>
              <div
                style={{
                  backgroundColor: 'white',
                  padding: '0px 15px',
                }}
              >
                <Row
                  style={{
                    margin: '15px auto',
                    backgroundColor: '#fbb914',
                    padding: '15px 0px',
                    borderRadius: '100px',
                  }}
                >
                  <Col
                    sm={3}
                    style={{
                      textAlign: 'center',
                      margin: 'auto 0px',
                    }}
                  >
                    <img src={email} alt='Plaza' />
                  </Col>
                  <Col
                    sm={9}
                    style={{
                      margin: 'auto 0px',
                      color: '#2855ac',
                      fontWeight: 'bold',
                      fontSize: '17px',
                      paddingLeft: '21.5px',
                    }}
                  >
                    turkcell@gmail.com
                  </Col>
                </Row>
                <Row
                  style={{
                    margin: '15px auto',
                    backgroundColor: '#2855ac',
                    padding: '15px 0px',
                    borderRadius: '100px',
                  }}
                >
                  <Col
                    sm={3}
                    style={{
                      textAlign: 'center',
                      margin: 'auto 0px',
                    }}
                  >
                    <img src={whatsapp} alt='Plaza' />
                  </Col>
                  <Col
                    sm={9}
                    style={{
                      margin: 'auto 0px',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '17px',
                      paddingLeft: '21.5px',
                    }}
                  >
                    (0212) 313 10 00
                  </Col>
                </Row>
                <Row
                  style={{
                    margin: '15px auto',
                    backgroundColor: '#fbb914',
                    padding: '15px 0px',
                    borderRadius: '100px',
                  }}
                >
                  <Col
                    sm={3}
                    style={{
                      textAlign: 'center',
                      margin: 'auto 0px',
                    }}
                  >
                    <img src={plaza} alt='Plaza' />
                  </Col>
                  <Col
                    sm={9}
                    style={{
                      margin: 'auto 0px',
                      color: '#2855ac',
                      fontWeight: 'bold',
                      paddingLeft: '21.5px',
                    }}
                  >
                    Aydınevler Mahallesi İnönü Caddesi No:20 Küçükyalı Ofispark
                    B Blok - Maltepe / İSTANBUL
                  </Col>
                </Row>
                <Row
                  style={{
                    margin: '15px auto',
                    backgroundColor: '#2855ac',
                    padding: '15px 0px',
                    borderRadius: '100px',
                  }}
                >
                  <Col
                    sm={3}
                    style={{
                      textAlign: 'center',
                      margin: 'auto 0px',
                    }}
                  >
                    <img src={calendar} alt='Plaza' />
                  </Col>
                  <Col
                    sm={9}
                    style={{
                      margin: 'auto 0px',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '15px',
                      paddingLeft: '21.5px',
                    }}
                  >
                    Hafta içi: 07.30-16.30 <br />
                    Hafta Sonu: Tatil
                  </Col>
                </Row>
              </div>
            </div>
          </Row>
        </form>
      </div>
    );
  }
}
export default Contact;
