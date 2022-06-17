import React from "react";
import { Button, Grid, TextArea } from "semantic-ui-react";

import TableInfo from "./TableInfo";
import AppPagination from "./Pagination";
import { CONTENT } from "../api/langConsts";
import { QuestionHeader } from "./QuestionHeader";

const AnswerArea = ({
  loading,
  submitHandler,
  page,
  isCorrect,
  nextHandler,
  challengeValue,
  lang,
  query,
  setQuery,
}) => {
  const question = challengeValue[1][lang];
  const promptTables = challengeValue[3].tables;

  // React.useEffect(() => {
  //   if (isCorrect) setQuery({query: ""});
  // }, [isCorrect]);

  const onSubmitHandler = (event) => submitHandler(event, query);
  const onNextHandler = (page) => {
    nextHandler(page + 1);
    setQuery({ query: "" });
  };
  return (
    <Grid>
      <Grid.Column width={10} style={{ minWidth: 410 }}>
        <QuestionHeader title={question} />
        <TextArea
          placeholder={
            window.localStorage.getItem(page.toString()) ||
            CONTENT.phTextArea[lang]
          }
          style={styles.textarea}
          name="query"
          value={query}
          onChange={(e) => setQuery({ query: e.target.value })}
        />

        {!isCorrect && (
          <Button
            fluid
            primary
            color={"green"}
            loading={loading}
            onClick={onSubmitHandler}
            content={CONTENT.runBtn[lang]}
          />
        )}
        {!!isCorrect && (
          <Button
            fluid
            color={"green"}
            labelPosition="right"
            icon="right chevron"
            content={CONTENT.nextBtn[lang]}
            onClick={() => onNextHandler(page)}
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
        <QuestionHeader
          title={
            promptTables?.length - 1
              ? CONTENT.infoTables[lang]
              : CONTENT.infoTable[lang]
          }
        />

        {promptTables?.map((el) => (
          <TableInfo key={el.header} header={el.header} data={el.fields} />
        ))}
      </Grid.Column>
    </Grid>
  );
};

export default React.memo(AnswerArea);

const styles = {
  textarea: {
    height: 200,
    width: "100%",
    padding: 15,
    fontWeight: "bold",
    fontSize: "18px",
    resize: "none",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  },
};
