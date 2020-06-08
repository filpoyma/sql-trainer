import React from "react";
import { Table } from "semantic-ui-react";

const TableRes = ({header = [], data = []}) => (
  <Table celled color='blue' className='tableRes'>
    <Table.Header>
      <Table.Row>
        {header.map((head) => <Table.HeaderCell key={head}>{head}</Table.HeaderCell>)}
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {data.map((values, i) => (
        <Table.Row key={values[0]}>
          {values.map((val) => <Table.Cell key={val}>{val}</Table.Cell>)}
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default React.memo(TableRes);
