import React from 'react';
import {Grid} from "semantic-ui-react";
import TableRes from "./TableRes";

export const TablesRes = ({status, response = [], correctResponse = []}) => {

  const tableHeader = (res) => (res.length ? Object.keys(res[0]) : []);
  const tableData = (res) => res?.map((item) => Object.values(item));
  return <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <p>Ваш результат:</p>
        {!status && (
          <p>
            Ошибочный запрос: <br />
            {response[0]}
          </p>
        )}
        {status && (
          <TableRes
            header={tableHeader(response)}
            data={tableData(response)}
          />
        )}
      </Grid.Column>
      <Grid.Column width={8}>
        <p>Ожидаемый результат:</p>
        <TableRes
          header={tableHeader(correctResponse)}
          data={tableData(correctResponse)}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
};