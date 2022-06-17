import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import { fetchData } from "../lib/fetchSqlQuery";
import { TablesRes } from "../components/TablesRes";
import AnswerArea from "../components/AnswerArea";
import AppHeader from "../components/Header";
import { challengeValues } from "../api/chalenge";
import { CONTENT } from "../api/langConsts";

const equal = require("deep-equal");

class MainScreen extends Component {
  startPage = +window.sessionStorage.getItem("SQLTrainPage") || 1;
  lang = window.localStorage.getItem("SQLTrainLang") || "gb";

  state = {
    correctQuery: "",
    response: [],
    correctResponse: [],
    status: "ok",
    loading: false,
    page: this.startPage,
    isAnswerCorrect: null,
    lang: this.lang,
    query: "",
  };

  componentDidMount() {
    this.setCorrectAnswer(challengeValues[this.startPage - 1][0]);
  }

  setCorrectAnswer = async (request) => {
    this.setState({ loading: true });
    const data = await fetchData(request);
    if (data)
      this.setState({ correctResponse: data.resp, status: data.status });
    else alert("Server error :(");
    this.setState({ loading: false });
  };

  nextHandler = (page) => {
    console.log('file-MainScreen.js page:', page);
    console.log('file-MainScreen.js this.state.query:', this.state.query);
    console.log('window.localStorage', window.localStorage.getItem((page-1).toString()));
    if (page > challengeValues.length) return;
    if (
      this.state.query &&
      !window.localStorage.getItem((page-1).toString()) &&
      !window.confirm(CONTENT.willNotSave[this.state.lang])
    )
      return;
    window.sessionStorage.setItem("SQLTrainPage", page);
    this.setState({
      page: page,
      isAnswerCorrect: null,
      response: [],
      // correctResponse: []
      query: "",
    });
    this.setCorrectAnswer(challengeValues[page - 1][0]);
  };

  submitHandler = async (event, query) => {
    const { correctResponse } = this.state;
    if (!query) return;
    this.setState({ loading: true });
    event.preventDefault();

    window.localStorage.setItem(this.state.page.toString(), query);

    const data = await fetchData(query);
    if (!data) return alert("Что то с сервером не так...");

    this.setState({ response: data.resp, status: data.status });
    if (equal(data?.resp, correctResponse))
      this.setState({ isAnswerCorrect: true });
    else this.setState({ isAnswerCorrect: false });

    this.setState({ loading: false });
  };

  changeLangHandler = () => {
    if (this.state.lang === "gb") {
      this.setState({ lang: "ru" });
      localStorage.setItem("SQLTrainLang", "ru");
    } else {
      this.setState({ lang: "gb" });
      localStorage.setItem("SQLTrainLang", "gb");
    }
  };

  setQuery = (query) => this.setState(query);

  render() {
    const {
      response,
      correctResponse,
      status,
      loading,
      isAnswerCorrect,
      page,
      lang,
      query,
    } = this.state;
    return (
      <Container style={{ marginTop: 20, minWidth: 770 }}>
        <AppHeader
          isCorrect={isAnswerCorrect}
          challengeValue={challengeValues[page - 1]}
          changeLangHandler={this.changeLangHandler}
          lang={lang}
        />

        <AnswerArea
          loading={loading}
          page={page}
          submitHandler={this.submitHandler}
          nextHandler={this.nextHandler}
          isCorrect={isAnswerCorrect}
          challengeValue={challengeValues[page - 1]}
          lang={lang}
          query={query}
          setQuery={this.setQuery}
        />

        <TablesRes
          status={status}
          response={response}
          correctResponse={correctResponse}
          lang={lang}
          loading={loading}
        />
      </Container>
    );
  }
}

export default MainScreen;
