import React, { Component } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { API_URL } from '../../../../../config';
//import Open from '../../../Footer/open';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Application extends Component {
  formSubmit = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: 'sending',
    });

    const data = {
      name: this.state.name,
      email: this.state.email,
      lastname: this.state.lastname,
      tele: this.state.tele,
      school: this.state.school,
      episode: this.state.episode,
      status: this.state.status,
      turk: this.state.turk,
      intern: this.state.intern,
      place: this.state.place,
      sorular: this.state.sorular,
      sorular2: this.state.sorular2,
      start: this.state.start,
      finish: this.state.finish,
      message: this.state.message,
    };

    axios
      .post(`${API_URL}/gonulluankara`, data)
      .then((res) => {
        this.setState({ sent: true }, this.resetForm());
        toast.success('Successfully posted. Thanks.');
      })
      .catch(() => {
        toast.error(
          'Sorry, it was not sent successfully. please try again later.'
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
  onLastnameChange = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };
  onTeleChange = (e) => {
    this.setState({
      tele: e.target.value,
    });
  };
  onSchoolChange = (e) => {
    this.setState({
      school: e.target.value,
    });
  };
  onEpisodeChange = (e) => {
    this.setState({
      episode: e.target.value,
    });
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };
  onTurkChange = (e) => {
    this.setState({
      turk: e.target.value,
    });
  };
  onInternChange = (e) => {
    this.setState({
      intern: e.target.value,
    });
  };
  onPlaceChange = (e) => {
    this.setState({
      place: e.target.value,
    });
  };
  onSoruChange = (e) => {
    this.setState({
      sorular: e.target.value,
    });
  };
  onSoru2Change = (e) => {
    this.setState({
      sorular2: e.target.value,
    });
  };
  onFinishChange = (e) => {
    this.setState({
      finish: e.target.value,
    });
  };
  onStartChange = (e) => {
    this.setState({
      start: e.target.value,
    });
  };
  state = {
    name: '',
    lastname: '',
    message: '',
    email: '',
    tele: '',
    school: '',
    episode: '',
    status: '',
    turk: '',
    intern: '',
    place: '',
    sorular: '',
    sorular2: '',
    start: '',
    finish: '',
    buttonText: 'Send',
  };

  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      lastname: '',
      email: '',
      tele: '',
      school: '',
      episode: '',
      status: '',
      turk: '',
      intern: '',
      place: '',
      sorular: '',
      sorular2: '',
      finish: '',
      start: '',
      horns: false,
      buttonText: 'Send',
    });
  };
  render() {
    return (
      <div className='App'>
        <form className='contact-form' onSubmit={(e) => this.formSubmit(e)}>
          <Row>
            <Col sm={6} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-name'>
                Name:
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
            <Col sm={6} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-name'>
                Lastname:
              </label>
              <input
                onChange={this.onLastnameChange}
                name='lastname'
                className='inputlar'
                type='text'
                placeholder='Soyadınız'
                required
                value={this.state.lastname}
              />
            </Col>
            <Col sm={12} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-email'>
                E-mail
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
              <label className='inputbaslik' htmlFor='message-email'>
                Telephone
              </label>
              <input
                onChange={this.onTeleChange}
                name='tel'
                className='inputlar'
                maxLength='11'
                minLength='11'
                type='tel'
                placeholder='örn: 05550005555'
                required
                value={this.state.tele}
              />
            </Col>
            <Col sm={12} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-email'>
                School
              </label>
              <input
                onChange={this.onSchoolChange}
                name='school'
                className='inputlar'
                type='text'
                placeholder='örn: İstanbul üniversitesi'
                required
                value={this.state.school}
              />
            </Col>
            <Col sm={12} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-email'>
                Episode:
              </label>
              <input
                onChange={this.onEpisodeChange}
                name='episode'
                className='inputlar'
                type='text'
                placeholder='örn: İstanbul üniversitesi'
                required
                value={this.state.episode}
              />
            </Col>
            <Col sm={12} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-email'>
                School Status
              </label>
              <select
                className='lists'
                placeholder=' '
                value={this.state.status}
                onChange={this.onStatusChange}
                required
              >
                <option value=''>Okulu durumu</option>
                <option value='Mezun'>Mezun</option>
                <option value='1.sınıf'>1.sınıf</option>
                <option value='2.sınıf'>2.sınıf</option>
                <option value='3.sınıf'>3.sınıf</option>
                <option value='4.sınıf'>4.sınıf</option>
                <option value='Diğer'>Diğer</option>
              </select>
            </Col>
            <Col sm={12} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-email'>
                Do you have any idea for Turkcell to do the project?
              </label>
              <input
                onChange={this.onTurkChange}
                name='turk'
                className='inputlar'
                type='text'
                placeholder='örn: İstanbul üniversitesi'
                required
                value={this.state.turk}
              />
            </Col>
            <Col sm={12} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-email'>
                Why do you want to work at the intern?
              </label>
              <select
                className='lists'
                placeholder=' '
                required
                value={this.state.intern}
                onChange={this.onInternChange}
              >
                <option value=''>Hangi çalışmak istiyorsun?</option>
                <option value='Geliştirmek için'>Geliştirmek için</option>
                <option value='Okul'>Okulda dersler başarı olmak için</option>
                <option value='Diğer'>Diğer</option>
              </select>
            </Col>
            <Col sm={12} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-email'>
                Where do you want to work?
              </label>
              <select
                className='lists'
                placeholder=' '
                required
                value={this.state.place}
                onChange={this.onPlaceChange}
              >
                <option value=''>Hangi çalışmak istiyorsun?</option>
                <option value='Bilgisayar Programları'>
                  Bilgisayar Programları
                </option>
                <option value='Elektrik Programları'>
                  Elektrik Programları
                </option>
                <option value='Grafik Tasarımları'>Grafik Tasarımları</option>
                <option value='Microsoft Office'>Microsoft Office</option>
                <option value='C# Programları'>C# Programları</option>
              </select>
            </Col>
            <Col sm={12} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-email'>
                Question
              </label>
              <input
                onChange={this.onSoruChange}
                name='soru'
                className='inputlar'
                type='text'
                placeholder='örn: İstanbul üniversitesi'
                required
                value={this.state.sorular}
              />
            </Col>
            <Col sm={12} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-email'>
                Question2
              </label>
              <input
                onChange={this.onSoru2Change}
                name='soru2'
                className='inputlar'
                type='text'
                placeholder='örn: İstanbul üniversitesi'
                required
                value={this.state.sorular2}
              />
            </Col>
            <Col sm={6} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-name'>
                Internship start date:
              </label>
              <input
                onChange={this.onStartChange}
                name='start'
                className='inputlar'
                type='date'
                placeholder='01/01/2020'
                required
                value={this.state.start}
              />
            </Col>
            <Col sm={6} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-name'>
                Internship finish date::
              </label>
              <input
                onChange={this.onFinishChange}
                name='finish'
                className='inputlar'
                type='date'
                placeholder='01/01/2020'
                required
                value={this.state.finish}
              />
            </Col>
            <Col sm={12} style={{ textAlign: 'center' }}>
              <label className='inputbaslik' htmlFor='message-input'>
                Your Message
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
              <div
                style={{
                  backgroundColor: '#2855ac',
                  borderRadius: '5px',
                  color: 'white',
                }}
              >
                <input
                  type='checkbox'
                  name='isGoing'
                  id='onay'
                  style={{
                    backgroundColor: '#2855ac',
                    cursor: 'pointer',
                    height: '15px',
                    width: '15px',
                  }}
                  required
                />

                <label
                  htmlFor='onay'
                  style={{ margin: '20px 0px 20px 10px', cursor: 'pointer' }}
                >
                  I have read and accept the KVKK Lighting Text.
                </label>
              </div>
              <div className='button--container' style={{ marginTop: '20px' }}>
                <button type='submit' className='basvuruyap'>
                  {this.state.buttonText}
                </button>
              </div>
              <ToastContainer />
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}
export default Application;
