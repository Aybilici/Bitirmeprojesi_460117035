import React from 'react';
import { ExportReactCSV } from './ExportReactCSV';
import Email from './email.json';
import Menu from '../../Menu/menu';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Logo from '../../../logos/logoco2.jpg';
import Footer from '../../Footer/footer';
import Pagination from './prag';
import Table from 'react-bootstrap/Table';

class Aboneler extends React.Component {
  constructor() {
    super();

    this.state = {
      Email: Email,
      customers: [],
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(customers) {
    this.setState({ customers: customers });
  }
  componentDidMount() {
    document.title = 'Aboneler';
  }
  render() {
    return (
      <div>
        <Menu />
        <div className='logoback' style={{ width: '100%' }}>
          <div style={{ width: '100%', height: '15px' }}></div>
          <div className='basvuru'>
            <Container>
              <div
                className='progs'
                style={{
                  border: '10px #ffc900 solid',
                  marginTop: '30px',
                }}
              >
                <Row>
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
                  >
                    <img
                      src={Logo}
                      alt='logo'
                      style={{
                        borderRadius: '55%',
                        backgroundColor: 'white',
                        border: '5px solid #ffc300',
                      }}
                    />
                  </div>
                  <div className='col-md-4 center'>
                    <ExportReactCSV customers={Email} />
                  </div>
                  <Pagination
                    items={this.state.Email}
                    onChangePage={this.onChangePage}
                  />
                  <Table>
                    <thead className='bgvi'>
                      <tr>
                        <th>#</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody className='even'>
                      {this.state.customers.map((item, index) => (
                        <tr key={index}>
                          <td> {index + 1} </td>
                          <td>{item.email}</td>
                          {/*<td>{String(customer.confirmed)}</td>*/}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Row>
              </div>
            </Container>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Aboneler;
