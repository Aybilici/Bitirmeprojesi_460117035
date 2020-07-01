import React from 'react';
import Menu from '../Menu/menu';
import Anasayfa from './homepage';
import Footer from '../Footer/footer.js';
import './home.css';

class Home extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Menu />
        <div className='logoback' style={{ width: '100%' }}>
          <div style={{ width: '100%', height: '15px' }}></div>
          <Anasayfa />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
