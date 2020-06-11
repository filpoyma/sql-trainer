import React from "react";
import { Table } from "semantic-ui-react";

const TableInfo = ({header, data = []}) => (
  <Table celled compact='very' color='blue'>
    <Table.Header>
      <Table.Row>
       <Table.HeaderCell>{header}</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body onScroll={() => console.log("scroll")}>
      {data.map((val) => (
        <Table.Row key={val}>
          <Table.Cell >{val}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default React.memo(TableInfo);