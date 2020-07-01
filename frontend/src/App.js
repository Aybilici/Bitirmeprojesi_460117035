import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';

//Turkish Pages
import Anasayfa from './Turkish/Home/home';
import Ilet from './Turkish/Components/Contacts/contacts';
import Basvuru from './Turkish/Components/Register/register';
import Zorunlu from './Turkish/Components/Register/compulsory/compulsory';
import Gonullu from './Turkish/Components/Register/volunteers/volunteer';
import Staj from './Turkish/Components/Internship/internship';
import Proje from './Turkish/Components/Projects/projects';
import Program from './Turkish/Components/Programs/programs';
import Calisma from './Turkish/Components/Programs/Work/works';
import Ogrenme from './Turkish/Components/Programs/Learn/learn';
import Memnun from './Turkish/Components/Programs/Satisfieds/Students';
import Projeler from './Turkish/Components/Projects/projectpages/Projects';
import ProjeSayfa from './Turkish/Components/Projects/projectpages/Project';
import Sunumlar from './Turkish/Components/Projects/presentationpages/presentations';
import Sunum from './Turkish/Components/Projects/presentationpages/Presentation';
import Ogrenciler from './Turkish/Components/Projects/studentpages/Students';
import ProjeSlider from './Turkish/Components/Projects/Slider/sliders';
import Fotograflar from './Turkish/Components/Programs/Photos/photo';
import Haberler from './Turkish/Components/News/news';
import Haber from './Turkish/Components/News/newsItems';
import Confirm from './Turkish/Footer/Subscribe/Confirm';

import Abone from './Turkish/Components/Abone/Abone';

//English Pages
import Home from './English/Home/home';
import Contact from './English/Components/Contacts/contacts';
import Register from './English/Components/Register/register';
import Compulsory from './English/Components/Register/compulsory/compulsory';
import Volunteers from './English/Components/Register/volunteers/volunteer';
import Internship from './English/Components/Internship/internship';
import Projects from './English/Components/Projects/projects';
import Programs from './English/Components/Programs/programs';
import Work from './English/Components/Programs/Work/works';
import Learn from './English/Components/Programs/Learn/learn';
import Satisfieds from './English/Components/Programs/Satisfieds/Students';
import Project from './English/Components/Projects/projectpages/Projects';
import ProjectPage from './English/Components/Projects/projectpages/Project';
import Presentations from './English/Components/Projects/presentationpages/presentations';
import Presentation from './English/Components/Projects/presentationpages/Presentation';
import Students from './English/Components/Projects/studentpages/Students';
import ProjectSlider from './English/Components/Projects/Slider/sliders';
import Photos from './English/Components/Programs/Photos/photo';
import News from './English/Components/News/news';
import NewsPage from './English/Components/News/newsItems';
import EngConfirm from './English/Footer/Subscribe/Confirm';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    zIndez: '5',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  ScrollTop: {
    backgroundColor: 'yellow',
  },
}));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#backtotopanchor'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Switch>
          {/* Turkish */}
          <Route path='/' component={Anasayfa} exact />
          <Route path='/Staj' component={Staj} exact />
          <Route path='/Basvuru' component={Basvuru} exact />
          <Route path='/Projeler' component={Proje} exact />
          <Route path='/Programlar' component={Program} exact />
          <Route path='/Basvura/Zorunlu' component={Zorunlu} exact />
          <Route path='/Basvura/Gonullu' component={Gonullu} exact />
          <Route path='/Calismalar' component={Calisma} exact />
          <Route path='/Ogrenmeler' component={Ogrenme} exact />
          <Route path='/Memnunlar' component={Memnun} exact />
          <Route path='/Proje' component={Projeler} exact />
          <Route path='/Fotograflar' component={Fotograflar} exact />
          <Route path='/Haberler' component={Haberler} exact />
          <Route path='/Abone' component={Abone} exact />
          <Route path='/:userId/haber' component={Haber} exact />
          <Route path='/:userId/proje' component={ProjeSayfa} exact />
          <Route path='/Sunumlar' component={Sunumlar} exact />
          <Route path='/:userId/sunum' component={Sunum} exact />
          <Route path='/BasariOlanlar' component={Ogrenciler} exact />
          <Route path='/:userId/projeler' component={ProjeSlider} exact />
          <Route exact path='/confirm/:id' component={Confirm} />
          <Route path='/iletisim' component={Ilet} exact />

          {/* English */}
          <Route path='/en' component={Home} exact />
          <Route path='/en/Internship' component={Internship} exact />
          <Route path='/en/Register' component={Register} exact />
          <Route path='/en/Projects' component={Projects} exact />
          <Route path='/en/Programs' component={Programs} exact />
          <Route path='/en/Register/Compulsory' component={Compulsory} exact />
          <Route path='/en/Register/Volunteers' component={Volunteers} exact />
          <Route path='/en/Work' component={Work} exact />
          <Route path='/en/Learn' component={Learn} exact />
          <Route path='/en/Satisfieds' component={Satisfieds} exact />
          <Route path='/en/Project' component={Project} exact />
          <Route path='/en/Photos' component={Photos} exact />
          <Route path='/en/News' component={News} exact />
          <Route path='/en/:userId/news' component={NewsPage} exact />
          <Route path='/en/:userId/project' component={ProjectPage} exact />
          <Route path='/en/Presentations' component={Presentations} exact />
          <Route
            path='/en/:userId/presentation'
            component={Presentation}
            exact
          />
          <Route path='/en/Students' component={Students} exact />
          <Route
            path='/en/:userId/projectslider'
            component={ProjectSlider}
            exact
          />
          <Route path='/en/Contact' component={Contact} exact />
          <Route exact path='/en/confirm/:id' component={EngConfirm} />
          <Redirect to='/' />
        </Switch>
        <div style={{ position: 'absolute', zIndex: '20' }}>
          <ScrollTop>
            <Fab
              size='small'
              aria-label='scroll back to top'
              style={{
                backgroundColor: 'ffc300',
                zIndex: '1000',
                position: 'absolute',
                right: '0px',
                bottom: '0px',
                width: '75px',
                height: '75px',
              }}
            >
              <KeyboardArrowUpIcon
                style={{ color: '#2855ac', width: '50px', height: '50px' }}
              />
            </Fab>
          </ScrollTop>
        </div>
      </Router>
    );
  }
}

export default App;
