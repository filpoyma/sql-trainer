import React, { Component } from "react";
import { Container, Divider, Header } from "semantic-ui-react";
import { fetchData } from "../lib/fetchSqlQuery";
import { TablesRes } from "../components/TablesRes";
import { AnswerArea } from "../components/AnswerArea";
import { challengeValues } from "../api/chalenge";

const equal = require("deep-equal");

class MainScreen extends Component {
  state = {
    response: [],
    correctQuery: '',
    correctResponse: [],
    status: "ok",
    loading: false,
    page: 1,
    isAnswerCorrect: false,
  };

  query = "";

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

  changeHandler = (event) => {
    // this.setState({ [event.target.name]: event.target.value });
    this.query = event.target.value;
  };

  pageHandler = (page) => {
    this.setState({ page: page });
    this.setCorrectAnswer(challengeValues[page-1][0]);
  }

  nextHandler = (page) => {
    console.log('next handler page', page)
    this.setState((prevState) => ({ ...prevState, page: prevState.page + 1 }));
    this.setState({ isAnswerCorrect: false });
    this.setCorrectAnswer(challengeValues[page-1][0]);

  };

  submitHandler = async (event) => {
    const { correctResponse } = this.state;
    if (!this.query) return;
    event.preventDefault();
    this.setState({ loading: true });
    const data = await fetchData(this.query);
    if (data) {
      this.setState({ response: data.resp, status: data.status });
      if (equal(data?.resp, correctResponse))
        this.setState({ isAnswerCorrect: true });
    } else alert("Что то с сервером не так...");

    this.setState({ loading: false });
  };

  render() {
    const { response, correctResponse, status, loading } = this.state;
    console.log("page", this.state.page);
    return (
      <Container style={{ marginTop: 20, minWidth: 770 }}>
        <Header as="h2">SQL Tutor</Header>
        <Divider />

        <AnswerArea
          loading={loading}
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
          nextHandler={this.nextHandler}
          page={this.state.page}
          pageHandler={(num) => this.pageHandler(num)}
          isCorrect={this.state.isAnswerCorrect}
          question={challengeValues[this.state.page - 1][1]}
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
