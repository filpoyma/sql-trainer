import React, { Component } from "react";
import { Button, Container, Header, List, TextArea } from "semantic-ui-react";

class MainScreen extends Component {
  state = {
    query: "SELECT name FROM artists;",
    response: [],
    status: "ok",
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    const { query } = this.state;
    if (!query) return;
    event.preventDefault();
    this.fetchData(query);
  };

  fetchData = async (query) => {
    try {
      console.log(query)
      const res = await fetch('http://localhost:3100/query', {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({query: query})
      });
      const data = await res.json();
      console.log('data', data)
      this.setState({ response: data.resp, status: data.status });
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  render() {
    const { response, status } = this.state;
    return (
      <Container text>
        <Header as="h2">Header</Header>
        <p>
          "List the names of the top five customers based on the sums of their invoice totals"
        </p>
        <TextArea
          placeholder="SQL запрос..."
          style={{ minHeight: 100, width: "100%", maxWidth: "100%" }}
          name="query"
          onChange={this.changeHandler}
        />
        <Button fluid onClick={this.submitHandler}>
          Run to sql base...
        </Button>
        {!status && <p>Ошибочный запрос: <br/>{response}</p>}

        {status && <List
          items={response?.map((item) => {
            let line = "";
            for (let [key, value] of Object.entries(item)) line += `${key}: ${value}  `;
            return line;
          })}
        />}
      </Container>
    );
  }
}

export default MainScreen;
