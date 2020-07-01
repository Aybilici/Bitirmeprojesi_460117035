import React from 'react';
import Table from 'react-bootstrap/Table';

export const Abone = ({ customers }) => {
  const AboneRow = (customer, index) => {
    return (
      <tr key={index}>
        <td> {index + 1} </td>
        <td>{customer.email}</td>
        {/*<td>{String(customer.confirmed)}</td>*/}
      </tr>
    );
  };

  const CustomerTable = customers.map((cust, index) => AboneRow(cust, index));

  const tableHeader = (
    <thead className='bgvi'>
      <tr>
        <th>#</th>
        <th>Email</th>
      </tr>
    </thead>
  );

  return (
    <Table>
      {tableHeader}
      <tbody className='even'>{CustomerTable}</tbody>
    </Table>
  );
};
