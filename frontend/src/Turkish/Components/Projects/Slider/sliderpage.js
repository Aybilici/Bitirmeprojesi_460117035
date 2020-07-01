import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Logo from '../../../../logos/logoco2.jpg';
import { SRLWrapper } from 'simple-react-lightbox';

const styles = (theme) => ({
  bigIndicator: {
    height: 5,
    backgroundColor: 'white',
    fontWeight: 'bold',
  },
  tabLabel: {
    fontSize: '30px',
    backgroundColor: '#2855ac',
  },
});

class SliderPage extends React.Component {
  state = { value: 0 };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  componentDidMount() {
    document.title = 'Proje';
  }
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <Container>
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

            <AppBar
              position='static'
              key='appbar'
              className={classes.tabLabel}
              style={{
                padding: '10px',
                marginTop: '20px',
                backgroundColor: '#2855ac',
                color: 'white',
                zIndex: '0',
              }}
            >
              <Tabs
                classes={{ indicator: classes.bigIndicator }}
                variant='fullWidth'
                value={value}
                onChange={this.handleChange}
                style={{}}
              >
                <Tab label='Bilgi' />
                <Tab label='Fotoğraflar' />
              </Tabs>
            </AppBar>
            <SRLWrapper>
              <div key='tab-content'>
                {value === 0 && (
                  <div>
                    {this.props.items.map((place, i) => (
                      <div className='place-item' key={i} id={place.id}>
                        <div
                          style={{
                            maxWidth: '100%',
                            height: '100%',
                            backgroundColor: 'white',
                            overflow: 'auto',
                            border: '10px solid #2855ac',
                            boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                          }}
                        >
                          <div
                            style={{
                              padding: '15px',
                              backgroundColor: 'white',
                              width: '100%',
                              textAlign: 'center',
                            }}
                            className='resimler'
                          >
                            <h2 style={{}}>{place.title}</h2>

                            <img
                              src={place.src}
                              alt='...'
                              width='600px'
                              height='100%'
                              style={{
                                marginTop: '20px',
                                display: 'inline-block',
                                cursor: 'pointer',
                              }}
                              className='resimler2 opas'
                            />

                            <div style={{ margin: '15px 0px' }}>
                              <h5>
                                {place.name}
                                <br />
                                {place.university}
                              </h5>
                            </div>
                          </div>

                          <div
                            className='yazi'
                            style={{
                              padding: '10px',
                              textAlign: 'justify',
                            }}
                          >
                            Yaygın inancın tersine, Lorem Ipsum rastgele
                            sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu
                            yana klasik Latin edebiyatına kadar uzanan 2000
                            yıllık bir geçmişi vardır. Virginia'daki
                            Hampden-Sydney College'dan Latince profesörü Richard
                            McClintock, bir Lorem Ipsum pasajında geçen ve
                            anlaşılması en güç sözcüklerden biri olan
                            'consectetur' sözcüğünün klasik edebiyattaki
                            örneklerini incelediğinde kesin bir kaynağa
                            ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45
                            tarihinde kaleme alınan "de Finibus Bonorum et
                            Malorum" (İyi ve Kötünün Uç Sınırları) eserinin
                            1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir.
                            Bu kitap, ahlak kuramı üzerine bir tezdir ve
                            Rönesans döneminde çok popüler olmuştur. Lorem Ipsum
                            pasajının ilk satırı olan "Lorem ipsum dolor sit
                            amet" 1.10.32 sayılı bölümdeki bir satırdan
                            gelmektedir. 1500'lerden beri kullanılmakta olan
                            standard Lorem Ipsum metinleri ilgilenenler için
                            yeniden üretilmiştir. Çiçero tarafından yazılan
                            1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham
                            çevirisinden alınan İngilizce sürümleri eşliğinde
                            özgün biçiminden yeniden üretilmiştir.
                            <div
                              style={{
                                float: 'right',
                                padding: '15px',
                                backgroundColor: 'white',
                              }}
                              className='resimler'
                            >
                              <img
                                src={place.src1}
                                alt='...'
                                width='350px'
                                height='200px'
                                style={{
                                  marginTop: '20px',
                                  display: 'inline-block',
                                  cursor: 'pointer',
                                }}
                                className='resimler2 opas'
                              />
                            </div>
                            <br />
                            Neler Vardır; Yaygın inancın tersine, Lorem Ipsum
                            rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45
                            tarihinden bu yana klasik Latin edebiyatına kadar
                            uzanan 2000 yıllık bir geçmişi vardır.
                            <ul className='listeler'>
                              {place.list.map(function (role, i) {
                                return (
                                  <li sm={6} key={i}>
                                    {role.liste}
                                  </li>
                                );
                              })}
                            </ul>
                            Virginia'daki Hampden-Sydney College'dan Latince
                            profesörü Richard McClintock, bir Lorem Ipsum
                            pasajında geçen ve anlaşılması en güç sözcüklerden
                            biri olan 'consectetur' sözcüğünün klasik
                            edebiyattaki örneklerini incelediğinde kesin bir
                            kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından
                            M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum
                            et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin
                            1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir.
                            Bu kitap, ahlak kuramı üzerine bir tezdir ve
                            Rönesans döneminde çok popüler olmuştur. Lorem Ipsum
                            pasajının ilk satırı olan "Lorem ipsum dolor sit
                            amet" 1.10.32 sayılı bölümdeki bir satırdan
                            gelmektedir. 1500'lerden beri kullanılmakta olan
                            standard Lorem Ipsum metinleri ilgilenenler için
                            yeniden üretilmiştir. Çiçero tarafından yazılan
                            1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham
                            çevirisinden alınan İngilizce sürümleri eşliğinde
                            özgün biçiminden yeniden üretilmiştir.
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {value === 1 && (
                  <div style={{ width: '100%' }}>
                    {this.props.items.map((place) => (
                      <div key={place.id} id={place.id}>
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
                                zIndex: '0',
                                width: '160px',
                                height: '40px',
                                backgroundColor: '#2855ac',
                                fontSize: '22px',
                                color: 'white',
                                borderRadius: '20px',
                                textAlign: 'center',
                              }}
                            >
                              Fotoğraflar
                            </div>
                          </Col>
                          {place.imageUrl.map(function (role, i) {
                            return (
                              <Col sm={6} key={i}>
                                <img
                                  src={role.src}
                                  alt='...'
                                  width='100%'
                                  style={{
                                    marginTop: '20px',
                                    display: 'inline-block',
                                    cursor: 'pointer',
                                  }}
                                  className='resimler2 opas'
                                />
                              </Col>
                            );
                          })}
                        </Row>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </SRLWrapper>
          </Row>
        </Container>
      </div>
    );
  }
}

SliderPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SliderPage);
