import React from "react";

export const QuestionHeader = ({ title }) => (
  <h3 style={styles.title}>{title}</h3>
);

const styles = {
  title: { display: "flex", height: 45, alignItems: "flex-end" },
};
