import React from "react";
import { Button, Grid, TextArea } from "semantic-ui-react";

import TableInfo from "./TableInfo";
import AppPagination from "./Pagination";

export const AnswerArea = ({
  loading,
  submitHandler,
  page,
  isCorrect,
  nextHandler,
  challengeValue,
}) => {
  const [query, setQuery] = React.useState("");
  const question = challengeValue[1];
  const promptTables = challengeValue[3].tables;

  React.useEffect(() => {
    if (isCorrect) setQuery("");
  }, [isCorrect]);

  const onSubmitHandler = (event) => submitHandler(event, query);

  return (
    <Grid>
      <Grid.Column width={9} style={{ minWidth: 410 }}>
        <h3>{question}</h3>
        <TextArea
          placeholder="SQL запрос..."
          style={styles.textarea}
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {!isCorrect && (
          <Button
            fluid
            primary
            color={"green"}
            loading={loading}
            onClick={onSubmitHandler}
            content="Поехали"
          />
        )}
        {!!isCorrect && (
          <Button
            fluid
            color={"green"}
            labelPosition="right"
            icon="right chevron"
            content="Далее"
            onClick={() => nextHandler(page + 1)}
          />
        )}
        <div style={styles.pagination}>
          <AppPagination
            activePageHandele={nextHandler}
            activePage={page}
            isLoading={loading}
          />
        </div>
      </Grid.Column>
      <Grid.Column width={5} floated={"right"}>
        <h3>
          {" "}
          {promptTables?.length - 1 ? "Исходные таблицы" : "Исходная таблица"}
        </h3>
        {promptTables?.map((el) => (
          <TableInfo key={el.header} header={el.header} data={el.fields} />
        ))}
      </Grid.Column>
    </Grid>
  );
};

const styles = {
  textarea: {
    height: 200,
    minHeight: 100,
    maxHeight: 200,
    width: "100%",
    minWidth: "50%",
    maxWidth: "100%",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  },
};
