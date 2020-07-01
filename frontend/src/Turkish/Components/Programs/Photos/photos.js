import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Mavi from '../../../../logos/Mavi.jpg';
import Logo from '../../../../logos/logoco2.jpg';
import { SRLWrapper } from 'simple-react-lightbox';

class Photos extends React.Component {
  componentDidMount() {
    document.title = 'Fotoğraflar';
  }
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      kind: '',
    };
  }
  state = {
    collapseID: '',
  };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
  };

  filterItems(val, type) {
    switch (type) {
      case 'kind':
        this.setState({ kind: val });
        break;

      default:
        break;
    }
  }

  render() {
    var filteredItems = this.props.data;
    var state = this.state;
    ['kind'].forEach(function (filterBy) {
      var filterValue = state[filterBy];
      if (filterValue) {
        filteredItems = filteredItems.filter(function (item) {
          return item[filterBy] === filterValue;
        });
      }
      return filterValue;
    });

    let kindArray = this.props.data.map(function (item) {
      return item.kind;
    });
    kindArray = kindArray.filter((val, i, self) => self.indexOf(val) === i);

    return (
      <div>
        <Container style={{ marginTop: '30px' }}>
          <Row
            className='progs'
            style={{
              border: '10px #ffc900 solid',
              marginTop: '40px',
            }}
          >
            <div
              style={{
                maxWidth: '50%',
                height: '75px',
                margin: '-80px auto',
                position: 'absolute',
                textAlign: 'center',
                zIndex: '0',
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
                  border: '5px solid #ffc900',
                }}
              />
            </div>
            <div
              style={{
                maxWidth: '50%',
                height: '75px',
                margin: '-80px auto',
                position: 'absolute',
                textAlign: 'center',
                zIndex: '2',
                right: '0',
                left: '0',
              }}
            ></div>

            <div className='resimlerr'>
              <div
                style={{
                  textAlign: 'center',
                  width: '50%',
                  height: '100%',
                  margin: ' 20px auto',
                }}
              >
                <h3>Fotoğraflar</h3>
                <p>
                  fsddfa afsd asdf sadfdsaf dsafds fasd fdasf dsasdafdsa fsads
                  fasdfdsfsddfa afsd asdf sadfdsaf dsafds fasd fdasf dsasdafdsa
                  fsads fasdfds
                </p>
              </div>
              <FilterOptions
                data={this.state.data}
                kindOptions={kindArray}
                changeOption={this.filterItems.bind(this)}
              />
              <div className='filter-form'>
                <FilterItems data={filteredItems} />
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

const FilterOptions = ({ data, kindOptions, changeOption }) => {
  const handleChangeOption = (type, event) => {
    const value = event.target.value;
    changeOption(value, type);
  };

  return (
    <div className='filter-options' style={{ margin: '0px 20px' }}>
      <div className='filter-option' style={{ textAlign: 'center' }}>
        <Row>
          <Col sm={12}>
            <div
              style={{
                width: '50%',
                margin: '35px auto',
                backgroundColor: '#2855ac',
                height: '10px',
                borderRadius: '20px',
              }}
            ></div>
            <div
              style={{
                position: 'absolute',
                right: '0',
                left: '0',
                margin: '-60px auto 0px auto',
                zIndex: '0',
                width: '120px',
                height: '40px',
                backgroundColor: '#2855ac',
                fontSize: '22px',
                color: 'white',
                borderRadius: '20px',
              }}
            >
              Filter
            </div>
          </Col>
          <Col sm={3} style={{ margin: '15px auto' }}>
            <label style={{ color: '#2855ac', fontWeight: 'bold' }}>
              ALAN:
            </label>
            <div className='form-label-group'>
              <select
                id='kind'
                className='select-css'
                placeholder=' '
                onChange={handleChangeOption.bind(this, 'kind')}
              >
                <option value=''>Hepsi</option>
                {kindOptions.map(function (option, index) {
                  return (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
          </Col>
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
              src={Mavi}
              alt='mavi'
              width='40px'
              height='40px'
              style={{
                position: 'absolute',
                right: '0',
                left: '0',
                margin: '-45px auto 0px auto',
                zIndex: '0',
                borderRadius: '50%',
                border: '5px solid #2855ac',
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

const FilterItems = ({ data }) => {
  return (
    <div>
      <SRLWrapper>
        {' '}
        <div className='gallery-image'>
          {data.map(function (props, index) {
            return (
              <div className='img-box' key={index}>
                <img
                  src={props.src}
                  alt={props.about}
                  style={{ maxWidth: '100%' }}
                />
              </div>
            );
          })}
        </div>
      </SRLWrapper>
    </div>
  );
};

export default Photos;
