import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Mavi2 from '../../../../logos/Mavi.jpg';
import Proje from '../../../../images/browser.png';
import prog1 from '../../../../images/maxresdefault.jpg';
import { Link } from 'react-router-dom';

const ProjectHome = ({ data }) => {
  return (
    <div className='filter-items'>
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
          src={Proje}
          alt='logo'
          style={{
            borderRadius: '55%',
            width: '90px',
            height: '90px',

            backgroundColor: 'white',
            border: '5px solid #fff',
          }}
        />
      </div>
      <div
        style={{
          maxWidth: '270px',
          backgroundColor: '#fdce24',
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
        <h3>Prepared for Projects</h3>
      </div>
      <Row>
        {data.map(function (props, index) {
          return (
            <Col sm={4} style={{ textAlign: 'center' }} key={index}>
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
                <div style={{ textAlign: 'center' }}>
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontSize: '18px',
                      marginTop: '20px',
                    }}
                  >
                    {props.name}
                  </span>
                  <br />
                  <span
                    style={{
                      fontWeight: 'bold',
                      fontSize: '15px',
                    }}
                  >
                    Ankara Plaza
                  </span>
                </div>
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
                  alarak karıştırdığı 1500'lerden beri endüstri standardı sahte
                  metinler olarak kullanılmıştır.
                </p>
              </div>
              <div style={{ maxWidth: '100%' }}>
                <Link to={`/en/${props.id}/project`}>
                  <button className='foto'>Go to...</button>
                </Link>
              </div>
            </Col>
          );
        })}
        <Col
          sm={12}
          style={{
            width: '100%',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          <div style={{ maxWidth: '100%', marginTop: '20px' }}>
            <Link to='/en/Project'>
              <button className='foto'>
                <div className='lob'></div>
                See All...
              </button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectHome;
