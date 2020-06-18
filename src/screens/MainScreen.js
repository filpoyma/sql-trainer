import React, { Component } from "react";
import { Container} from "semantic-ui-react";

import { fetchData } from "../lib/fetchSqlQuery";
import { TablesRes } from "../components/TablesRes";
import { AnswerArea } from "../components/AnswerArea";
import { challengeValues } from "../api/chalenge";
import { AppHeader } from "../components/Header";

const equal = require("deep-equal");

class MainScreen extends Component {

  startPage = +sessionStorage.getItem("SQLTrainPage") || 1;
  lang = localStorage.getItem("SQLTrainLang") || 'gb';

  state = {
    correctQuery: "",
    response: [],
    correctResponse: [],
    status: "ok",
    loading: false,
    page: this.startPage,
    isAnswerCorrect: null,
    lang: this.lang,
  };


  componentDidMount() {
    this.setCorrectAnswer(challengeValues[this.startPage-1][0]);
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
    if (page > challengeValues.length) return;
    sessionStorage.setItem("SQLTrainPage", page);
    this.setState({
      page: page,
      isAnswerCorrect: null,
      response: [],
      // correctResponse: []
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
    else this.setState({ isAnswerCorrect: false });

    this.setState({ loading: false });
  };

  changeLangHandler = () => {
    if (this.state.lang === 'gb') {
      this.setState({lang: 'ru'});
      localStorage.setItem("SQLTrainLang", 'ru');
    }
    else {
      this.setState({lang: 'gb'});
      localStorage.setItem("SQLTrainLang", 'gb');
    }
  };

  render() {
    const {
      response,
      correctResponse,
      status,
      loading,
      isAnswerCorrect,
      page,
      lang,
    } = this.state;
    return (
      <Container style={{ marginTop: 20, minWidth: 770 }}>
        <AppHeader
          isCorrect={isAnswerCorrect}
          challengeValue={challengeValues[this.state.page - 1]}
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
