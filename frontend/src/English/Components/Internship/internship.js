import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
//import Col from "react-bootstrap/Col";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import image from '../../../images/student-interns.jpg';
import image2 from '../../../images/Student.jpg';
import image3 from '../../../images/best-practices-internship-programs.jpg';
import image4 from '../../../images/group.jpg';
//import Sorular from "../../../sorular";
import Mavi from '../../../logos/logoco.jpg';
import Logo from '../../../logos/logoco2.jpg';
import Menu from '../../Menu/menu';
import Footer from '../../Footer/footer';
import './internship.css';
import Question from './Questions';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  bigIndicator: {
    height: 5,
    backgroundColor: 'white',
    fontWeight: 'bold',
  },
  tabLabel: {
    fontSize: '30px',
  },
});

class BasicTabs extends React.Component {
  state = { value: 0 };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  componentDidMount() {
    document.title = 'Internship';
  }
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <Menu />
        <div className='logoback' style={{ width: '100%' }}>
          <div style={{ width: '100%', height: '15px' }}></div>
          <Container>
            <Row
              className='progs'
              style={{
                border: '10px #ffc900 solid',
                marginTop: '100px',
              }}
            >
              <div
                style={{
                  maxWidth: '50%',
                  height: '75px',
                  margin: '-150px auto',
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
                  margin: '-100px auto 0px auto',
                  borderRadius: '10px',
                  color: 'white',
                }}
              >
                <h3>Internship</h3>
              </div>

              <AppBar
                position='static'
                key='appbar'
                className={classes.tabLabel}
                style={{
                  padding: '10px',
                  backgroundColor: '#2855ac',
                  color: 'white',
                  fontSize: '20px',
                }}
              >
                <Tabs
                  classes={{ indicator: classes.bigIndicator }}
                  variant='fullWidth'
                  value={value}
                  onChange={this.handleChange}
                >
                  <Tab
                    label='What is Internship'
                    style={{ fontWeight: 'bold', fontSize: '14px' }}
                  />
                  <Tab
                    label='Necessary vocational training'
                    style={{ fontWeight: 'bold', fontSize: '14px' }}
                  />
                  <Tab
                    label='Volunteer Internship'
                    style={{ fontWeight: 'bold', fontSize: '14px' }}
                  />
                </Tabs>
              </AppBar>

              <div key='tab-content'>
                {value === 0 && (
                  <div>
                    <h3
                      style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        marginBottom: '20px',
                      }}
                    >
                      Lorem Ipsum Nedir?
                    </h3>
                    <div
                      style={{
                        maxWidth: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        padding: '15px 15px 15px 15px',
                        borderRight: '7px solid #2855ac',
                        borderBottom: '7px solid #2855ac',
                        overflow: 'auto',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <div
                        style={{
                          float: 'left',
                          padding: '15px',
                          backgroundColor: 'white',
                        }}
                        className='resimler'
                      >
                        <img
                          src={image}
                          alt='...'
                          width='350px'
                          height='200px'
                          style={{}}
                          className='resimler2'
                        />
                      </div>

                      <div
                        className='yazi'
                        style={{
                          padding: '10px',
                        }}
                      >
                        <h4>Nereden Gelir?</h4>
                        <p
                          style={{
                            textAlign: 'justify',
                          }}
                        >
                          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan
                          mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                          matbaacının bir hurufat numune kitabı oluşturmak üzere
                          bir yazı galerisini alarak karıştırdığı 1500'lerden
                          beri endüstri standardı sahte metinler olarak
                          kullanılmıştır. Beşyüz yıl boyunca varlığını
                          sürdürmekle kalmamış, aynı zamanda pek değişmeden
                          elektronik dizgiye de sıçramıştır. 1960'larda Lorem
                          Ipsum pasajları da içeren Letraset yapraklarının
                          yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
                          Lorem Ipsum sürümleri içeren masaüstü yayıncılık
                          yazılımları ile popüler olmuştur.
                        </p>
                      </div>
                    </div>

                    <img
                      src={Mavi}
                      alt='mavi'
                      width='40px'
                      height='40px'
                      style={{
                        position: 'absolute',
                        right: '0',
                        left: '0',
                        margin: '-23px auto 0px auto',
                        zIndex: '1',
                        borderRadius: '50%',
                        border: '5px solid #2855ac',
                      }}
                    />
                    <div
                      style={{
                        maxWidth: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        padding: '15px 15px 15px 15px',
                        borderLeft: '7px solid #2855ac',
                        borderBottom: '7px solid #2855ac',
                        overflow: 'auto',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <div
                        style={{
                          float: 'right',
                          padding: '15px',
                          backgroundColor: 'white',
                        }}
                        className='resimler'
                      >
                        <img
                          src={image2}
                          alt='...'
                          width='350px'
                          height='200px'
                          style={{}}
                          className='resimler2'
                        />
                      </div>

                      <div
                        className='yazi'
                        style={{
                          padding: '10px',
                        }}
                      >
                        <h4>Nereden Kullanırız?</h4>
                        <p
                          style={{
                            textAlign: 'justify',
                          }}
                        >
                          Yinelenen bir sayfa içeriğinin okuyucunun dikkatini
                          dağıttığı bilinen bir gerçektir. Lorem Ipsum
                          kullanmanın amacı, sürekli 'buraya metin gelecek,
                          buraya metin gelecek' yazmaya kıyasla daha dengeli bir
                          harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu
                          anda birçok masaüstü yayıncılık paketi ve web sayfa
                          düzenleyicisi, varsayılan mıgır metinler olarak Lorem
                          Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem
                          ipsum' anahtar sözcükleri ile arama yapıldığında henüz
                          tasarım aşamasında olan çok sayıda site listelenir.
                          Yıllar içinde, bazen kazara, bazen bilinçli olarak
                          (örneğin mizah katılarak), çeşitli sürümleri
                          geliştirilmiştir.
                        </p>
                      </div>
                    </div>
                    <img
                      src={Mavi}
                      alt='mavi'
                      width='40px'
                      height='40px'
                      style={{
                        position: 'absolute',
                        right: '0',
                        left: '0',
                        margin: '-23px auto 0px auto',
                        zIndex: '1',
                        borderRadius: '50%',
                        border: '5px solid #2855ac',
                      }}
                    />
                    <div
                      style={{
                        maxWidth: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        borderRight: '7px solid #2855ac',
                        borderBottom: '7px solid #2855ac',
                        padding: '15px 15px 15px 15px',
                        overflow: 'auto',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <div
                        className='yazi'
                        style={{
                          padding: '10px',
                        }}
                      >
                        <h4>Yaygın inancın tersine</h4>
                        <p
                          style={{
                            textAlign: 'justify',
                          }}
                        >
                          Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri
                          M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına
                          kadar uzanan 2000 yıllık bir geçmişi vardır.
                          Virginia'daki Hampden-Sydney College'dan Latince
                          profesörü Richard McClintock, bir Lorem Ipsum
                          pasajında geçen ve anlaşılması en güç sözcüklerden
                          biri olan 'consectetur' sözcüğünün klasik edebiyattaki
                          örneklerini incelediğinde kesin bir kaynağa
                          ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45
                          tarihinde kaleme alınan "de Finibus Bonorum et
                          Malorum" (İyi ve Kötünün Uç Sınırları) eserinin
                          1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir.
                          Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans
                          döneminde çok popüler olmuştur. Lorem Ipsum pasajının
                          ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32
                          sayılı bölümdeki bir satırdan gelmektedir. 1500'lerden
                          beri kullanılmakta olan standard Lorem Ipsum metinleri
                          ilgilenenler için yeniden üretilmiştir. Çiçero
                          tarafından yazılan 1.10.32 ve 1.10.33 bölümleri de
                          1914 H. Rackham çevirisinden alınan İngilizce
                          sürümleri eşliğinde özgün biçiminden yeniden
                          üretilmiştir. 1500'lerden beri kullanılmakta olan
                          standard Lorem Ipsum metinleri ilgilenenler için
                          yeniden üretilmiştir. Çiçero tarafından yazılan
                          1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham
                          çevirisinden alınan İngilizce sürümleri eşliğinde
                          özgün biçiminden yeniden üretilmiştir.
                        </p>
                      </div>
                    </div>
                    <img
                      src={Mavi}
                      alt='mavi'
                      width='40px'
                      height='40px'
                      style={{
                        position: 'absolute',
                        right: '0',
                        left: '0',
                        margin: '-23px auto 0px auto',
                        zIndex: '1',
                        borderRadius: '50%',
                        border: '5px solid #2855ac',
                      }}
                    />

                    <div
                      style={{
                        maxWidth: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        borderLeft: '7px solid #2855ac',
                        borderBottom: '7px solid #2855ac',
                        padding: '15px 15px 15px 15px',
                        overflow: 'auto',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <div
                        style={{
                          float: 'left',
                          padding: '15px',
                          backgroundColor: 'white',
                        }}
                        className='resimler'
                      >
                        <img
                          src={image3}
                          alt='...'
                          width='350px'
                          height='200px'
                          style={{}}
                          className='resimler2'
                        />
                      </div>

                      <div
                        className='yazi'
                        style={{
                          padding: '10px',
                          textAlign: 'justify',
                        }}
                      >
                        <h4>Nereden Gelir?</h4>
                        Yaygın inancın tersine, Lorem Ipsum rastgele
                        sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana
                        klasik Latin edebiyatına kadar uzanan 2000 yıllık bir
                        geçmişi vardır. Virginia'daki Hampden-Sydney College'dan
                        Latince profesörü Richard McClintock, bir Lorem Ipsum
                        pasajında geçen ve anlaşılması en güç sözcüklerden biri
                        olan 'consectetur' sözcüğünün klasik edebiyattaki
                        örneklerini incelediğinde kesin bir kaynağa ulaşmıştır.
                        Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme
                        alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün
                        Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı
                        bölümlerinden gelmektedir. Bu kitap, ahlak kuramı
                        üzerine bir tezdir ve Rönesans döneminde çok popüler
                        olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem
                        ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir
                        satırdan gelmektedir. 1500'lerden beri kullanılmakta
                        olan standard Lorem Ipsum metinleri ilgilenenler için
                        yeniden üretilmiştir. Çiçero tarafından yazılan 1.10.32
                        ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden
                        alınan İngilizce sürümleri eşliğinde özgün biçiminden
                        yeniden üretilmiştir.
                        <div
                          style={{
                            float: 'right',
                            padding: '15px',
                            backgroundColor: 'white',
                          }}
                          className='resimler'
                        >
                          <img
                            src={image3}
                            alt='...'
                            width='350px'
                            height='200px'
                            style={{}}
                            className='resimler2'
                          />
                        </div>
                        Yaygın inancın tersine, Lorem Ipsum rastgele
                        sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana
                        klasik Latin edebiyatına kadar uzanan 2000 yıllık bir
                        geçmişi vardır. Virginia'daki Hampden-Sydney College'dan
                        Latince profesörü Richard McClintock, bir Lorem Ipsum
                        pasajında geçen ve anlaşılması en güç sözcüklerden biri
                        olan 'consectetur' sözcüğünün klasik edebiyattaki
                        örneklerini incelediğinde kesin bir kaynağa ulaşmıştır.
                        Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme
                        alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün
                        Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı
                        bölümlerinden gelmektedir. Bu kitap, ahlak kuramı
                        üzerine bir tezdir ve Rönesans döneminde çok popüler
                        olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem
                        ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir
                        satırdan gelmektedir. 1500'lerden beri kullanılmakta
                        olan standard Lorem Ipsum metinleri ilgilenenler için
                        yeniden üretilmiştir. Çiçero tarafından yazılan 1.10.32
                        ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden
                        alınan İngilizce sürümleri eşliğinde özgün biçiminden
                        yeniden üretilmiştir.
                      </div>
                    </div>
                    <img
                      src={Mavi}
                      alt='mavi'
                      width='40px'
                      height='40px'
                      style={{
                        position: 'absolute',
                        right: '0',
                        left: '0',
                        margin: '-23px auto 0px auto',
                        zIndex: '1',
                        borderRadius: '50%',
                        border: '5px solid #2855ac',
                      }}
                    />
                    <div
                      style={{
                        maxWidth: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        borderRight: '7px solid #2855ac',
                        padding: '15px 15px 15px 15px',
                        overflow: 'auto',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <div
                        style={{
                          float: 'right',
                          padding: '15px',
                          backgroundColor: 'white',
                        }}
                        className='resimler'
                      >
                        <img
                          src={image4}
                          alt='...'
                          width='350px'
                          height='200px'
                          style={{}}
                          className='resimler2'
                        />
                      </div>

                      <div
                        className='yazi'
                        style={{
                          padding: '10px',
                        }}
                      >
                        <h4>Yaygın inancın tersine</h4>
                        <p
                          style={{
                            textAlign: 'justify',
                          }}
                        >
                          Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri
                          M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına
                          kadar uzanan 2000 yıllık bir geçmişi vardır.
                          Virginia'daki Hampden-Sydney College'dan Latince
                          profesörü Richard McClintock, bir Lorem Ipsum
                          pasajında geçen ve anlaşılması en güç sözcüklerden
                          biri olan 'consectetur' sözcüğünün klasik edebiyattaki
                          örneklerini incelediğinde kesin bir kaynağa
                          ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45
                          tarihinde kaleme alınan "de Finibus Bonorum et
                          Malorum" (İyi ve Kötünün Uç Sınırları) eserinin
                          1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir.
                          Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans
                          döneminde çok popüler olmuştur. Lorem Ipsum pasajının
                          ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32
                          sayılı bölümdeki bir satırdan gelmektedir. 1500'lerden
                          beri kullanılmakta olan standard Lorem Ipsum metinleri
                          ilgilenenler için yeniden üretilmiştir. Çiçero
                          tarafından yazılan 1.10.32 ve 1.10.33 bölümleri de
                          1914 H. Rackham çevirisinden alınan İngilizce
                          sürümleri eşliğinde özgün biçiminden yeniden
                          üretilmiştir. 1500'lerden beri kullanılmakta olan
                          standard Lorem Ipsum metinleri ilgilenenler için
                          yeniden üretilmiştir. Çiçero tarafından yazılan
                          1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham
                          çevirisinden alınan İngilizce sürümleri eşliğinde
                          özgün biçiminden yeniden üretilmiştir.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {value === 1 && (
                  <div>
                    <h3
                      style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        marginBottom: '20px',
                      }}
                    >
                      Necessary vocational training
                    </h3>
                    <div
                      style={{
                        maxWidth: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        margin: '0px 0px 50px 0px',
                        padding: '15px 15px 15px 15px',
                        overflow: 'auto',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <div className='ctopright'></div>
                      <div
                        style={{
                          float: 'left',
                          padding: '15px',
                          backgroundColor: 'white',
                        }}
                        className='resimler'
                      >
                        <img
                          src={image3}
                          alt='...'
                          width='350px'
                          height='200px'
                          style={{}}
                          className='resimler2'
                        />
                      </div>

                      <div
                        className='yazi'
                        style={{
                          padding: '10px',
                        }}
                      >
                        <h4>Nereden Gelir?</h4>
                        <p
                          style={{
                            textAlign: 'justify',
                          }}
                        >
                          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan
                          mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                          matbaacının bir hurufat numune kitabı oluşturmak üzere
                          bir yazı galerisini alarak karıştırdığı 1500'lerden
                          beri endüstri standardı sahte metinler olarak
                          kullanılmıştır. Beşyüz yıl boyunca varlığını
                          sürdürmekle kalmamış, aynı zamanda pek değişmeden
                          elektronik dizgiye de sıçramıştır. 1960'larda Lorem
                          Ipsum pasajları da içeren Letraset yapraklarının
                          yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
                          Lorem Ipsum sürümleri içeren masaüstü yayıncılık
                          yazılımları ile popüler olmuştur.
                        </p>
                      </div>
                    </div>
                    <div className='triangle-topleft'></div>

                    <div
                      style={{
                        maxWidth: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        margin: '0px 0px 50px 0px',
                        padding: '15px 15px 15px 15px',
                        overflow: 'auto',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <div
                        style={{
                          float: 'right',
                          padding: '15px',
                          backgroundColor: 'white',
                        }}
                        className='resimler'
                      >
                        <img
                          src={image2}
                          alt='...'
                          width='350px'
                          height='200px'
                          style={{}}
                          className='resimler2'
                        />
                      </div>

                      <div
                        className='yazi'
                        style={{
                          padding: '10px',
                        }}
                      >
                        <h4>Nereden Kullanırız?</h4>
                        <p
                          style={{
                            textAlign: 'justify',
                          }}
                        >
                          Yinelenen bir sayfa içeriğinin okuyucunun dikkatini
                          dağıttığı bilinen bir gerçektir. Lorem Ipsum
                          kullanmanın amacı, sürekli 'buraya metin gelecek,
                          buraya metin gelecek' yazmaya kıyasla daha dengeli bir
                          harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu
                          anda birçok masaüstü yayıncılık paketi ve web sayfa
                          düzenleyicisi, varsayılan mıgır metinler olarak Lorem
                          Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem
                          ipsum' anahtar sözcükleri ile arama yapıldığında henüz
                          tasarım aşamasında olan çok sayıda site listelenir.
                          Yıllar içinde, bazen kazara, bazen bilinçli olarak
                          (örneğin mizah katılarak), çeşitli sürümleri
                          geliştirilmiştir.
                        </p>
                      </div>
                      <div className='triangle-bottomright'></div>
                    </div>
                    <div className='dtopright'></div>
                    <div
                      style={{
                        maxWidth: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        margin: '0px 0px 50px 0px',
                        padding: '15px 15px 15px 15px',
                        overflow: 'auto',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <div
                        style={{
                          float: 'left',
                          padding: '15px',
                          backgroundColor: 'white',
                        }}
                        className='resimler'
                      >
                        <img
                          src={image3}
                          alt='...'
                          width='350px'
                          height='200px'
                          style={{}}
                          className='resimler2'
                        />
                      </div>

                      <div
                        className='yazi'
                        style={{
                          padding: '10px',
                          textAlign: 'justify',
                        }}
                      >
                        <h4>Nereden Gelir?</h4>
                        Yaygın inancın tersine, Lorem Ipsum rastgele
                        sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana
                        klasik Latin edebiyatına kadar uzanan 2000 yıllık bir
                        geçmişi vardır. Virginia'daki Hampden-Sydney College'dan
                        Latince profesörü Richard McClintock, bir Lorem Ipsum
                        pasajında geçen ve anlaşılması en güç sözcüklerden biri
                        olan 'consectetur' sözcüğünün klasik edebiyattaki
                        örneklerini incelediğinde kesin bir kaynağa ulaşmıştır.
                        Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme
                        alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün
                        Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı
                        bölümlerinden gelmektedir. Bu kitap, ahlak kuramı
                        üzerine bir tezdir ve Rönesans döneminde çok popüler
                        olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem
                        ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir
                        satırdan gelmektedir. 1500'lerden beri kullanılmakta
                        olan standard Lorem Ipsum metinleri ilgilenenler için
                        yeniden üretilmiştir. Çiçero tarafından yazılan 1.10.32
                        ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden
                        alınan İngilizce sürümleri eşliğinde özgün biçiminden
                        yeniden üretilmiştir.
                        <div
                          style={{
                            float: 'right',
                            padding: '15px',
                            backgroundColor: 'white',
                          }}
                          className='resimler'
                        >
                          <img
                            src={image3}
                            alt='...'
                            width='350px'
                            height='200px'
                            style={{}}
                            className='resimler2'
                          />
                        </div>
                        Yaygın inancın tersine, Lorem Ipsum rastgele
                        sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana
                        klasik Latin edebiyatına kadar uzanan 2000 yıllık bir
                        geçmişi vardır. Virginia'daki Hampden-Sydney College'dan
                        Latince profesörü Richard McClintock, bir Lorem Ipsum
                        pasajında geçen ve anlaşılması en güç sözcüklerden biri
                        olan 'consectetur' sözcüğünün klasik edebiyattaki
                        örneklerini incelediğinde kesin bir kaynağa ulaşmıştır.
                        Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme
                        alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün
                        Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı
                        bölümlerinden gelmektedir. Bu kitap, ahlak kuramı
                        üzerine bir tezdir ve Rönesans döneminde çok popüler
                        olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem
                        ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir
                        satırdan gelmektedir. 1500'lerden beri kullanılmakta
                        olan standard Lorem Ipsum metinleri ilgilenenler için
                        yeniden üretilmiştir. Çiçero tarafından yazılan 1.10.32
                        ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden
                        alınan İngilizce sürümleri eşliğinde özgün biçiminden
                        yeniden üretilmiştir.
                      </div>
                    </div>
                    <div className='topleft'></div>
                    <div
                      style={{
                        maxWidth: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        margin: '0px 0px 50px 0px',
                        padding: '15px 15px 15px 15px',
                        overflow: 'auto',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <div
                        style={{
                          float: 'right',
                          padding: '15px',
                          backgroundColor: 'white',
                        }}
                        className='resimler'
                      >
                        <img
                          src={image4}
                          alt='...'
                          width='350px'
                          height='200px'
                          style={{}}
                          className='resimler2'
                        />
                      </div>

                      <div
                        className='yazi'
                        style={{
                          padding: '10px',
                        }}
                      >
                        <h4>Yaygın inancın tersine</h4>
                        <p
                          style={{
                            textAlign: 'justify',
                          }}
                        >
                          Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri
                          M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına
                          kadar uzanan 2000 yıllık bir geçmişi vardır.
                          Virginia'daki Hampden-Sydney College'dan Latince
                          profesörü Richard McClintock, bir Lorem Ipsum
                          pasajında geçen ve anlaşılması en güç sözcüklerden
                          biri olan 'consectetur' sözcüğünün klasik edebiyattaki
                          örneklerini incelediğinde kesin bir kaynağa
                          ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45
                          tarihinde kaleme alınan "de Finibus Bonorum et
                          Malorum" (İyi ve Kötünün Uç Sınırları) eserinin
                          1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir.
                          Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans
                          döneminde çok popüler olmuştur. Lorem Ipsum pasajının
                          ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32
                          sayılı bölümdeki bir satırdan gelmektedir. 1500'lerden
                          beri kullanılmakta olan standard Lorem Ipsum metinleri
                          ilgilenenler için yeniden üretilmiştir. Çiçero
                          tarafından yazılan 1.10.32 ve 1.10.33 bölümleri de
                          1914 H. Rackham çevirisinden alınan İngilizce
                          sürümleri eşliğinde özgün biçiminden yeniden
                          üretilmiştir. 1500'lerden beri kullanılmakta olan
                          standard Lorem Ipsum metinleri ilgilenenler için
                          yeniden üretilmiştir. Çiçero tarafından yazılan
                          1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham
                          çevirisinden alınan İngilizce sürümleri eşliğinde
                          özgün biçiminden yeniden üretilmiştir.
                        </p>
                      </div>
                    </div>
                    <div
                      className='tikla'
                      style={{
                        maxWidth: '350px',
                        textAlign: 'center',
                        margin: '0px auto 20px auto',
                        padding: '15px',
                        overflow: 'auto',
                        left: '0',
                        right: '0',
                        zIndex: '1',
                        position: 'relative',
                        backgroundColor: 'white',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <h3>
                        If compulsory internship is suitable for you, join now!
                      </h3>
                      <Link to='/en/Register/Compulsory'>
                        <button className='foto'>JOIN INTERNSHIP!</button>
                      </Link>
                    </div>
                    <div className='etop'></div>
                  </div>
                )}
                {value === 2 && (
                  <div>
                    <h3
                      style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        marginBottom: '20px',
                      }}
                    >
                      Volunteer Internship
                    </h3>
                    <div
                      style={{
                        maxWidth: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        margin: '0px 0px 50px 0px',
                        padding: '15px 15px 15px 15px',
                        overflow: 'auto',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <div className='ctopright'></div>
                      <div
                        style={{
                          float: 'left',
                          padding: '15px',
                          backgroundColor: 'white',
                        }}
                        className='resimler'
                      >
                        <img
                          src={image4}
                          alt='...'
                          width='350px'
                          height='200px'
                          style={{}}
                          className='resimler2'
                        />
                      </div>

                      <div
                        className='yazi'
                        style={{
                          padding: '10px',
                        }}
                      >
                        <h4>Nereden Gelir?</h4>
                        <p
                          style={{
                            textAlign: 'justify',
                          }}
                        >
                          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan
                          mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir
                          matbaacının bir hurufat numune kitabı oluşturmak üzere
                          bir yazı galerisini alarak karıştırdığı 1500'lerden
                          beri endüstri standardı sahte metinler olarak
                          kullanılmıştır. Beşyüz yıl boyunca varlığını
                          sürdürmekle kalmamış, aynı zamanda pek değişmeden
                          elektronik dizgiye de sıçramıştır. 1960'larda Lorem
                          Ipsum pasajları da içeren Letraset yapraklarının
                          yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
                          Lorem Ipsum sürümleri içeren masaüstü yayıncılık
                          yazılımları ile popüler olmuştur.
                        </p>
                      </div>
                    </div>
                    <div className='triangle-topleft'></div>
                    <div className='triangle-bottomright'></div>
                    <div
                      style={{
                        maxWidth: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        margin: '0px 0px 50px 0px',
                        padding: '15px 15px 15px 15px',
                        overflow: 'auto',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <div
                        style={{
                          float: 'right',
                          padding: '15px',
                          backgroundColor: 'white',
                        }}
                        className='resimler'
                      >
                        <img
                          src={image2}
                          alt='...'
                          width='350px'
                          height='200px'
                          style={{}}
                          className='resimler2'
                        />
                      </div>

                      <div
                        className='yazi'
                        style={{
                          padding: '10px',
                        }}
                      >
                        <h4>Nereden Kullanırız?</h4>
                        <p
                          style={{
                            textAlign: 'justify',
                          }}
                        >
                          Yinelenen bir sayfa içeriğinin okuyucunun dikkatini
                          dağıttığı bilinen bir gerçektir. Lorem Ipsum
                          kullanmanın amacı, sürekli 'buraya metin gelecek,
                          buraya metin gelecek' yazmaya kıyasla daha dengeli bir
                          harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu
                          anda birçok masaüstü yayıncılık paketi ve web sayfa
                          düzenleyicisi, varsayılan mıgır metinler olarak Lorem
                          Ipsum kullanmaktadır. Ayrıca arama motorlarında 'lorem
                          ipsum' anahtar sözcükleri ile arama yapıldığında henüz
                          tasarım aşamasında olan çok sayıda site listelenir.
                          Yıllar içinde, bazen kazara, bazen bilinçli olarak
                          (örneğin mizah katılarak), çeşitli sürümleri
                          geliştirilmiştir.
                        </p>
                      </div>
                    </div>
                    <div className='dtopright'></div>
                    <div
                      style={{
                        maxWidth: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        margin: '0px 0px 50px 0px',
                        padding: '15px 15px 15px 15px',
                        overflow: 'auto',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <div
                        style={{
                          float: 'left',
                          padding: '15px',
                          backgroundColor: 'white',
                        }}
                        className='resimler'
                      >
                        <img
                          src={image3}
                          alt='...'
                          width='350px'
                          height='200px'
                          style={{}}
                          className='resimler2'
                        />
                      </div>

                      <div
                        className='yazi'
                        style={{
                          padding: '10px',
                          textAlign: 'justify',
                        }}
                      >
                        <h4>Nereden Gelir?</h4>
                        Yaygın inancın tersine, Lorem Ipsum rastgele
                        sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana
                        klasik Latin edebiyatına kadar uzanan 2000 yıllık bir
                        geçmişi vardır. Virginia'daki Hampden-Sydney College'dan
                        Latince profesörü Richard McClintock, bir Lorem Ipsum
                        pasajında geçen ve anlaşılması en güç sözcüklerden biri
                        olan 'consectetur' sözcüğünün klasik edebiyattaki
                        örneklerini incelediğinde kesin bir kaynağa ulaşmıştır.
                        Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme
                        alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün
                        Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı
                        bölümlerinden gelmektedir. Bu kitap, ahlak kuramı
                        üzerine bir tezdir ve Rönesans döneminde çok popüler
                        olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem
                        ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir
                        satırdan gelmektedir. 1500'lerden beri kullanılmakta
                        olan standard Lorem Ipsum metinleri ilgilenenler için
                        yeniden üretilmiştir. Çiçero tarafından yazılan 1.10.32
                        ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden
                        alınan İngilizce sürümleri eşliğinde özgün biçiminden
                        yeniden üretilmiştir.
                        <div
                          style={{
                            float: 'right',
                            padding: '15px',
                            backgroundColor: 'white',
                          }}
                          className='resimler'
                        >
                          <img
                            src={image3}
                            alt='...'
                            width='350px'
                            height='200px'
                            style={{}}
                            className='resimler2'
                          />
                        </div>
                        Yaygın inancın tersine, Lorem Ipsum rastgele
                        sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana
                        klasik Latin edebiyatına kadar uzanan 2000 yıllık bir
                        geçmişi vardır. Virginia'daki Hampden-Sydney College'dan
                        Latince profesörü Richard McClintock, bir Lorem Ipsum
                        pasajında geçen ve anlaşılması en güç sözcüklerden biri
                        olan 'consectetur' sözcüğünün klasik edebiyattaki
                        örneklerini incelediğinde kesin bir kaynağa ulaşmıştır.
                        Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme
                        alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün
                        Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı
                        bölümlerinden gelmektedir. Bu kitap, ahlak kuramı
                        üzerine bir tezdir ve Rönesans döneminde çok popüler
                        olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem
                        ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir
                        satırdan gelmektedir. 1500'lerden beri kullanılmakta
                        olan standard Lorem Ipsum metinleri ilgilenenler için
                        yeniden üretilmiştir. Çiçero tarafından yazılan 1.10.32
                        ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden
                        alınan İngilizce sürümleri eşliğinde özgün biçiminden
                        yeniden üretilmiştir.
                      </div>
                    </div>
                    <div className='topleft'></div>
                    <div
                      style={{
                        maxWidth: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        margin: '0px 0px 50px 0px',
                        padding: '15px 15px 15px 15px',
                        overflow: 'auto',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <div
                        style={{
                          float: 'right',
                          padding: '15px',
                          backgroundColor: 'white',
                        }}
                        className='resimler'
                      >
                        <img
                          src={image4}
                          alt='...'
                          width='350px'
                          height='200px'
                          style={{}}
                          className='resimler2'
                        />
                      </div>

                      <div
                        className='yazi'
                        style={{
                          padding: '10px',
                        }}
                      >
                        <h4>Yaygın inancın tersine</h4>
                        <p
                          style={{
                            textAlign: 'justify',
                          }}
                        >
                          Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri
                          M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına
                          kadar uzanan 2000 yıllık bir geçmişi vardır.
                          Virginia'daki Hampden-Sydney College'dan Latince
                          profesörü Richard McClintock, bir Lorem Ipsum
                          pasajında geçen ve anlaşılması en güç sözcüklerden
                          biri olan 'consectetur' sözcüğünün klasik edebiyattaki
                          örneklerini incelediğinde kesin bir kaynağa
                          ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45
                          tarihinde kaleme alınan "de Finibus Bonorum et
                          Malorum" (İyi ve Kötünün Uç Sınırları) eserinin
                          1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir.
                          Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans
                          döneminde çok popüler olmuştur. Lorem Ipsum pasajının
                          ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32
                          sayılı bölümdeki bir satırdan gelmektedir. 1500'lerden
                          beri kullanılmakta olan standard Lorem Ipsum metinleri
                          ilgilenenler için yeniden üretilmiştir. Çiçero
                          tarafından yazılan 1.10.32 ve 1.10.33 bölümleri de
                          1914 H. Rackham çevirisinden alınan İngilizce
                          sürümleri eşliğinde özgün biçiminden yeniden
                          üretilmiştir. 1500'lerden beri kullanılmakta olan
                          standard Lorem Ipsum metinleri ilgilenenler için
                          yeniden üretilmiştir. Çiçero tarafından yazılan
                          1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham
                          çevirisinden alınan İngilizce sürümleri eşliğinde
                          özgün biçiminden yeniden üretilmiştir.
                        </p>
                      </div>
                    </div>

                    <div
                      className='tikla'
                      style={{
                        maxWidth: '350px',
                        textAlign: 'center',
                        margin: '0px auto 20px auto',
                        padding: '15px',
                        overflow: 'auto',
                        left: '0',
                        right: '0',
                        zIndex: '1',
                        position: 'relative',
                        backgroundColor: 'white',
                        boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                      }}
                    >
                      <h3>
                        If volunteer internship is suitable for you, join now!
                      </h3>
                      <Link to='/en/Register/Volunteers'>
                        <button className='foto'>JOIN INTERNSHIP!</button>
                      </Link>
                    </div>
                    <div className='etop'></div>
                  </div>
                )}
              </div>
              <Question />
            </Row>
          </Container>
          <Footer />
        </div>
      </div>
    );
  }
}

BasicTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTabs);
