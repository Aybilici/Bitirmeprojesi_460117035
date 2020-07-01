import React from 'react';
import { CSVLink } from 'react-csv';
import Button from 'react-bootstrap/Button';

export const ExportReactCSV = ({ customers, fileName }) => {
  return (
    <CSVLink data={customers} filename={fileName}>
      <Button
        style={{
          color: 'white',
          textDecoration: 'underline',
          margin: '0px auto',
          backgroundColor: '#2855ac',
        }}
      >
        İndir
      </Button>
    </CSVLink>
  );
};
