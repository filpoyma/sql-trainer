import React from "react";
import { CONTENT } from "../api/langConsts";
import { Flag, Header, Icon, Menu } from "semantic-ui-react";

export const AppHeader = ({
  isCorrect,
  challengeValue,
  changeLangHandler,
  lang,
}) => {
  const topic = challengeValue[3].topic;

  let headerStat = "default";
  if (isCorrect === true) headerStat = "correct";
  if (isCorrect === false) headerStat = "incorrect";

  const msg = {
    default: `${CONTENT.topic[lang]}: ${topic}`,
    correct: CONTENT.correct[lang],
    incorrect: CONTENT.incorrect[lang],
  };

  return (
    <>
      <header style={{ ...styles.head, ...styles[headerStat] }}>
        <p>{msg[headerStat]}</p>
      </header>
      <Header style={styles.subtitle} dividing as="h2">
        <div>SQL Train</div>
        <div onClick={changeLangHandler} style={{ cursor: "pointer" }}>
          <Flag name={lang} />
        </div>
      </Header>
      <div style={styles.externalLink}>
        <a
          href="https://tprg.ru/q7p5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{ height: "35px", width: "35px", marginTop: "-23px" }}>
            <Icon name="question circle outline" size="large" />
          </div>
        </a>
      </div>
    </>
  );
};

const styles = {
  head: {
    backgroundColor: "#ecedee",
    minHeight: "4vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2vmin",
    color: "black",
  },
  subtitle: {
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  correct: {
    backgroundColor: "#21ba45",
    color: "white",
  },
  incorrect: {
    backgroundColor: "#e6523a",
    color: "white",
  },
  externalLink: {
    textAlign: "right",
    marginRight: "4px",
    display: "flex",
    justifyContent: "flex-end",
  },
};
