import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Mavi2 from '../../../logos/Mavi.jpg';
import Logo from '../../../images/news-admin.png';
import Pagination from './prag';
import News from './newsList.json';

class NewsList extends React.Component {
  constructor() {
    super();

    this.state = {
      News: News,
      pageOfItems: [],
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <Container style={{ marginTop: '30px' }}>
          <div
            style={{
              maxWidth: '50%',
              height: '75px',
              margin: '-125px auto',
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
                width: '110px',
                height: '110px',
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
              margin: '-50px auto 0px auto',
              borderRadius: '10px',
              color: 'white',
            }}
          >
            <h3>News</h3>
          </div>
          <div
            className='ogrendik'
            style={{
              paddingTop: '50px',
              marginTop: '115px',
              position: 'relative',
              border: '10px #ffc900 solid',
            }}
          >
            <div
              style={{
                width: '50%',
                height: '100%',
                margin: ' 20px auto',
              }}
            >
              <p style={{ textAlign: 'center' }}>
                fsddfa afsd asdf sadfdsaf dsafds fasd fdasf dsasdafdsa fsads
                fasdfdsfsddfa afsd asdf sadfdsaf dsafds fasd fdasf dsasdafdsa
                fsads fasdfds
              </p>
              <Col sm={12}>
                <div
                  style={{
                    width: '90%',
                    margin: '20px auto',
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
                    margin: '-45px auto 0px auto',
                    zIndex: '1',
                    borderRadius: '50%',
                    border: '5px solid #2855ac',
                  }}
                />
              </Col>
            </div>
            <Pagination
              items={this.state.News}
              onChangePage={this.onChangePage}
            />
            {this.state.pageOfItems.map((item) => (
              <div
                key={item.id}
                style={{
                  border: '5px solid #2855ac',
                  margin: '30px',
                  padding: '15px',
                }}
              >
                <Row>
                  <Col sm={4}>
                    <img
                      src={item.src}
                      alt='new'
                      width='100%'
                      className='resimler2'
                    />
                  </Col>
                  <Col sm={8}>
                    <h2>{item.name}</h2>
                    <p style={{}}>{item.about}</p>
                    <div style={{ textAlign: 'center' }}>
                      <Link to={`/en/${item.id}/news`}>
                        <button className='foto' style={{ margin: '0px auto' }}>
                          Go on...
                        </button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default NewsList;
