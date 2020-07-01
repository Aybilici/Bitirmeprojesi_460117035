import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../logos/Turkcell-Yeni-Logo2.jpg';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
//import Eng from './united-kingdom.png';
import Container from 'react-bootstrap/Container';
import './menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand='lg'
          className='w3-top'
          style={{ boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.0)' }}
        >
          <Container>
            <Link to='/en'>
              <img
                alt=''
                src={Logo}
                width='180'
                height='45'
                className='d-inline-block align-top'
              />
            </Link>
            <Navbar.Toggle
              aria-controls='navbar-toggler-icon'
              style={{ border: 'none' }}
            >
              <div className='navbar-toggler-icon2'></div>
            </Navbar.Toggle>
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav className='staj'>
                  <Link
                    to='/en/Internship'
                    className='statj'
                    style={{ padding: '10px 0px', textDecoration: 'none' }}
                  >
                    Internship
                  </Link>
                </Nav>
                <ButtonToolbar>
                  <Nav className='staj'>
                    <Link
                      to='/en/Register'
                      className='statj'
                      style={{
                        padding: '10px 0px',
                        textDecoration: 'none',
                      }}
                    >
                      Register
                    </Link>
                  </Nav>
                </ButtonToolbar>

                <Nav className='staj'>
                  <Link
                    to='/en/Projects'
                    className='statj'
                    style={{ padding: '10px 0px', textDecoration: 'none' }}
                  >
                    Projects
                  </Link>
                </Nav>
                <Nav className='staj'>
                  <Link
                    to='/en/Programs'
                    className='statj'
                    style={{ padding: '10px 0px', textDecoration: 'none' }}
                  >
                    Programs
                  </Link>
                </Nav>
                <Nav className='staj'>
                  <Link
                    to='/en/News'
                    className='statj'
                    style={{ padding: '10px 0px', textDecoration: 'none' }}
                  >
                    News
                  </Link>
                </Nav>
                <Nav className='staj'>
                  <Link
                    to='/en/Contact'
                    className='statj'
                    style={{ padding: '10px 0px', textDecoration: 'none' }}
                  >
                    Contact
                  </Link>
                </Nav>
              </Nav>
              <Nav>
                <Nav className='staj'>
                  <Link
                    to='/'
                    className='statj'
                    style={{ textDecoration: 'none' }}
                  >
                    Turkish
                  </Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div id='backtotopanchor' />
        <div
          className='logoback2'
          style={{ width: '100%', height: '56px' }}
        ></div>
      </div>
    );
  }
}

export default Menu;
