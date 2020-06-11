import React from "react";

export const AppHeader = ({ isCorrect, challengeValue }) => {
  let headerStat = 'default';
  if (isCorrect === true) headerStat = 'correct';
  if (isCorrect === false) headerStat = 'incorrect';
  const topic = challengeValue[3].topic;
  const msg =  {
    default: `тема: ${topic}`,
    correct: 'верно',
    incorrect: 'неверно'
  };
  return (
    <header style={{...styles.head, ...styles[headerStat]}}>
      <p>{msg[headerStat]}</p>
    </header>
  );
};

const styles = {
  head: {
    backgroundColor: '#ecedee',
    minHeight: "4vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2vmin",
    color: "black",
  },
  correct: {
    backgroundColor: '#21ba45',
    color: 'white'
  },
  incorrect: {
    backgroundColor: "#e6523a",
    color: 'white'
  }
};
