import React from 'react';
import {Grid} from "semantic-ui-react";
import { TableRes } from "./TableRes";
import {CONTENT} from "../api/langConsts";

const TablesResNM = ({status, response = [], correctResponse = [], lang}) => {

  const tableHeader = (res) => (res.length ? Object.keys(res[0]) : []);
  const tableData = (res) => res?.map((item) => Object.values(item));
  return <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <p>{CONTENT.yourResult[lang]}:</p>
        {!status && (
          <p>
            {CONTENT.requestErr[lang]} <br />
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
        <p>{CONTENT.expResult[lang]}:</p>
        <TableRes
          header={tableHeader(correctResponse)}
          data={tableData(correctResponse)}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
};
export const TablesRes = React.memo(TablesResNM);