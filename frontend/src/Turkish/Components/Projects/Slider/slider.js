import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Logo from '../../../../logos/logoco2.jpg';

const Slider = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: '#ffc900',
        borderTop: '10px solid #ffc900',
        borderRight: '10px solid #ffc900',
        borderBottom: '2px solid #ffc900',
        borderLeft: '10px solid #ffc900',
        marginTop: '100px',
        borderRadius: '10px',
      }}
    >
      <div
        style={{
          maxWidth: '50%',
          height: '75px',
          margin: '-120px auto',
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
          margin: '-70px auto 0px auto',
          borderRadius: '10px',
          color: 'white',
        }}
      >
        <h3>PROJELER</h3>
      </div>
      <Carousel style={{ marginBottom: '7px' }}>
        {data.map(function (props, index) {
          return (
            <Carousel.Item
              style={{ textAlign: 'center', height: '500px' }}
              key={index}
            >
              <img
                className='d-block w-100'
                src={props.src}
                alt='First slide'
                width='100%'
                height='100%'
              />
              <Carousel.Caption className='sayf'>
                <p>{props.name}</p>
                <Link to={`/${props.id}/projeler`}>
                  <button className='tikl'>Devam</button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
