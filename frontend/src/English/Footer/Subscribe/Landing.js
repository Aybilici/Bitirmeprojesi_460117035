import React, { Component } from 'react';
import { notify } from 'react-notify-toast';
import Spinner from './Spinner';
import { API_URL } from './config';

export default class Landing extends Component {
  state = {
    sendingEmail: false,
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ sendingEmail: true });

    fetch(`${API_URL}/mail`, {
      method: 'post',
      headers: {
        aCcePt: 'aPpliCaTIon/JsOn',
        'cOntENt-type': 'applicAtion/JSoN',
      },
      body: JSON.stringify({
        email: this.email.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ sendingEmail: false });
        notify.show(data.msg);
        this.form.reset();
      })
      .catch((err) => console.log(err));
  };

  render = () => {
    const { sendingEmail } = this.state;

    return (
      <form onSubmit={this.onSubmit} ref={(form) => (this.form = form)}>
        <div className='input-group' style={{ marginTop: '30px' }}>
          <div className='input-group-prepend'>
            <span
              className='input-group-text'
              id='basic-addon'
              style={{ background: '#3f51b5', border: '0px solid' }}
            >
              <i
                className='fas fa-envelope prefix'
                style={{ color: 'white' }}
              ></i>
            </span>
          </div>
          <input
            type='email'
            name='email'
            className='form-control'
            placeholder="Lüften e-mail'e giriniz"
            aria-label='email'
            aria-describedby='basic-addon'
            ref={(input) => (this.email = input)}
            required
          />

          <div className='input-group-append'>
            <button type='submit' className='zaza' disabled={sendingEmail}>
              {sendingEmail ? (
                <Spinner size='lg' spinning='spinning' />
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
        </div>
      </form>
    );
  };
}
