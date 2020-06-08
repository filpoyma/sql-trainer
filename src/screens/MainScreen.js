import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  TextArea,
} from "semantic-ui-react";
import { fetchData } from "../lib/fetchSqlQuery";
import { TablesRes } from "../components/TablesRes";
import { AnswerArea } from "../components/AnswerArea";

class MainScreen extends Component {
  state = {
    query:
      "SELECT * FROM invoices WHERE billing_state = 'WA' AND billing_city = 'Redmond';",
    response: [],
    correctQuery:
      "SELECT * FROM invoices WHERE billing_state = 'WA' AND billing_city = 'Redmond';",
    correctResponse: [],
    status: "ok",
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const data = await fetchData(this.state.correctQuery);
    if (data) this.setState({ correctResponse: data.resp, status: data.status });
    else alert("Что то с сервером не так...");
    this.setState({ loading: false });
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = async (event) => {
    const { query } = this.state;
    if (!query) return;
    event.preventDefault();
    this.setState({ loading: true });
    const data = await fetchData(query);
    if (data) this.setState({ response: data.resp, status: data.status });
    else alert("Что то с сервером не так...");
    this.setState({ loading: false });
  };

  render() {
    const { response, correctResponse, status, loading } = this.state;
    console.log(response);
    return (
      <Container style={{ marginTop: 20, minWidth: 770 }}>
        <Header as="h2">SQL Tutor</Header>
        <Divider />

        <AnswerArea
          loading={loading}
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
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
