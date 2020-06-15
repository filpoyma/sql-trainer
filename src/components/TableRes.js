import React from "react";
import { Table } from "semantic-ui-react";

const TableResNM = ({ header = [], data = [] }) => (
  <div style={styles.table}>
    <Table celled  color= "blue" >
      <Table.Header>
        <Table.Row >
          {header.map((head) => (
            <Table.HeaderCell key={head}>{head}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((values, i) => (
          <Table.Row key={i}>
            {values.map((val, i) => (
              <Table.Cell key={i}>{val}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
);

export const TableRes = React.memo(TableResNM);

const styles = {
  table: {
    display: "block",
    maxHeight: "55vh",
    overflow: "auto",
  },
};
