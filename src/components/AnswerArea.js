import React from "react";
import { Button, Grid, TextArea } from "semantic-ui-react";
import TableInfo from "./TableInfo";
import AppPagination from "./Pagination";

export const AnswerArea = ({ loading, submitHandler, changeHandler }) => {
  return (
    <Grid>
      <Grid.Column width={9} style={{minWidth: 410}}>
        <h3>
          "List the names of the top five customers based on the sums of their
          invoice totals"
        </h3>
        <TextArea
          placeholder="SQL запрос..."
          style={{
            minHeight: 100,
            width: "100%",
            height: "50%",
            maxWidth: "100%",
          }}
          name="query"
          onChange={changeHandler}
        />

        <Button
          fluid
          primary
          color={"green"}
          loading={loading}
          onClick={submitHandler}
          content="Поехали"
        />
        {/*<Button*/}
        {/*  fluid*/}
        {/*  color={"green"}*/}
        {/*  labelPosition="right"*/}
        {/*  icon="right chevron"*/}
        {/*  content="Далее"*/}
        {/*/>*/}
        <div   style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
        }}>
        <AppPagination activePageHandele={(n) => console.log(n)} activePage={1}
        />
        </div>
      </Grid.Column>
      <Grid.Column width={5} floated={"right"}>
        <h3>Исходные таблицы</h3>
        <TableInfo header={["albums"]} data={["id", "title", "artist_id"]} />
        <TableInfo header={["artists"]} data={["id", "name"]} />
        <TableInfo
          header={["track"]}
          data={["id", "name", "album_id", "media_type_id"]}
        />
      </Grid.Column>
    </Grid>
  );
};
