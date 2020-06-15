import React, { Component } from "react";
import { Container, Divider, Header } from "semantic-ui-react";

import { fetchData } from "../lib/fetchSqlQuery";
import { TablesRes } from "../components/TablesRes";
import { AnswerArea } from "../components/AnswerArea";
import { challengeValues } from "../api/chalenge";
import { AppHeader } from "../components/Header";

const equal = require("deep-equal");

class MainScreen extends Component {
  state = {
    correctQuery: "",
    response: [],
    correctResponse: [],
    status: "ok",
    loading: false,
    page: +sessionStorage.getItem('SQLTrain') || 1,
    isAnswerCorrect: null,
  };

  componentDidMount() {
    this.setCorrectAnswer(challengeValues[0][0]);
  }

  setCorrectAnswer = async (request) => {
    this.setState({ loading: true });
    const data = await fetchData(request);
    if (data)
      this.setState({ correctResponse: data.resp, status: data.status });
    else alert("Что то с сервером не так...");
    this.setState({ loading: false });
  };

  nextHandler = (page) => {
    if (page > challengeValues.length) return;
    sessionStorage.setItem('SQLTrain', page);
    this.setState({
      page: page,
      isAnswerCorrect: null,
      response: [],
    });
    this.setCorrectAnswer(challengeValues[page - 1][0]);
  };

  submitHandler = async (event, query) => {
    const { correctResponse } = this.state;
    if (!query) return;
    this.setState({ loading: true });
    event.preventDefault();

    const data = await fetchData(query);
    if (!data) return alert("Что то с сервером не так...");

    this.setState({ response: data.resp, status: data.status });
    if (equal(data?.resp, correctResponse))
      this.setState({ isAnswerCorrect: true });
    else
      this.setState({ isAnswerCorrect: false });

    this.setState({ loading: false });
  };

  render() {
    const {
      response,
      correctResponse,
      status,
      loading,
      isAnswerCorrect,
      page,
    } = this.state;
    return (
      <Container style={{ marginTop: 20, minWidth: 770 }}>
        <AppHeader
          isCorrect={isAnswerCorrect}
          challengeValue={challengeValues[this.state.page - 1]}
        />
        <Header as="h2">SQL Train</Header>
        <Divider style={{ marginBottom: 35 }} />
        <AnswerArea
          loading={loading}
          page={page}
          submitHandler={this.submitHandler}
          nextHandler={this.nextHandler}
          isCorrect={isAnswerCorrect}
          challengeValue={challengeValues[page - 1]}
        />

        <TablesRes
          status={status}
          response={response}
          correctResponse={correctResponse}
        />
      </Container>
    );
  }
}

export default MainScreen;