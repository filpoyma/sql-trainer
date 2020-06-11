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
    response: [],
    correctQuery: "",
    correctResponse: [],
    status: "ok",
    loading: false,
    page: 1,
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

  pageHandler = (page) => {
    this.setState({ page: page, response: [], isAnswerCorrect: null });
    this.setCorrectAnswer(challengeValues[page - 1][0]);
  };

  nextHandler = (page) => {
    if (page >= challengeValues.length) return;
    this.setState({ page });
    this.setState({
      isAnswerCorrect: null,
      response: [],
    });
    this.setCorrectAnswer(challengeValues[page - 1][0]);
  };

  submitHandler = async (event, query) => {
    const { correctResponse } = this.state;
    if (!query) return;
    event.preventDefault();
    this.setState({ loading: true });
    const data = await fetchData(query);
    if (data) {
      this.setState({ response: data.resp, status: data.status });
      if (equal(data?.resp, correctResponse))
        this.setState({ isAnswerCorrect: true });
      else this.setState({ isAnswerCorrect: false });
    } else alert("Что то с сервером не так...");
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
          submitHandler={this.submitHandler}
          nextHandler={this.nextHandler}
          page={page}
          pageHandler={(num) => this.pageHandler(num)}
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
