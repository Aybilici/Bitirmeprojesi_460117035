import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mavi from '../../../logos/logoco.jpg';

class Question extends React.Component {
  render() {
    return (
      <div>
        <Col sm={12} style={{ marginBottom: '0px' }}>
          <div
            style={{
              width: '90%',
              margin: '60px auto 0px',
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
              margin: '-25px auto 0px auto',
              zIndex: '1',
              borderRadius: '50%',
              border: '5px solid #2855ac',
            }}
          />
        </Col>
        <div
          id='sorular'
          style={{
            width: '100%',
            border: '5px solid #fff',
            marginTop: '0px',
            padding: '0px 0px 40px 0px',
          }}
        >
          <div
            style={{
              maxWidth: '80%',
              margin: '0px auto',
            }}
          >
            <h2
              style={{
                textAlign: 'center',
                padding: '15px',
                margin: '20px auto',
              }}
            >
              Sıkı Sorulan Sorular
            </h2>
          </div>
          <Row>
            <Col sm={6}>
              <ExpansionPanel
                style={{
                  boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                  backgroundColor: '#3f51b5',
                  color: 'White',
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography>Expansion Panel 1</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Col>
            <Col sm={6}>
              <ExpansionPanel
                style={{
                  boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel2a-content'
                  id='panel2a-header'
                >
                  <Typography>Expansion Panel 2</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Col>
            <Col sm={6}>
              <ExpansionPanel
                style={{
                  boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                  backgroundColor: '#ffc900',
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel3a-content'
                  id='panel3a-header'
                >
                  <Typography>Expansion Panel 3</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Col>
            <Col sm={6}>
              <ExpansionPanel
                style={{
                  boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                  backgroundColor: '#3f51b5',
                  color: 'White',
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel4a-content'
                  id='panel4a-header'
                >
                  <Typography>Expansion Panel 4</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Col>
            <Col sm={6}>
              <ExpansionPanel
                style={{ boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)' }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel5a-content'
                  id='panel5a-header'
                >
                  <Typography>Expansion Panel 5</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Col>
            <Col sm={6}>
              <ExpansionPanel
                style={{
                  boxShadow: '0px 5px 15px 2px rgba(0,0,0,0.2)',
                  backgroundColor: '#ffc900',
                }}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel6a-content'
                  id='panel6a-header'
                >
                  <Typography>Expansion Panel 6</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Question;
