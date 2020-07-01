import React from 'react';

import { Link } from 'react-router-dom';

const NewsHome = ({ data }) => {
  return (
    <div>
      <div
        style={{
          padding: '40px 20px',

          width: '95%',
          margin: '0px auto 10px auto',
          backgroundColor: '#114AA1',
          color: 'white',
          borderLeft: '7px solid #2855ac',
          borderBottom: '7px solid #2855ac',
          borderRight: '7px solid #2855ac',
          borderBottomLeftRadius: '30%',
          borderBottomRightRadius: '30%',
          textAlign: 'center',
        }}
      >
        <h3 style={{ textAlign: 'center' }}>News</h3>

        <ul className='listelerm'>
          {data.map(function (props, index) {
            return (
              <li style={{ margin: '10px', textAlign: 'left' }} key={index}>
                <Link to={`/en/${props.id}/news`} style={{ color: 'white' }}>
                  {props.name}
                </Link>{' '}
                <span style={{ color: '#ffc900', fontWeight: 'bold' }}>
                  {props.new}
                </span>
              </li>
            );
          })}
        </ul>

        <div style={{ margin: '0px auto', width: '100%' }}>
          <Link to='/News'>
            <button className='foto'>See All!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsHome;
