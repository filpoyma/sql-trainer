import React from "react";
import { Table } from "semantic-ui-react";

const TableInfo = ({header = [], data = []}) => (
  <Table celled compact='very' color='blue'>
    <Table.Header>
      <Table.Row>
        {header.map((head) => <Table.HeaderCell key={head}>{head}</Table.HeaderCell>)}
      </Table.Row>
    </Table.Header>

    <Table.Body onScroll={() => console.log("scroll")}>
      {data.map((val, i) => (
        <Table.Row key={val}>
          <Table.Cell >{val}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default React.memo(TableInfo);