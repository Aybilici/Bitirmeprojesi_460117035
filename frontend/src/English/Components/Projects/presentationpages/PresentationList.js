import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Mavi2 from '../../../../logos/Mavi.jpg';
import Logo from '../../../../images/presentation.png';

class PresentationList extends React.Component {
  componentDidMount() {
    document.title = 'Presentations';
  }
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      project: '',
      plaza: '',
      kind: '',
      not: '',
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
      case 'project':
        this.setState({ project: val });
        break;
      case 'plaza':
        this.setState({ plaza: val });
        break;
      case 'kind':
        this.setState({ kind: val });
        break;
      case 'not':
        this.setState({ not: val });
        break;

      default:
        break;
    }
  }

  render() {
    var filteredItems = this.props.data;
    var state = this.state;
    ['project', 'plaza', 'kind', 'not'].forEach(function (filterBy) {
      var filterValue = state[filterBy];
      if (filterValue) {
        filteredItems = filteredItems.filter(function (item) {
          return item[filterBy] === filterValue;
        });
      }
      return filterValue;
    });
    let projectArray = this.props.data.map(function (item) {
      return item.project;
    });
    projectArray = projectArray.filter(
      (val, i, self) => self.indexOf(val) === i
    );
    let plazaArray = this.props.data.map(function (item) {
      return item.plaza;
    });
    plazaArray = plazaArray.filter((val, i, self) => self.indexOf(val) === i);
    let kindArray = this.props.data.map(function (item) {
      return item.kind;
    });
    kindArray = kindArray.filter((val, i, self) => self.indexOf(val) === i);
    let notArray = this.props.data.map(function (item) {
      return item.not;
    });
    notArray = notArray.filter((val, i, self) => self.indexOf(val) === i);

    return (
      <div>
        <Container style={{ marginTop: '30px' }}>
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
            <h3>Presentations</h3>
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
                textAlign: 'center',
                width: '50%',
                height: '100%',
                margin: ' 20px auto',
              }}
            >
              <p>
                fsddfa afsd asdf sadfdsaf dsafds fasd fdasf dsasdafdsa fsads
                fasdfdsfsddfa afsd asdf sadfdsaf dsafds fasd fdasf dsasdafdsa
                fsads fasdfds
              </p>
            </div>
            <FilterOptions
              data={this.state.data}
              projectOptions={projectArray}
              plazaOptions={plazaArray}
              kindOptions={kindArray}
              notOptions={notArray}
              changeOption={this.filterItems.bind(this)}
            />
            <div className='filter-form'>
              <FilterItems data={filteredItems} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

const FilterOptions = ({
  data,
  projectOptions,
  plazaOptions,
  kindOptions,
  notOptions,
  changeOption,
}) => {
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
                maxWidth: '60%',
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
                zIndex: '1',
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
          <Col sm={3}>
            <label style={{ color: '#2855ac', fontWeight: 'bold' }}>
              PROJECTS:
            </label>
            <div className='form-label-group'>
              <select
                id='project'
                className='select-css'
                placeholder=' '
                onChange={handleChangeOption.bind(this, 'project')}
              >
                <option value=''>All</option>
                {projectOptions.map(function (option, index) {
                  return (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
          </Col>
          <Col sm={3}>
            <label style={{ color: '#2855ac', fontWeight: 'bold' }}>
              PLAZA:
            </label>
            <div className='form-label-group'>
              <select
                id='plaza'
                className='select-css'
                placeholder=' '
                onChange={handleChangeOption.bind(this, 'plaza')}
              >
                <option value=''>All</option>
                {plazaOptions.map(function (option, index) {
                  return (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
          </Col>
          <Col sm={3}>
            <label style={{ color: '#2855ac', fontWeight: 'bold' }}>
              AREA:
            </label>
            <div className='form-label-group'>
              <select
                id='kind'
                className='select-css'
                placeholder=' '
                onChange={handleChangeOption.bind(this, 'kind')}
              >
                <option value=''>All</option>
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
          <Col sm={3}>
            <label style={{ color: '#2855ac', fontWeight: 'bold' }}>
              KARAR:
            </label>
            <div className='form-label-group'>
              <select
                id='not'
                className='select-css'
                placeholder=' '
                onChange={handleChangeOption.bind(this, 'not')}
              >
                <option value=''>All</option>
                {notOptions.map(function (option, index) {
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
        </Row>
      </div>
    </div>
  );
};

const FilterItems = ({ data }) => {
  return (
    <div>
      <Accordion>
        <Row style={{ marginLeft: '10px', marginRight: '10px' }}>
          {data.map(function (props, index) {
            return (
              <Col sm={6} key={index}>
                <Accordion>
                  <Card
                    style={{
                      border: 'none',
                      backgroundColor: 'none',
                      margin: '5px',
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey='0'
                      style={{}}
                      className='ahmet'
                    >
                      {props.name}
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey='0'>
                      <div
                        className='katilkutu'
                        style={{ border: '5px #2855ac solid' }}
                      >
                        <div
                          style={{
                            width: '100%',
                            margin: '0px auto 20px auto',
                            backgroundColor: '#2855ac',
                            height: '10px',
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
                        <Card.Body>
                          <div
                            style={{
                              padding: '10px 15px',
                            }}
                          >
                            <div style={{ textAlign: 'center' }}>
                              <span
                                style={{
                                  fontWeight: 'bold',
                                  fontSize: '18px',
                                  marginTop: '20px',
                                }}
                              >
                                {props.university}
                              </span>
                              <br />
                              <span
                                style={{
                                  fontWeight: 'bold',
                                  fontSize: '15px',
                                }}
                              >
                                {props.plaza}
                              </span>
                            </div>
                            <div
                              style={{
                                height: '250px',
                                textAlign: 'center',
                                maxWidth: '100%',
                                margin: '25px auto',
                              }}
                            >
                              <img
                                src={props.src}
                                alt='unity'
                                style={{
                                  maxWidth: '100%',

                                  backgroundColor: '#2855ac',
                                  height: '100%',
                                }}
                              />
                            </div>
                            <div style={{ margin: '0px 0px 20px 0px' }}>
                              <p
                                style={{
                                  textAlign: 'justify',
                                  fontStyle: 'italic',
                                }}
                              >
                                "{props.about}"
                              </p>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <Link to={`/en/${props.id}/presentation`}>
                                <button className='foto'>Devam..</button>
                              </Link>
                            </div>
                          </div>
                        </Card.Body>
                      </div>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
            );
          })}
        </Row>
      </Accordion>
    </div>
  );
};
/*
const FilterItems = ({ data }) => {
  const rows = [...Array(Math.ceil(data.length / 4))];
  const productRows = rows.map((row, idx) => data.slice(idx * 4, idx * 4 + 4));
  const content = productRows.map((row, idx) => (
    <div className='row' key={idx}>
      {row.map((item, idx) => (
        <div key={idx} className='col-md-6'>
          <div>
            <Accordion>
              <Card
                style={{
                  border: 'none',
                  backgroundColor: 'none',
                  margin: '5px',
                }}
              >
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey='0'
                  style={{}}
                  className='ahmet'
                >
                  {item.name}
                </Accordion.Toggle>

                <Accordion.Collapse eventKey='0'>
                  <div
                    className='katilkutu'
                    style={{ border: '5px #2855ac solid' }}
                  >
                    <div
                      style={{
                        width: '100%',
                        margin: '0px auto 20px auto',
                        backgroundColor: '#2855ac',
                        height: '10px',
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
                    <Card.Body>
                      <div
                        style={{
                          padding: '10px 15px',
                        }}
                      >
                        <div style={{ textAlign: 'center' }}>
                          <span
                            style={{
                              fontWeight: 'bold',
                              fontSize: '18px',
                              marginTop: '20px',
                            }}
                          >
                            {item.university}
                          </span>
                          <br />
                          <span
                            style={{
                              fontWeight: 'bold',
                              fontSize: '15px',
                            }}
                          >
                            {item.plaza}
                          </span>
                        </div>
                        <div
                          style={{
                            height: '250px',
                            textAlign: 'center',
                            maxWidth: '100%',
                            margin: '25px auto',
                          }}
                        >
                          <img
                            src={item.src}
                            alt='unity'
                            style={{
                              maxWidth: '100%',

                              backgroundColor: '#2855ac',
                              height: '100%',
                            }}
                          />
                        </div>
                        <div style={{ margin: '0px 0px 20px 0px' }}>
                          <p
                            style={{
                              textAlign: 'justify',
                              fontStyle: 'italic',
                            }}
                          >
                            "{item.about}"
                          </p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <Link to={`/${item.id}/project`}>
                            <button className='katil'>Devam..</button>
                          </Link>
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  ));
  return (
    <div
      style={{
        margin: '0px 10px',
      }}
    >
      <div>{content}</div>
    </div>
  );
};*/

export default PresentationList;
