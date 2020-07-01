import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import data from './activitiesList.json';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

function Activities() {
  const [open, setOpen] = useState(false);

  const [modalData, setData] = useState();

  const CustomModal = () => {
    return modalData ? (
      <Dialog
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={open}
        onClose={handleClose}
      >
        <div>
          <DialogTitle id='customized-dialog-title' onClose={handleClose}>
            {modalData.name}
          </DialogTitle>
          <DialogContent dividers>
            <Typography variant='subtitle1' id='simple-modal-description'>
              {modalData.about}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              style={{ color: '#2855ac', fontWeight: 'bold' }}
            >
              Okudum
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    ) : null;
  };

  const handleOpen = (index) => {
    setOpen(true);
    setData(data[index]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        padding: '40px 20px',
        backgroundColor: '#114AA1',
        color: 'white',
        width: '95%',
        margin: '0px auto 10px auto',
        borderLeft: '7px solid #2855ac',
        borderBottom: '7px solid #2855ac',
        borderRight: '7px solid #2855ac',
        borderBottomLeftRadius: '30%',
        borderBottomRightRadius: '30%',
      }}
    >
      <h3 style={{ textAlign: 'center' }}>Etkinlikler</h3>
      <ul className='listelerm'>
        {data.map((d, index) => (
          <li
            key={index}
            style={{
              margin: '10px',
              textAlign: 'left',
            }}
          >
            <span
              className='tikladialog'
              onClick={() => {
                handleOpen(index);
              }}
            >
              {d.name}
            </span>{' '}
            <span style={{ color: '#ffc900', fontWeight: 'bold' }}>
              {d.new}
            </span>
          </li>
        ))}
      </ul>
      <CustomModal />
    </div>
  );
}

export default Activities;
